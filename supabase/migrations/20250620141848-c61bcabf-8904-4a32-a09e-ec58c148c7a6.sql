
-- Create RLS policies for the products table to allow public access
-- Since this is a public-facing e-commerce site, products should be readable by everyone
-- and insertable for migrations

-- Policy to allow everyone to read products
CREATE POLICY "Allow public read access to products" 
ON public.products 
FOR SELECT 
TO public 
USING (true);

-- Policy to allow insertions (needed for migration)
CREATE POLICY "Allow public insert access to products" 
ON public.products 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Policy to allow updates (needed for maintenance)
CREATE POLICY "Allow public update access to products" 
ON public.products 
FOR UPDATE 
TO public 
USING (true);

-- Policy to allow deletions (needed for clearing products)
CREATE POLICY "Allow public delete access to products" 
ON public.products 
FOR DELETE 
TO public 
USING (true);
