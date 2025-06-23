// src/integrations/supabase/api.ts

import { supabase } from './client';
import { Product } from '@/types/product';
import { Database, Tables } from './types'; // Import Database for correct typing

// Define a more precise type for the data we fetch.
// This uses the generated types and correctly defines one-to-one relationships.
type ProductWithSpecs = Tables<'products'> & {
  reviews: Tables<'reviews'>[];
  printer_specifications: Tables<'printer_specifications'> | null;
  scanner_specifications: Tables<'scanner_specifications'> | null;
  robotic_dog_specifications: Tables<'robotic_dog_specifications'> | null;
  humanoid_robot_specifications: Tables<'humanoid_robot_specifications'> | null;
  robotic_arm_specifications: Tables<'robotic_arm_specifications'> | null;
  laser_cutter_specifications: Tables<'laser_cutter_specifications'> | null;
};

/**
 * Fetches a single product by its URL-friendly slug.
 * @param slug The slug of the product to fetch.
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      reviews(*),
      printer_specifications(*),
      scanner_specifications(*),
      robotic_dog_specifications(*),
      humanoid_robot_specifications(*),
      robotic_arm_specifications(*),
      laser_cutter_specifications(*)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
  if (!data) return null;

  const dbProduct = data as ProductWithSpecs;

  // Transform the database response to the frontend Product type
  const product: Product = {
    ...dbProduct,
    id: dbProduct.slug!, // Use the slug as the ID for the frontend router
    reviews: dbProduct.reviews || [],
    printerSpecifications: dbProduct.printer_specifications ?? undefined,
    scannerSpecifications: dbProduct.scanner_specifications ?? undefined,
    roboticDogSpecifications: dbProduct.robotic_dog_specifications ?? undefined,
    humanoidRobotSpecifications: dbProduct.humanoid_robot_specifications ?? undefined,
    roboticArmSpecifications: dbProduct.robotic_arm_specifications ?? undefined,
    laserCutterSpecifications: dbProduct.laser_cutter_specifications ?? undefined,
  };

  return product;
}

/**
 * Fetches a list of products for a given category.
 * @param category The category slug (e.g., '3d-printers').
 */
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*, slug') // Ensure we always fetch the slug
      .eq('category', category);

    if (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return [];
    }

    // Map the database 'slug' to the frontend 'id' field for the links
    return (data || []).map(p => ({ ...p, id: p.slug })) as Product[];
}
