// src/integrations/supabase/api.ts

import { supabase } from './supabaseClient';
import { Product } from '@/types'; // Assuming you have a Product type definition

// Helper function to map category slugs to table names
const getSpecsTableName = (category: string): string | null => {
  const tableMap: { [key: string]: string } = {
    '3d-printers': 'printer_3d_specifications',
    '3d-scanners': 'scanner_specifications',
    'robotic-arms': 'robotic_arm_specifications',
    'robotic-dogs': 'robotic_dog_specifications',
    'humanoid-robots': 'humanoid_robot_specifications',
    'laser-cutters': 'laser_cutter_specifications',
  };
  return tableMap[category] || null;
};

// Helper function to fetch specifications from the correct table
const getSpecificationsByProductId = async (productId: number, category: string) => {
  const tableName = getSpecsTableName(category);
  if (!tableName) {
    console.error(`No specification table found for category: ${category}`);
    return null;
  }

  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('productId', productId) // Using the confirmed 'productId' foreign key
    .single();

  if (error) {
    console.error(`Error fetching specifications from ${tableName}:`, error);
    return null;
  }

  return data;
};

// The updated main function to get product details
export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  // Step 1: Fetch the base product data first
  const { data: productData, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (productError || !productData) {
    console.error('Error fetching product:', productError);
    return null;
  }

  // Step 2: Fetch the specifications dynamically
  const specifications = await getSpecificationsByProductId(productData.id, productData.category);

  // Step 3: Combine the base product data with its specifications
  return {
    ...productData,
    specifications, // Add the fetched specs to the final product object
  } as Product;
};
