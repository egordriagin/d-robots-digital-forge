import { supabase } from "@/integrations/supabase/client";

export type DatabaseProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  short_description: string;
  full_description: string;
  images: string[];
  pricing_base: string;
  pricing_with_ams?: string;
  pricing_with_accessories?: string;
  lead_time: string;
  stock_status: 'in-stock' | 'out-of-stock' | 'backorder' | 'discontinued' | 'pre-order';
  rating: number;
  review_count: number;
  features: string[];
  shipping_cost: string;
  shipping_free_threshold: string;
  demo_video: string;
  reviews: any[];
  popular: boolean;
  type?: string;
  power?: string;
  created_at: string;
  updated_at: string;
};

// Generate slug from product name
export const generateProductSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const productService = {
  // Get all products
  async getProducts(): Promise<DatabaseProduct[]> {
    console.log('Fetching products from Supabase...');
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }

    console.log(`Fetched ${data?.length || 0} products from database`);
    return (data || []).map(product => ({
      ...product,
      reviews: Array.isArray(product.reviews) ? product.reviews : []
    }));
  },

  // Get products by category
  async getProductsByCategory(category: string): Promise<DatabaseProduct[]> {
    console.log(`Fetching products for category: ${category}`);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('popular', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }

    console.log(`Fetched ${data?.length || 0} products for category ${category}`);
    return (data || []).map(product => ({
      ...product,
      reviews: Array.isArray(product.reviews) ? product.reviews : []
    }));
  },

  // Get single product by ID
  async getProductById(id: string): Promise<DatabaseProduct | null> {
    console.log(`Fetching product with ID: ${id}`);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`Product with ID ${id} not found`);
        return null;
      }
      console.error('Error fetching product:', error);
      throw error;
    }

    console.log(`Fetched product: ${data?.name}`);
    return {
      ...data,
      reviews: Array.isArray(data.reviews) ? data.reviews : []
    };
  },

  // Get product by slug - completely rewritten for better matching
  async getProductBySlug(slug: string): Promise<DatabaseProduct | null> {
    console.log(`Searching for product by slug: ${slug}`);
    
    // Get all products and find the best match
    const { data: allProducts, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Error fetching products for slug search:', error);
      throw error;
    }

    if (!allProducts || allProducts.length === 0) {
      console.log('No products found in database');
      return null;
    }

    // Find product where generated slug matches the requested slug
    const matchingProduct = allProducts.find(product => {
      const productSlug = generateProductSlug(product.name);
      console.log(`Comparing slug "${slug}" with generated slug "${productSlug}" for product "${product.name}"`);
      return productSlug === slug;
    });

    if (matchingProduct) {
      console.log(`Found product by slug: ${matchingProduct.name}`);
      return {
        ...matchingProduct,
        reviews: Array.isArray(matchingProduct.reviews) ? matchingProduct.reviews : []
      };
    }

    console.log(`No product found matching slug: ${slug}`);
    console.log('Available product slugs:', allProducts.map(p => `"${generateProductSlug(p.name)}"`));
    return null;
  },

  // Search products by name
  async searchProducts(query: string): Promise<DatabaseProduct[]> {
    console.log(`Searching for products: ${query}`);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .textSearch('name', query)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching products:', error);
      throw error;
    }

    console.log(`Found ${data?.length || 0} products matching "${query}"`);
    return (data || []).map(product => ({
      ...product,
      reviews: Array.isArray(product.reviews) ? product.reviews : []
    }));
  },

  // Insert new product
  async insertProduct(product: Omit<DatabaseProduct, 'id' | 'created_at' | 'updated_at'>): Promise<DatabaseProduct> {
    console.log(`Inserting new product: ${product.name}`);
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();

    if (error) {
      console.error('Error inserting product:', error);
      throw error;
    }

    console.log(`Successfully inserted product: ${data.name}`);
    return {
      ...data,
      reviews: Array.isArray(data.reviews) ? data.reviews : []
    };
  },

  // Update product
  async updateProduct(id: string, updates: Partial<DatabaseProduct>): Promise<DatabaseProduct> {
    console.log(`Updating product: ${id}`);
    const { data, error } = await supabase
      .from('products')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      throw error;
    }

    console.log(`Successfully updated product: ${data.name}`);
    return {
      ...data,
      reviews: Array.isArray(data.reviews) ? data.reviews : []
    };
  },

  // Delete product
  async deleteProduct(id: string): Promise<void> {
    console.log(`Deleting product: ${id}`);
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting product:', error);
      throw error;
    }

    console.log(`Successfully deleted product: ${id}`);
  },

  // Batch insert products
  async batchInsertProducts(products: Omit<DatabaseProduct, 'id' | 'created_at' | 'updated_at'>[]): Promise<DatabaseProduct[]> {
    console.log(`Batch inserting ${products.length} products`);
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (error) {
      console.error('Error batch inserting products:', error);
      throw error;
    }

    console.log(`Successfully batch inserted ${data?.length || 0} products`);
    return (data || []).map(product => ({
      ...product,
      reviews: Array.isArray(product.reviews) ? product.reviews : []
    }));
  }
};
