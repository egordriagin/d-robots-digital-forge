// src/integrations/supabase/api.ts

import { supabase } from './client';
import type { Product } from '@/types/product';
import type { Tables } from './types';

/**
 * Maps a product category slug to its corresponding Supabase table name.
 * This makes the data fetching logic scalable and easy to maintain.
 *
 * @param {string} category - The category slug (e.g., '3d-scanners').
 * @returns {string | null} The Supabase table name or null if not found.
 */
const getSpecTableName = (category: string): string | null => {
  const categoryToSpecTableMap: Record<string, string> = {
    '3d-printers': 'printer_specifications',
    '3d-scanners': 'scanner_specifications',
    'humanoid-robots': 'humanoid_robot_specifications',
    'laser-cutters': 'laser_cutter_specifications',
    'robotic-arms': 'robotic_arm_specifications',
    'robotic-dogs': 'robotic_dog_specifications',
  };
  return categoryToSpecTableMap[category] || null;
};

/**
 * Fetches a single product and its specific category specifications by slug.
 * This function first fetches the product to get its ID, then fetches its
 * related specifications and reviews in a second, more robust step.
 *
 * @param {string} slug - The URL slug of the product.
 * @param {string} category - The category of the product.
 * @returns {Promise<Product | null>} A promise that resolves to the product object or null if not found.
 */
export async function fetchProductBySlug(slug: string, category: string): Promise<Product | null> {
  // Step 1: Fetch the base product data to get its actual database ID.
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*') // Select all columns to get the 'id'
    .eq('slug', slug)
    .single();

  if (productError || !product) {
    console.error(`Error fetching product [slug: ${slug}]:`, productError);
    return null;
  }

  // Step 2: Determine the correct specifications table.
  const specTable = getSpecTableName(category);
  let specifications: any = undefined;
  let reviews: any[] = [];

  // Step 3: Create promises to fetch reviews and specifications (if a table exists).
  // This allows them to be fetched in parallel for better performance.
  const reviewPromise = supabase
    .from('reviews')
    .select('*')
    .eq('productId', product.id); // Assumes reviews are linked by the numeric product.id

  const specPromise = specTable
    ? supabase.from(specTable).select('*').eq('productId', product.id).single()
    : Promise.resolve({ data: undefined, error: null }); // If no spec table, resolve immediately.

  // Step 4: Execute the fetches.
  const [reviewResult, specResult] = await Promise.all([reviewPromise, specPromise]);

  // Process review results
  if (reviewResult.error) {
    console.error(`Error fetching reviews for product [id: ${product.id}]:`, reviewResult.error);
  } else {
    reviews = reviewResult.data || [];
  }

  // Process specification results
  if (specTable && specResult.data) {
    specifications = specResult.data;
  } else if (specTable && specResult.error) {
    // A "no rows returned" error is normal if a product just doesn't have specs entered yet.
    // We will log any other, more serious errors.
    if (!specResult.error.message.includes('multiple (or no) rows returned')) {
      console.error(`Error fetching specs from "${specTable}" for product [id: ${product.id}]:`, specResult.error);
    }
  }

  // Step 5: Combine all the data into the final Product object and return it.
  return {
    ...product,
    id: product.slug!, // Keep your app's logic of using the slug as the frontend ID
    reviews,
    specifications,
  } as unknown as Product;
}


/**
 * Fetches all products within a given category.
 * Note: This function does not fetch detailed specifications for the list view to keep it lightweight.
 *
 * @param {string} category - The category to fetch products for.
 * @returns {Promise<Product[]>} A promise that resolves to an array of products.
 */
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, brand, category, shortDescription, images, pricing, slug, rating, reviewCount, popular')
    .eq('category', category);

  if (error) {
    console.error(`Error fetching products for category "${category}":`, error);
    return [];
  }

  return (data || []).map(p => ({ ...p, id: p.slug! })) as unknown as Product[];
}
