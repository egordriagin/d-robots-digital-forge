
-- Create enum type only if it doesn't exist
DO $$ BEGIN
    CREATE TYPE public.stock_status AS ENUM ('in-stock', 'out-of-stock', 'backorder', 'discontinued', 'pre-order');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Drop the products table if it exists (since we're starting fresh)
DROP TABLE IF EXISTS public.products CASCADE;

-- Create the main products table
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    images TEXT[] NOT NULL DEFAULT '{}',
    pricing_base TEXT NOT NULL,
    pricing_with_ams TEXT,
    pricing_with_accessories TEXT,
    lead_time TEXT NOT NULL,
    stock_status stock_status NOT NULL DEFAULT 'in-stock',
    rating DECIMAL(2,1) NOT NULL DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    review_count INTEGER NOT NULL DEFAULT 0 CHECK (review_count >= 0),
    features TEXT[] NOT NULL DEFAULT '{}',
    shipping_cost TEXT NOT NULL,
    shipping_free_threshold TEXT NOT NULL,
    demo_video TEXT NOT NULL,
    reviews JSONB DEFAULT '[]',
    popular BOOLEAN DEFAULT FALSE,
    type TEXT,
    power TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_brand ON public.products(brand);
CREATE INDEX idx_products_popular ON public.products(popular);
CREATE INDEX idx_products_stock_status ON public.products(stock_status);
CREATE INDEX idx_products_rating ON public.products(rating DESC);
CREATE INDEX idx_products_name_search ON public.products USING GIN(to_tsvector('english', name));
CREATE INDEX idx_products_created_at ON public.products(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin-only access
-- Allow everyone to read products (public-facing website)
CREATE POLICY "Anyone can view products" ON public.products
    FOR SELECT USING (true);

-- Only authenticated users can insert products (you'll be the admin)
CREATE POLICY "Only authenticated users can insert products" ON public.products
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Only authenticated users can update products
CREATE POLICY "Only authenticated users can update products" ON public.products
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Only authenticated users can delete products
CREATE POLICY "Only authenticated users can delete products" ON public.products
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
