
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
      console.log(`Attempting to fetch product with ID: ${id}`);
      
      // First try to get product by ID (UUID)
      try {
        const dbProduct = await productService.getProductById(id);
        if (dbProduct) {
          console.log(`Found product by ID: ${dbProduct.name}`);
          return transformDatabaseToProduct(dbProduct);
        }
      } catch (error) {
        console.log(`Failed to get product by UUID, trying by slug/name: ${error}`);
        
        // If UUID fails, try to find by slug-like matching
        try {
          const dbProduct = await productService.getProductBySlug(id);
          if (dbProduct) {
            console.log(`Found product by slug: ${dbProduct.name}`);
            return transformDatabaseToProduct(dbProduct);
          }
        } catch (slugError) {
          console.error(`Failed to get product by slug: ${slugError}`);
        }
      }
      
      console.log(`No product found for ID: ${id}`);
      return null;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
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
