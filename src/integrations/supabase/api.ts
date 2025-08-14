// src/integrations/supabase/api.ts

import { supabase } from './client';
import { Product } from '@/types/product';
import { Tables } from './types';

type ProductWithSpecs = Tables<'products'> & {
  reviews: Tables<'reviews'>[];
  printer_specifications: Tables<'printer_specifications'> | null;
  scanner_specifications: Tables<'scanner_specifications'> | null;
  robotic_dog_specifications: Tables<'robotic_dog_specifications'> | null;
  humanoid_robot_specifications: Tables<'humanoid_robot_specifications'> | null;
  robotic_arm_specifications: Tables<'robotic_arm_specifications'> | null;
  laser_cutter_specifications: Tables<'laser_cutter_specifications'> | null;
};

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

  if (error || !data) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }

  const dbProduct = data as ProductWithSpecs;

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

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*, slug, reviews(*)')
      .eq('category', category);

    if (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return [];
    }

    return (data || []).map(p => ({ ...p, id: p.slug! })) as unknown as Product[];
}
