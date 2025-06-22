// src/integrations/supabase/api.ts

import { supabase } from './client';
import { Product } from '@/types/product';
import { Tables } from './types';

// Helper type with corrected one-to-one relationships for specifications
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

  // Since Supabase returns a single object for a one-to-one relation,
  // we can cast it directly.
  const dbProduct = data as ProductWithSpecs;

  // Transform the data for the frontend
  const product: Product = {
    ...(dbProduct as any),
    id: dbProduct.slug!,
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
      .select('id, name, brand, images, rating, pricing, popular, type, power, shortDescription, stockStatus, leadTime, slug')
      .eq('category', category);

    if (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return [];
    }

    // Map the database 'slug' to the frontend 'id' field for the links
    return (data || []).map(p => ({ ...p, id: p.slug })) as unknown as Product[];
}