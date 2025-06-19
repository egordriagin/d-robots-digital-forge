
-- Create categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  brand TEXT,
  category_id UUID REFERENCES categories(id),
  short_description TEXT,
  full_description TEXT,
  base_price DECIMAL(12,2),
  shipping_cost DECIMAL(12,2) DEFAULT 0,
  lead_time TEXT,
  in_stock BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  demo_video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product images table
CREATE TABLE product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product features table
CREATE TABLE product_features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  feature TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product specifications table
CREATE TABLE product_specifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  spec_name TEXT NOT NULL,
  spec_value TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product pricing table (for different configurations)
CREATE TABLE product_pricing (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  configuration_name TEXT NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  review_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('3D Принтеры', '3d-printers', 'Профессиональные 3D принтеры для любых задач', '/lovable-uploads/6e6dfb31-5bb2-47de-ac80-62b214a5108c.png'),
('3D Сканеры', '3d-scanners', 'Высокоточное 3D сканирование объектов', '/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png'),
('Робо-собаки', 'robotic-dogs', 'Четвероногие роботы нового поколения', '/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png'),
('Роботы-гуманоиды', 'humanoid-robots', 'Передовые человекоподобные роботы', '/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png'),
('Роботизированные руки', 'robotic-arms', 'Промышленные манипуляторы высокой точности', '/lovable-uploads/0d3b1654-814f-455b-a2b3-0d3f3432c2c9.png'),
('Лазерные станки', 'laser-cutters', 'Точная лазерная резка и гравировка', '/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png');

-- Create indexes for better performance
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_product_images_product_id ON product_images(product_id);
CREATE INDEX idx_product_features_product_id ON product_features(product_id);
CREATE INDEX idx_product_specifications_product_id ON product_specifications(product_id);
CREATE INDEX idx_product_pricing_product_id ON product_pricing(product_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
