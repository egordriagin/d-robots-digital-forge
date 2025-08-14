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
 * This function dynamically joins the correct specification table based on the category.
 *
 * @param {string} slug - The URL slug of the product.
 * @param {string} category - The category of the product.
 * @returns {Promise<Product | null>} A promise that resolves to the product object or null if not found.
 */
export async function fetchProductBySlug(slug: string, category: string): Promise<Product | null> {
  const specTable = getSpecTableName(category);

  // If the category doesn't have a dedicated specifications table,
  // fetch the product without trying to join.
  if (!specTable) {
    console.warn(`No specification table mapping for category: "${category}". Fetching product without specs.`);
    const { data, error } = await supabase
      .from('products')
      .select('*, reviews(*)')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching product [slug: ${slug}] without specs:`, error);
      return null;
    }
    return data ? { ...data, id: data.slug!, specifications: undefined } as unknown as Product : null;
  }

  // Build a dynamic query to select the product and join its specific specifications table.
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      reviews(*),
      ${specTable}(*)
    `)
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error(`Error fetching product [slug: ${slug}] with specs from "${specTable}":`, error);
    return null;
  }

  // The specifications are returned as a nested array. We extract and flatten it.
  const specifications = (data[specTable] && Array.isArray(data[specTable]) && data[specTable].length > 0)
    ? data[specTable][0]
    : undefined;

  // Clean up the raw response to create a clean Product object.
  const productData = { ...data };
  delete productData[specTable]; // Remove the original nested spec property

  return {
    ...productData,
    id: productData.slug!,
    reviews: productData.reviews || [],
    specifications, // Add the flattened specifications object
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
