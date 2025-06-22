// src/integrations/supabase/api.ts

import { supabase } from './client';
import { Product } from '@/types/product';
import { Tables } from './types';

// Helper type to represent the raw data fetched from Supabase, including all possible spec tables.
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
 * Fetches a single product by its ID and transforms the data into the
 * nested structure the frontend components expect.
 * @param id The UUID of the product to fetch.
 */
export async function fetchProductById(id: string): Promise<Product | null> {
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
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  if (!data) return null;

  const dbProduct = data as ProductWithSpecs;

  // Transform the flat database response into the nested Product type
  const product: Product = {
    ...dbProduct,
    // The spec data comes back as an array, so we take the first element ([0]).
    // The optional chaining (?.) prevents errors if a spec type is not present for a product.
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
      .select('*')
      .eq('category', category);

    if (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }

    return data || [];
}
