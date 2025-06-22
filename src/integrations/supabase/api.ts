// src/integrations/supabase/api.ts
import { supabase } from './client';
import { Product } from '@/types/product';
import { Tables } from './types';

// Helper type to represent the raw data fetched from Supabase
type ProductWithSpecs = Tables<'products'> & {
  reviews: Tables<'reviews'>[];
  printer_specifications: Tables<'printer_specifications'>[];
  scanner_specifications: Tables<'scanner_specifications'>[];
  robotic_dog_specifications: Tables<'robotic_dog_specifications'>[];
  humanoid_robot_specifications: Tables<'humanoid_robot_specifications'>[];
  robotic_arm_specifications: Tables<'robotic_arm_specifications'>[];
  laser_cutter_specifications: Tables<'laser_cutter_specifications'>[];
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

  // Transform the data for the frontend
  const product: Product = {
    ...(dbProduct as any),
    id: dbProduct.slug!, // Use the slug as the ID for the frontend router
    printerSpecifications: dbProduct.printer_specifications?.[0],
    scannerSpecifications: dbProduct.scanner_specifications?.[0],
    roboticDogSpecifications: dbProduct.robotic_dog_specifications?.[0],
    humanoidRobotSpecifications: dbProduct.humanoid_robot_specifications?.[0],
    roboticArmSpecifications: dbProduct.robotic_arm_specifications?.[0],
    laserCutterSpecifications: dbProduct.laser_cutter_specifications?.[0],
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
