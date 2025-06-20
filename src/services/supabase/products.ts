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

  // Get product by slug-like identifier - improved matching
  async getProductBySlug(slug: string): Promise<DatabaseProduct | null> {
    console.log(`Searching for product by slug: ${slug}`);
    
    // Try multiple search strategies
    const searchStrategies = [
      // Strategy 1: Direct slug conversion "bambu-lab-x1-carbon" -> "Bambu Lab X1 Carbon"
      slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      // Strategy 2: Handle special cases like "x1-carbon" -> "X1 Carbon"
      slug.split('-').map(word => word.toUpperCase()).join(' '),
      // Strategy 3: Partial matching with original slug format
      slug.replace(/-/g, ' '),
      // Strategy 4: Try exact name match for common patterns
      slug.split('-').map(word => {
        // Handle special cases
        if (word.toLowerCase() === 'x1') return 'X1';
        if (word.toLowerCase() === 'mk4') return 'MK4';
        if (word.toLowerCase() === 'go2') return 'Go2';
        if (word.toLowerCase() === 'ur5e') return 'UR5e';
        if (word.toLowerCase() === 'nao6') return 'NAO6';
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ')
    ];
    
    for (const searchTerm of searchStrategies) {
      console.log(`Trying search term: "${searchTerm}"`);
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('name', `%${searchTerm}%`)
        .limit(1);

      if (error) {
        console.error(`Error searching with term "${searchTerm}":`, error);
        continue;
      }

      if (data && data.length > 0) {
        console.log(`Found product by slug with term "${searchTerm}": ${data[0].name}`);
        return {
          ...data[0],
          reviews: Array.isArray(data[0].reviews) ? data[0].reviews : []
        };
      }
    }

    // If no match found, try a broader search
    console.log(`No exact match found, trying broader search...`);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(10);

    if (error) {
      console.error('Error in broader search:', error);
      throw error;
    }

    // Log all product names for debugging
    console.log('Available products:', data?.map(p => p.name));
    
    console.log(`No product found matching slug: ${slug}`);
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
