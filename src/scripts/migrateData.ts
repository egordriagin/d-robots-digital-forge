
import { supabase } from "@/integrations/supabase/client";
import { transformProductToDatabase } from "@/utils/productTransformers";
import type { Product } from "@/types/product";

// Sample product data
const sampleProducts: Omit<Product, 'id'>[] = [
  // 3D Printers
  {
    name: "Bambu Lab A1 mini",
    brand: "Bambu Lab",
    category: "3d-printers",
    shortDescription: "Компактный и надежный 3D принтер для начинающих и профессионалов",
    fullDescription: "Bambu Lab A1 mini - это идеальное решение для тех, кто ищет качественный 3D принтер по доступной цене. Благодаря автоматической калибровке и простому управлению, этот принтер подходит как для новичков, так и для опытных пользователей.",
    images: [
      "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
    ],
    pricing: {
      base: "от 25 000 ₽",
      withAMS: "от 35 000 ₽",
      withAccessories: "от 40 000 ₽"
    },
    leadTime: "7-14 дней",
    stockStatus: "in-stock" as const,
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Автоматическая калибровка стола",
      "Система контроля филамента",
      "Wi-Fi подключение",
      "Закрытый корпус",
      "Тихая работа"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "от 20 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example1",
    reviews: [
      {
        id: 1,
        author: "Алексей М.",
        rating: 5,
        date: "2024-01-15",
        comment: "Отличный принтер для начинающих. Простая настройка и стабильная печать."
      }
    ],
    popular: true,
    type: "FDM",
    power: "180W"
  },
  {
    name: "Prusa MK4",
    brand: "Prusa",
    category: "3d-printers",
    shortDescription: "Профессиональный 3D принтер с передовыми технологиями",
    fullDescription: "Prusa MK4 представляет собой вершину инженерной мысли в области 3D печати. Этот принтер оснащен всеми современными технологиями для обеспечения высокого качества печати.",
    images: [
      "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
    ],
    pricing: {
      base: "от 95 000 ₽",
      withAccessories: "от 120 000 ₽"
    },
    leadTime: "14-21 день",
    stockStatus: "in-stock" as const,
    rating: 4.9,
    reviewCount: 89,
    features: [
      "Система Input Shaping",
      "Автоматическая калибровка",
      "Магнитная платформа PEI",
      "Система контроля филамента",
      "MMU3 совместимость"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "от 50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example2",
    reviews: [],
    popular: true,
    type: "FDM",
    power: "250W"
  },

  // 3D Scanners
  {
    name: "SHINING 3D EinScan-SE",
    brand: "SHINING 3D",
    category: "3d-scanners",
    shortDescription: "Профессиональный настольный 3D сканер",
    fullDescription: "SHINING 3D EinScan-SE - это высокоточный 3D сканер, предназначенный для профессионального использования в различных отраслях промышленности.",
    images: [
      "/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png"
    ],
    pricing: {
      base: "от 180 000 ₽"
    },
    leadTime: "21-28 дней",
    stockStatus: "in-stock" as const,
    rating: 4.6,
    reviewCount: 34,
    features: [
      "Точность до 0.1 мм",
      "Автоматическое сканирование",
      "Поддержка цветного сканирования",
      "Простое ПО для обработки",
      "Быстрое сканирование"
    ],
    shipping: {
      cost: "5 000 ₽",
      freeThreshold: "от 200 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example3",
    reviews: [],
    popular: false,
    type: "Структурированный свет",
    power: "24W"
  },

  // Robotic Dogs
  {
    name: "Unitree Go2",
    brand: "Unitree",
    category: "robotic-dogs",
    shortDescription: "Продвинутый четвероногий робот для исследований",
    fullDescription: "Unitree Go2 - это мощный четвероногий робот, оснащенный современными сенсорами и вычислительными мощностями для выполнения сложных задач.",
    images: [
      "/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png"
    ],
    pricing: {
      base: "от 450 000 ₽"
    },
    leadTime: "60-90 дней",
    stockStatus: "pre-order" as const,
    rating: 4.7,
    reviewCount: 12,
    features: [
      "Автономная навигация",
      "Система компьютерного зрения",
      "Время работы до 2 часов",
      "Максимальная скорость 3.5 м/с",
      "SDK для разработки"
    ],
    shipping: {
      cost: "15 000 ₽",
      freeThreshold: "от 400 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example4",
    reviews: [],
    popular: true,
    type: "Квадрупедальный",
    power: "400W"
  },

  // Humanoid Robots
  {
    name: "NAO6",
    brand: "SoftBank Robotics",
    category: "humanoid-robots",
    shortDescription: "Гуманоидный робот для образования и исследований",
    fullDescription: "NAO6 - это программируемый гуманоидный робот, идеальный для образовательных учреждений и исследовательских проектов.",
    images: [
      "/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png"
    ],
    pricing: {
      base: "от 850 000 ₽"
    },
    leadTime: "45-60 дней",
    stockStatus: "backorder" as const,
    rating: 4.5,
    reviewCount: 8,
    features: [
      "25 степеней свободы",
      "Распознавание речи и лиц",
      "Программирование через Choregraphe",
      "Встроенные камеры и микрофоны",
      "Автономная работа до 60 минут"
    ],
    shipping: {
      cost: "25 000 ₽",
      freeThreshold: "от 800 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example5",
    reviews: [],
    popular: false,
    type: "Гуманоидный",
    power: "48W"
  },

  // Robotic Arms
  {
    name: "UR5e",
    brand: "Universal Robots",
    category: "robotic-arms",
    shortDescription: "Коллаборативная роботизированная рука",
    fullDescription: "UR5e - это универсальная коллаборативная роботизированная рука, предназначенная для работы рядом с людьми в производственной среде.",
    images: [
      "/lovable-uploads/0d3b1654-814f-455b-a2b3-0d3f3432c2c9.png"
    ],
    pricing: {
      base: "от 1 200 000 ₽"
    },
    leadTime: "30-45 дней",
    stockStatus: "in-stock" as const,
    rating: 4.8,
    reviewCount: 23,
    features: [
      "Полезная нагрузка 5 кг",
      "Радиус действия 850 мм",
      "6 степеней свободы",
      "Встроенные датчики силы",
      "Простое программирование"
    ],
    shipping: {
      cost: "30 000 ₽",
      freeThreshold: "от 1 000 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example6",
    reviews: [],
    popular: true,
    type: "Коллаборативный",
    power: "200W"
  },

  // Laser Cutters
  {
    name: "xTool D1 Pro",
    brand: "xTool",
    category: "laser-cutters",
    shortDescription: "Настольный лазерный гравер и резак",
    fullDescription: "xTool D1 Pro - это мощный и точный лазерный гравер, идеальный для создания различных изделий из дерева, акрила и других материалов.",
    images: [
      "/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png"
    ],
    pricing: {
      base: "от 45 000 ₽",
      withAccessories: "от 65 000 ₽"
    },
    leadTime: "10-14 дней",
    stockStatus: "in-stock" as const,
    rating: 4.7,
    reviewCount: 156,
    features: [
      "Лазер 10W/20W",
      "Рабочая область 432×406 мм",
      "Точность позиционирования 0.01 мм",
      "Wi-Fi подключение",
      "Совместимость с LaserBox Basic"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "от 30 000 ₽"
    },
    demoVideo: "https://www.youtube.com/watch?v=example7",
    reviews: [],
    popular: true,
    type: "Диодный",
    power: "20W"
  }
];

// Migration function
export const migrateProductData = async () => {
  console.log('Starting product data migration...');
  
  try {
    let successCount = 0;
    let errorCount = 0;
    
    for (const productData of sampleProducts) {
      try {
        console.log(`Migrating product: ${productData.name}`);
        
        // Transform product data to database format
        const dbProduct = transformProductToDatabase(productData);
        
        // Insert product into database
        const { data: insertedProduct, error: insertError } = await supabase
          .from('products')
          .insert(dbProduct)
          .select()
          .single();
        
        if (insertError) {
          console.error(`Error inserting product ${productData.name}:`, insertError);
          errorCount++;
          continue;
        }
        
        console.log(`✅ Successfully migrated: ${productData.name}`);
        successCount++;
        
      } catch (error) {
        console.error(`Error processing product ${productData.name}:`, error);
        errorCount++;
      }
    }
    
    console.log(`\n🎉 Migration completed!`);
    console.log(`✅ Successfully migrated: ${successCount} products`);
    if (errorCount > 0) {
      console.log(`❌ Failed to migrate: ${errorCount} products`);
    }
    
    return { success: successCount, errors: errorCount };
    
  } catch (error) {
    console.error('Fatal error during migration:', error);
    return { success: 0, errors: sampleProducts.length };
  }
};

// Check if products already exist
export const checkExistingProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id, name')
      .limit(5);
    
    if (error) {
      console.error('Error checking existing products:', error);
      return null;
    }
    
    return data?.length || 0;
  } catch (error) {
    console.error('Error checking existing products:', error);
    return null;
  }
};

// Clear all products (use with caution)
export const clearAllProducts = async () => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (error) {
      console.error('Error clearing products:', error);
      return false;
    }
    
    console.log('✅ All products cleared successfully');
    return true;
  } catch (error) {
    console.error('Error clearing products:', error);
    return false;
  }
};
