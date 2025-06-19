
import { PrinterSpecifications } from "@/types/printer-specifications";

export interface ProductData {
  id: string;
  name: string;
  brand: string;
  basePrice: string;
  shippingCost: string;
  leadTime: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  demoVideo: string;
  features: string[];
  pricing: {
    base: string;
    withAMS?: string;
    withAccessories: string;
  };
  shipping: {
    cost: string;
    freeThreshold: string;
    regions: string[];
  };
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  specifications: PrinterSpecifications;
}

const productDatabase: Record<string, ProductData> = {
  "bambu-x1": {
    id: "bambu-x1",
    name: "Bambu Lab X1E",
    brand: "Bambu Lab",
    basePrice: "2,890,000 ₽",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    ],
    shortDescription: "Профессиональный 3D принтер с автоматической системой смены материалов и высокой точностью печати.",
    fullDescription: `
      Bambu Lab X1E представляет собой революционное решение в области 3D печати, объединяющее передовые технологии и простоту использования. 
      
      Этот принтер оснащен уникальной системой автоматической смены материалов (AMS), которая позволяет печатать многоцветные и многоматериальные модели без вмешательства пользователя. 
      
      Закрытая камера печати обеспечивает стабильную температуру и защиту от внешних воздействий, что критически важно для печати инженерных пластиков.
      
      Высокая скорость печати до 500 мм/с достигается благодаря оптимизированной механике и продвинутым алгоритмам управления движением.
    `,
    demoVideo: "https://www.youtube.com/embed/qMj_FIumSn8",
    features: [
      "Автоматическая калибровка",
      "Система смены материалов AMS",
      "Высокая скорость печати до 500 мм/с",
      "Точность позиционирования ±0.1 мм",
      "Закрытая камера печати с подогревом",
      "Wi-Fi подключение и удаленное управление",
      "Автоматическое выравнивание стола",
      "Детектор окончания филамента"
    ],
    pricing: {
      base: "2,890,000 ₽",
      withAMS: "3,290,000 ₽",
      withAccessories: "3,690,000 ₽"
    },
    shipping: {
      cost: "15,000 ₽",
      freeThreshold: "3,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Дмитрий К.",
        rating: 5,
        date: "15 марта 2024",
        comment: "Отличный принтер! Качество печати превосходное, настройка простая. Рекомендую для профессионального использования."
      },
      {
        id: 2,
        author: "Анна М.",
        rating: 4,
        date: "8 марта 2024",
        comment: "Очень доволен покупкой. Быстрая доставка, качественная упаковка. Принтер работает стабильно."
      },
      {
        id: 3,
        author: "Сергей В.",
        rating: 5,
        date: "2 марта 2024",
        comment: "Профессиональное оборудование высокого класса. Система AMS работает безупречно."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "256 × 256 × 256 мм",
          area: "65 536 мм²",
          maxLength: "256 мм"
        },
        resolution: {
          layerHeight: "0.08-0.35 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "500 мм/с",
          typicalRange: "50-300 мм/с",
          materialDependent: "Скорость может снижаться при печати с гибкими или специальными материалами"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Закрытая камера с системой автоматической смены материалов (AMS)"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, PA, PC, ASA",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, платформа: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "385 × 389 × 457 мм",
          weight: "31 кг",
          requiredSpace: "Рекомендуется минимум 600 × 600 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран с интуитивным интерфейсом",
          displaySpecs: "5 дюймов, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 100 Мбит/с",
          usb: "USB Type-A, поддержка флеш-накопителей"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "350 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, автоматическая калибровка с помощью лидара и датчиков",
          sensors: "Датчик окончания филамента, контроль температуры, детектор засорения сопла",
          autoFeed: "Автоматическая система смены материалов (AMS) до 4 катушек"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj, .3mf",
          systemRequirements: "Минимум 8 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "Активный контроль температуры экструдера и платформы с PID-регулированием",
          realTimeMonitoring: "Да, через встроенную камеру и мобильное приложение"
        }
      }
    }
  },
  "qidi-x-max": {
    id: "qidi-x-max",
    name: "QIDI X-MAX 3",
    brand: "QIDI",
    basePrice: "1,850,000 ₽",
    shippingCost: "12,000 ₽",
    leadTime: "10-14 рабочих дней",
    inStock: true,
    rating: 4.4,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    ],
    shortDescription: "Высокотемпературный 3D принтер с закрытой камерой для печати инженерных пластиков.",
    fullDescription: `
      QIDI X-MAX 3 - это профессиональный 3D принтер, специально разработанный для печати высокотемпературными материалами. 
      
      Закрытая камера с активным подогревом до 65°C обеспечивает идеальные условия для печати ABS, PC, PETG и других инженерных пластиков без деформации и расслоения.
      
      Система двойного экструдера позволяет печатать водорастворимыми поддержками или создавать многоцветные модели.
      
      Прочная металлическая конструкция и система виброгашения обеспечивают высокую точность и стабильность печати.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-qidi-x-max",
    features: [
      "Закрытая камера с подогревом до 65°C",
      "Двойной экструдер",
      "Печать высокотемпературными материалами",
      "Автоматическое выравнивание стола",
      "Металлическая конструкция",
      "Система фильтрации воздуха",
      "Сенсорный экран 4.3 дюйма",
      "Wi-Fi подключение"
    ],
    pricing: {
      base: "1,850,000 ₽",
      withAccessories: "2,150,000 ₽"
    },
    shipping: {
      cost: "12,000 ₽",
      freeThreshold: "2,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Михаил П.",
        rating: 5,
        date: "20 марта 2024",
        comment: "Отличный принтер для инженерных материалов. ABS печатает без проблем, никаких деформаций."
      },
      {
        id: 2,
        author: "Елена С.",
        rating: 4,
        date: "12 марта 2024",
        comment: "Качественная сборка, стабильная работа. Двойной экструдер работает хорошо."
      },
      {
        id: 3,
        author: "Алексей Р.",
        rating: 4,
        date: "5 марта 2024",
        comment: "Хороший принтер для профессионального использования. Рекомендую."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "300 × 250 × 300 мм",
          area: "75 000 мм²",
          maxLength: "300 мм"
        },
        resolution: {
          layerHeight: "0.1-0.4 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "300 мм/с",
          typicalRange: "50-200 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Закрытая камера с подогревом и двойным экструдером"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, PC, PA, ASA, PVA",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 350°C, платформа: до 120°C, камера: до 65°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "595 × 590 × 675 мм",
          weight: "45 кг",
          requiredSpace: "Рекомендуется минимум 800 × 800 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "4.3 дюйма, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Нет",
          usb: "USB Type-A, USB Type-B"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "750 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, автоматическая калибровка с помощью датчиков",
          sensors: "Датчик окончания филамента, контроль температуры, датчик открытия дверцы",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj",
          systemRequirements: "Минимум 4 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "Активный контроль температуры экструдера, платформы и камеры",
          realTimeMonitoring: "Да, через встроенную камеру и Wi-Fi"
        }
      }
    }
  }
};

export const useProductData = (productId: string | undefined): ProductData | null => {
  if (!productId) return null;
  
  console.log("Looking for product with ID:", productId);
  const product = productDatabase[productId];
  
  if (!product) {
    console.log("Product not found, available products:", Object.keys(productDatabase));
    return null;
  }
  
  console.log("Found product:", product.name);
  return product;
};
