
-- Insert Bambu Lab X1E product
DO $$
DECLARE
    category_id UUID;
    product_id UUID;
BEGIN
    -- Get the 3D Printers category ID
    SELECT id INTO category_id FROM categories WHERE slug = '3d-printers';
    
    -- Insert the product
    INSERT INTO products (
        name, slug, brand, category_id, short_description, full_description, 
        base_price, shipping_cost, lead_time, in_stock, rating, review_count, 
        demo_video_url
    ) VALUES (
        'Bambu Lab X1E',
        'bambu-x1e',
        'Bambu Lab',
        category_id,
        'Профессиональный 3D принтер с автоматической системой смены материалов и высокой точностью печати.',
        'Bambu Lab X1E представляет собой революционное решение в области 3D печати, объединяющее передовые технологии и простоту использования. Этот принтер оснащен уникальной системой автоматической смены материалов (AMS), которая позволяет печатать многоцветные и многоматериальные модели без вмешательства пользователя. Закрытая камера печати обеспечивает стабильную температуру и защиту от внешних воздействий, что критически важно для печати инженерных пластиков. Высокая скорость печати до 500 мм/с достигается благодаря оптимизированной механике и продвинутым алгоритмам управления движением.',
        2890000.00,
        15000.00,
        '14-21 рабочих дней',
        true,
        4.8,
        127,
        'https://www.youtube.com/embed/qMj_FIumSn8'
    ) RETURNING id INTO product_id;
    
    -- Insert product images
    INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES
    (product_id, 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop', 'Bambu Lab X1E главное изображение', 0),
    (product_id, 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop', 'Bambu Lab X1E вид сбоку', 1),
    (product_id, 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop', 'Bambu Lab X1E в работе', 2),
    (product_id, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', 'Bambu Lab X1E детали', 3);
    
    -- Insert product features
    INSERT INTO product_features (product_id, feature, sort_order) VALUES
    (product_id, 'Автоматическая калибровка', 0),
    (product_id, 'Система смены материалов AMS', 1),
    (product_id, 'Высокая скорость печати до 500 мм/с', 2),
    (product_id, 'Точность позиционирования ±0.1 мм', 3),
    (product_id, 'Закрытая камера печати с подогревом', 4),
    (product_id, 'Wi-Fi подключение и удаленное управление', 5),
    (product_id, 'Автоматическое выравнивание стола', 6),
    (product_id, 'Детектор окончания филамента', 7);
    
    -- Insert product specifications
    INSERT INTO product_specifications (product_id, spec_name, spec_value, sort_order) VALUES
    (product_id, 'Технология печати', 'FDM (Fused Deposition Modeling)', 0),
    (product_id, 'Область печати', '256 × 256 × 256 мм', 1),
    (product_id, 'Точность позиционирования', '±0.1 мм', 2),
    (product_id, 'Высота слоя', '0.08-0.35 мм', 3),
    (product_id, 'Поддерживаемые материалы', 'PLA, ABS, PETG, TPU, PA, PC, ASA', 4),
    (product_id, 'Скорость печати', 'до 500 мм/с', 5),
    (product_id, 'Диаметр филамента', '1.75 мм', 6),
    (product_id, 'Температура сопла', 'до 300°C', 7),
    (product_id, 'Температура стола', 'до 120°C', 8),
    (product_id, 'Подключение', 'Wi-Fi, Ethernet, USB', 9),
    (product_id, 'Размеры принтера', '385 × 389 × 457 мм', 10),
    (product_id, 'Вес', '31 кг', 11),
    (product_id, 'Питание', '220V, 350W', 12);
    
    -- Insert product pricing options
    INSERT INTO product_pricing (product_id, configuration_name, price, sort_order) VALUES
    (product_id, 'Базовая комплектация', 2890000.00, 0),
    (product_id, 'С системой AMS', 3290000.00, 1),
    (product_id, 'Полная комплектация', 3690000.00, 2);
    
    -- Insert sample reviews
    INSERT INTO reviews (product_id, author_name, rating, comment, review_date) VALUES
    (product_id, 'Дмитрий К.', 5, 'Отличный принтер! Качество печати превосходное, настройка простая. Рекомендую для профессионального использования.', '2024-03-15'),
    (product_id, 'Анна М.', 4, 'Очень доволен покупкой. Быстрая доставка, качественная упаковка. Принтер работает стабильно.', '2024-03-08'),
    (product_id, 'Сергей В.', 5, 'Профессиональное оборудование высокого класса. Система AMS работает безупречно.', '2024-03-02');
    
END $$;
