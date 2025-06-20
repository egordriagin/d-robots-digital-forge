
import { Product } from "@/types/product";
import { DatabaseProduct } from "@/services/supabase/products";

// Transform database product to frontend product format
export const transformDatabaseProductToProduct = (dbProduct: DatabaseProduct): Product => {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    brand: dbProduct.brand,
    category: dbProduct.category,
    shortDescription: dbProduct.short_description,
    fullDescription: dbProduct.full_description,
    images: dbProduct.images,
    pricing: {
      base: dbProduct.pricing_base,
      withAMS: dbProduct.pricing_with_ams,
      withAccessories: dbProduct.pricing_with_accessories,
    },
    leadTime: dbProduct.lead_time,
    stockStatus: dbProduct.stock_status,
    rating: dbProduct.rating,
    reviewCount: dbProduct.review_count,
    features: dbProduct.features,
    shipping: {
      cost: dbProduct.shipping_cost,
      freeThreshold: dbProduct.shipping_free_threshold,
    },
    demoVideo: dbProduct.demo_video,
    reviews: dbProduct.reviews || [],
    popular: dbProduct.popular || false,
    type: dbProduct.type || '',
    power: dbProduct.power || '',
  };
};

// Transform frontend product to database format
export const transformProductToDatabaseProduct = (product: Product): Omit<DatabaseProduct, 'id' | 'created_at' | 'updated_at'> => {
  return {
    name: product.name,
    brand: product.brand,
    category: product.category,
    short_description: product.shortDescription,
    full_description: product.fullDescription,
    images: product.images,
    pricing_base: product.pricing.base,
    pricing_with_ams: product.pricing.withAMS,
    pricing_with_accessories: product.pricing.withAccessories,
    lead_time: product.leadTime,
    stock_status: product.stockStatus,
    rating: product.rating,
    review_count: product.reviewCount,
    features: product.features,
    shipping_cost: product.shipping.cost,
    shipping_free_threshold: product.shipping.freeThreshold,
    demo_video: product.demoVideo,
    reviews: product.reviews,
    popular: product.popular,
    type: product.type,
    power: product.power,
  };
};
