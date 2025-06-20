
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/supabase/products";
import { transformDatabaseProductsArray, transformDatabaseToProduct } from "@/utils/productTransformers";

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const dbProducts = await productService.getProducts();
      return transformDatabaseProductsArray(dbProducts);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      const dbProducts = await productService.getProductsByCategory(category);
      return transformDatabaseProductsArray(dbProducts);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      console.log(`useProduct: Attempting to fetch product with ID: ${id}`);
      
      if (!id) {
        console.log('No ID provided');
        return null;
      }
      
      // Check if it looks like a UUID (contains hyphens and is 36 chars)
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      
      try {
        if (isUUID) {
          console.log(`ID appears to be UUID, trying direct lookup: ${id}`);
          const dbProduct = await productService.getProductById(id);
          if (dbProduct) {
            console.log(`Found product by UUID: ${dbProduct.name}`);
            return transformDatabaseToProduct(dbProduct);
          }
        }
        
        // Try slug lookup (either if not UUID or if UUID lookup failed)
        console.log(`Trying slug lookup: ${id}`);
        const dbProduct = await productService.getProductBySlug(id);
        if (dbProduct) {
          console.log(`Found product by slug: ${dbProduct.name}`);
          return transformDatabaseToProduct(dbProduct);
        }
        
        console.log(`No product found for ID: ${id}`);
        return null;
      } catch (error) {
        console.error(`Error fetching product: ${error}`);
        return null;
      }
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Only retry once to avoid spam
  });
};

export const useProductSearch = (query: string) => {
  return useQuery({
    queryKey: ['products', 'search', query],
    queryFn: async () => {
      const dbProducts = await productService.searchProducts(query);
      return transformDatabaseProductsArray(dbProducts);
    },
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
