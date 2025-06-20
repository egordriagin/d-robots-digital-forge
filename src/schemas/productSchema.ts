
import { z } from 'zod';

export const StockStatusSchema = z.enum(['in-stock', 'out-of-stock', 'backorder', 'discontinued', 'pre-order']);

export const PricingSchema = z.object({
  base: z.string().min(1, 'Base price is required'),
  withAMS: z.string().optional(),
  withAccessories: z.string().optional(),
});

export const ShippingSchema = z.object({
  cost: z.string().min(1, 'Shipping cost is required'),
  freeThreshold: z.string().min(1, 'Free threshold is required'),
});

export const ReviewSchema = z.object({
  id: z.number(),
  author: z.string().min(1, 'Author name is required'),
  rating: z.number().min(1).max(5),
  date: z.string().min(1, 'Date is required'),
  comment: z.string().min(1, 'Comment is required'),
});

export const ProductSchema = z.object({
  id: z.string().min(1, 'Product ID is required'),
  name: z.string().min(1, 'Product name is required'),
  brand: z.string().min(1, 'Brand is required'),
  category: z.string().min(1, 'Category is required'),
  shortDescription: z.string().min(1, 'Short description is required'),
  fullDescription: z.string().min(1, 'Full description is required'),
  images: z.array(z.string().url('Invalid image URL')).min(1, 'At least one image is required'),
  pricing: PricingSchema,
  leadTime: z.string().min(1, 'Lead time is required'),
  stockStatus: StockStatusSchema,
  rating: z.number().min(0).max(5),
  reviewCount: z.number().min(0),
  features: z.array(z.string().min(1)).min(1, 'At least one feature is required'),
  shipping: ShippingSchema,
  demoVideo: z.string().url('Invalid video URL'),
  reviews: z.array(ReviewSchema),
  popular: z.boolean().optional(),
  type: z.string().optional(),
  power: z.string().optional(),
});

export type ValidatedProduct = z.infer<typeof ProductSchema>;
