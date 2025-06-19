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
  "bambu-p1s": {
    id: "bambu-p1s",
    name: "Bambu Lab P1S",
    brand: "Bambu Lab",
    basePrice: "1,890,000 ₽",
    shippingCost: "12,000 ₽",
    leadTime: "10-14 рабочих дней",
    inStock: true,
    rating: 4.7,
    reviewCount: 95,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    ],
    shortDescription: "Высокоскоростной 3D принтер с автоматической калибровкой и отличным соотношением цена-качество.",
    fullDescription: `
      Bambu Lab P1S - это доступная версия профессионального 3D принтера, сохраняющая все ключевые преимущества линейки Bambu Lab.
      
      Принтер оснащен системой автоматической калибровки, которая значительно упрощает настройку и обеспечивает стабильные результаты печати.
      
      Высокая скорость печати до 500 мм/с позволяет быстро создавать прототипы и готовые изделия без потери качества.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-bambu-p1s",
    features: [
      "Автоматическая калибровка",
      "Высокая скорость печати до 500 мм/с",
      "Точность позиционирования ±0.1 мм",
      "Wi-Fi подключение",
      "Автоматическое выравнивание стола",
      "Детектор окончания филамента",
      "Тихая работа",
      "Совместимость с AMS"
    ],
    pricing: {
      base: "1,890,000 ₽",
      withAccessories: "2,190,000 ₽"
    },
    shipping: {
      cost: "12,000 ₽",
      freeThreshold: "2,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Игорь С.",
        rating: 5,
        date: "18 марта 2024",
        comment: "Отличный принтер за свои деньги. Быстрый, точный, простой в настройке."
      },
      {
        id: 2,
        author: "Мария Л.",
        rating: 4,
        date: "10 марта 2024",
        comment: "Хороший выбор для начинающих и профессионалов. Качество печати превосходное."
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
          typicalRange: "50-300 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Открытая рама с системой автоматической калибровки"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, PA, PC, ASA",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, платформа: до 100°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "386 × 389 × 458 мм",
          weight: "28 кг",
          requiredSpace: "Рекомендуется минимум 600 × 600 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "4 дюйма, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Нет",
          usb: "USB Type-A"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "300 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, автоматическая калибровка с помощью датчиков",
          sensors: "Датчик окончания филамента, контроль температуры",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj",
          systemRequirements: "Минимум 4 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "Активный контроль температуры экструдера и платформы",
          realTimeMonitoring: "Да, через Wi-Fi"
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
  },
  "creatbot-d600": {
    id: "creatbot-d600",
    name: "Creatbot D600",
    brand: "Creatbot",
    basePrice: "2,450,000 ₽",
    shippingCost: "18,000 ₽",
    leadTime: "21-28 рабочих дней",
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Промышленный 3D принтер большого формата с высокой точностью и надежностью.",
    fullDescription: `
      Creatbot D600 - это профессиональный 3D принтер промышленного класса с увеличенной областью печати.
      
      Благодаря большому размеру рабочей области 600×600×600 мм, принтер идеально подходит для создания крупногабаритных прототипов и готовых изделий.
      
      Закрытая камера обеспечивает стабильную температуру и защищает процесс печати от внешних воздействий.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-creatbot-d600",
    features: [
      "Большая область печати 600×600×600 мм",
      "Закрытая камера с подогревом",
      "Двойной экструдер",
      "Высокая точность печати",
      "Промышленная надежность",
      "Автоматическое выравнивание стола",
      "Фильтрация воздуха",
      "Сенсорный экран управления"
    ],
    pricing: {
      base: "2,450,000 ₽",
      withAccessories: "2,850,000 ₽"
    },
    shipping: {
      cost: "18,000 ₽",
      freeThreshold: "2,500,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Андрей М.",
        rating: 5,
        date: "22 марта 2024",
        comment: "Отличный принтер для больших деталей. Качество печати на высоте."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "600 × 600 × 600 мм",
          area: "360 000 мм²",
          maxLength: "600 мм"
        },
        resolution: {
          layerHeight: "0.1-0.4 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.15 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "200 мм/с",
          typicalRange: "40-120 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Закрытая камера с двойным экструдером"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, PC, PA, ASA",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, платформа: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "900 × 800 × 1200 мм",
          weight: "85 кг",
          requiredSpace: "Рекомендуется минимум 1200 × 1000 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "7 дюймов, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 100 Мбит/с",
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
          consumption: "1200 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, автоматическая калибровка с помощью датчиков",
          sensors: "Датчик окончания филамента, контроль температуры",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj",
          systemRequirements: "Минимум 8 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "Активный контроль температуры экструдера и платформы",
          realTimeMonitoring: "Да, через встроенную камеру"
        }
      }
    }
  },
  "creatbot-peek-300": {
    id: "creatbot-peek-300",
    name: "Creatbot PEEK-300",
    brand: "Creatbot",
    basePrice: "3,890,000 ₽",
    shippingCost: "25,000 ₽",
    leadTime: "28-35 рабочих дней",
    inStock: false,
    rating: 4.8,
    reviewCount: 23,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Специализированный 3D принтер для печати материалом PEEK и другими высокотемпературными полимерами.",
    fullDescription: `
      Creatbot PEEK-300 - это уникальный 3D принтер, специально разработанный для работы с высокотемпературными материалами, включая PEEK, PEI и другие инженерные полимеры.
      
      Принтер оснащен высокотемпературным экструдером, способным нагреваться до 450°C, и камерой с активным подогревом до 90°C.
      
      Это делает его идеальным выбором для авиационной, медицинской и автомобильной промышленности.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-creatbot-peek",
    features: [
      "Печать материалом PEEK",
      "Экструдер до 450°C",
      "Камера с подогревом до 90°C",
      "Высокотемпературная платформа",
      "Специальные сопла для PEEK",
      "Система фильтрации воздуха",
      "Промышленная надежность",
      "Точное контроль температуры"
    ],
    pricing: {
      base: "3,890,000 ₽",
      withAccessories: "4,390,000 ₽"
    },
    shipping: {
      cost: "25,000 ₽",
      freeThreshold: "4,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Олег Н.",
        rating: 5,
        date: "5 марта 2024",
        comment: "Единственный принтер, который надежно печатает PEEK. Очень доволен покупкой."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "300 × 300 × 300 мм",
          area: "90 000 мм²",
          maxLength: "300 мм"
        },
        resolution: {
          layerHeight: "0.1-0.4 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "100 мм/с",
          typicalRange: "20-60 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Высокотемпературная система для печати PEEK"
        },
        materials: {
          supportedMaterials: "PEEK, PEI, PEKK, PPS, PPSU, PC, PA",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 450°C, платформа: до 160°C, камера: до 90°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "650 × 650 × 800 мм",
          weight: "95 кг",
          requiredSpace: "Рекомендуется минимум 1000 × 1000 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "7 дюймов, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 100 Мбит/с",
          usb: "USB Type-A, USB Type-B"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-60% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "2000 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, высокотемпературная система калибровки",
          sensors: "Датчик окончания филамента, контроль температуры, датчики безопасности",
          autoFeed: "Автоматическая подача материала"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj",
          systemRequirements: "Минимум 8 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Да, контроль усилия подачи",
          temperatureControl: "Прецизионный контроль температуры с точностью ±1°C",
          realTimeMonitoring: "Да, полный мониторинг процесса"
        }
      }
    }
  },
  "flashforge-creator-4": {
    id: "flashforge-creator-4",
    name: "Flashforge Creator 4",
    brand: "Flashforge",
    basePrice: "1,650,000 ₽",
    shippingCost: "10,000 ₽",
    leadTime: "7-14 рабочих дней",
    inStock: true,
    rating: 4.3,
    reviewCount: 78,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Надежный 3D принтер с двойным экструдером и закрытой камерой для стабильной печати.",
    fullDescription: `
      Flashforge Creator 4 - это универсальный 3D принтер, сочетающий в себе надежность, функциональность и доступную цену.
      
      Двойной экструдер позволяет печатать многоцветные модели или использовать растворимые поддержки для сложных геометрий.
      
      Закрытая камера обеспечивает стабильную температуру и защиту от сквозняков, что особенно важно при печати ABS и других материалов.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-flashforge-creator4",
    features: [
      "Двойной экструдер",
      "Закрытая камера",
      "Подогреваемая платформа",
      "Автоматическое выравнивание",
      "Сенсорный экран 5 дюймов",
      "Wi-Fi подключение",
      "Фильтрация воздуха",
      "Тихая работа"
    ],
    pricing: {
      base: "1,650,000 ₽",
      withAccessories: "1,950,000 ₽"
    },
    shipping: {
      cost: "10,000 ₽",
      freeThreshold: "1,800,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Павел К.",
        rating: 4,
        date: "16 марта 2024",
        comment: "Хороший принтер за свои деньги. Двойной экструдер работает отлично."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "200 × 148 × 150 мм",
          area: "29 600 мм²",
          maxLength: "200 мм"
        },
        resolution: {
          layerHeight: "0.1-0.4 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.2 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "150 мм/с",
          typicalRange: "40-100 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Закрытая камера с двойным экструдером"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, PVA, HIPS",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 240°C, платформа: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "420 × 485 × 381 мм",
          weight: "22 кг",
          requiredSpace: "Рекомендуется минимум 600 × 700 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "5 дюймов, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 100 Мбит/с",
          usb: "USB Type-A"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "280 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, автоматическая калибровка",
          sensors: "Датчик окончания филамента, контроль температуры",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj",
          systemRequirements: "Минимум 4 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "Активный контроль температуры",
          realTimeMonitoring: "Да, через камеру и Wi-Fi"
        }
      }
    }
  },
  "prusa-mk4": {
    id: "prusa-mk4",
    name: "Prusa MK4",
    brand: "Prusa",
    basePrice: "2,190,000 ₽",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Легендарный 3D принтер с открытым исходным кодом и непревзойденным качеством печати.",
    fullDescription: `
      Prusa MK4 - это последняя версия легендарного 3D принтера от чешской компании Prusa Research.
      
      Принтер известен своим превосходным качеством печати, надежностью и активным сообществом пользователей.
      
      Открытая архитектура и постоянные обновления прошивки обеспечивают долгий срок службы и актуальность принтера.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-prusa-mk4",
    features: [
      "Высочайшее качество печати",
      "Автоматическая калибровка",
      "Магнитная стальная платформа",
      "Обнаружение столкновений",
      "Восстановление печати после сбоя",
      "Открытый исходный код",
      "Активное сообщество",
      "Регулярные обновления"
    ],
    pricing: {
      base: "2,190,000 ₽",
      withAccessories: "2,590,000 ₽"
    },
    shipping: {
      cost: "15,000 ₽",
      freeThreshold: "2,500,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Дмитрий А.",
        rating: 5,
        date: "25 марта 2024",
        comment: "Лучший принтер, который у меня был. Качество печати потрясающее."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "250 × 210 × 220 мм",
          area: "52 500 мм²",
          maxLength: "250 мм"
        },
        resolution: {
          layerHeight: "0.05-0.35 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "200 мм/с",
          typicalRange: "50-150 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Открытая рама с магнитной платформой"
        },
        materials: {
          supportedMaterials: "PLA, PETG, ABS, ASA, TPU, PC, PA, PVA, HIPS",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, платформа: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "500 × 550 × 400 мм",
          weight: "15 кг",
          requiredSpace: "Рекомендуется минимум 700 × 700 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной дисплей с энкодером",
          displaySpecs: "2.8 дюйма, цветной LCD",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 100 Мбит/с",
          usb: "USB Type-A"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "120 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, система PINDA 2",
          sensors: "Датчик окончания филамента, датчик столкновений, контроль температуры",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj, .3mf",
          systemRequirements: "Минимум 4 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Да, обнаружение столкновений",
          temperatureControl: "Прецизионный контроль температуры",
          realTimeMonitoring: "Да, через Prusa Connect"
        }
      }
    }
  },
  "prusa-xl": {
    id: "prusa-xl",
    name: "Prusa XL",
    brand: "Prusa",
    basePrice: "4,890,000 ₽",
    shippingCost: "25,000 ₽",
    leadTime: "21-35 рабочих дней",
    inStock: false,
    rating: 4.6,
    reviewCount: 34,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Профессиональный 3D принтер большого формата с системой сменных печатающих головок.",
    fullDescription: `
      Prusa XL - это флагманский 3D принтер от Prusa Research с увеличенной областью печати и революционной системой сменных печатающих головок.
      
      Модульная система позволяет использовать до 5 различных материалов одновременно или быстро менять типы сопел в зависимости от задачи.
      
      Это идеальное решение для профессиональных пользователей, которым требуется максимальная гибкость и качество.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-prusa-xl",
    features: [
      "Большая область печати 360×360×360 мм",
      "Сменные печатающие головки",
      "До 5 материалов одновременно",
      "Автоматическая калибровка",
      "Система контроля нагрузки",
      "Высокая точность печати",
      "Модульная конструкция",
      "Профессиональное качество"
    ],
    pricing: {
      base: "4,890,000 ₽",
      withAccessories: "5,590,000 ₽"
    },
    shipping: {
      cost: "25,000 ₽",
      freeThreshold: "5,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Владимир С.",
        rating: 5,
        date: "8 марта 2024",
        comment: "Невероятные возможности для профессиональной работы. Сменные головки - это будущее."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "360 × 360 × 360 мм",
          area: "129 600 мм²",
          maxLength: "360 мм"
        },
        resolution: {
          layerHeight: "0.05-0.35 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "250 мм/с",
          typicalRange: "50-180 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Модульная система со сменными печатающими головками"
        },
        materials: {
          supportedMaterials: "PLA, PETG, ABS, ASA, TPU, PC, PA, PVA, HIPS, поддержка до 5 материалов",
          cartridgeSpecs: "Стандартные катушки 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, платформа: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "730 × 660 × 530 мм",
          weight: "42 кг",
          requiredSpace: "Рекомендуется минимум 1000 × 900 мм пространства вокруг"
        },
        interface: {
          controlType: "Цветной сенсорный экран",
          displaySpecs: "4.3 дюйма, цветной TFT",
          languages: "Многоязычный, включая русский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "Ethernet 1 Гбит/с",
          usb: "USB Type-A, USB Type-C"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "20-80% без конденсации"
        },
        power: {
          voltage: "220V переменного тока",
          consumption: "400 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Да, продвинутая система калибровки",
          sensors: "Множественные датчики, контроль нагрузки, обнаружение столкновений",
          autoFeed: "Автоматическая система подачи материалов"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: ".gcode, .stl, .obj, .3mf",
          systemRequirements: "Минимум 8 ГБ ОЗУ, 64-битная ОС"
        },
        qualityControl: {
          forceSensing: "Да, продвинутая система контроля нагрузки",
          temperatureControl: "Прецизионный контроль с обратной связью",
          realTimeMonitoring: "Да, полный мониторинг через Prusa Connect"
        }
      }
    }
  },
  "raise3d-pro3": {
    id: "raise3d-pro3",
    name: "Raise3D Pro3",
    brand: "Raise3D",
    basePrice: "2,750,000 ₽",
    shippingCost: "20,000 ₽",
    leadTime: "21-28 рабочих дней",
    inStock: true,
    rating: 4.5,
    reviewCount: 45,
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ],
    shortDescription: "Профессиональный 3D принтер с большой областью печати и продвинутыми функциями мониторинга.",
    fullDescription: `
      Raise3D Pro3 - это профессиональный 3D принтер, разработанный для промышленного использования и серийного производства.
      
      Принтер оснащен закрытой камерой, системой фильтрации воздуха и продвинутыми датчиками для мониторинга процесса печати.
      
      Большая область печати и высокая надежность делают его идеальным выбором для производственных задач.
    `,
    demoVideo: "https://www.youtube.com/embed/demo-raise3d-pro3",
    features: [
      "Большая область печати 300×300×300 мм",
      "Закрытая камера с подогревом",
      "Система фильтрации воздуха HEPA",
      "Камера для мониторинга",
      "Двойной экструдер IDEX",
      "Автоматическое выравнивание",
      "Восстановление печати",
      "Облачное управление"
    ],
    pricing: {
      base: "2,750,000 ₽",
      withAccessories: "3,250,000 ₽"
    },
    shipping: {
      cost: "20,000 ₽",
      freeThreshold: "3,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Константин В.",
        rating: 4,
        date: "12 марта 2024",
        comment: "Отличный принтер для производства. Стабильно работает 24/7."
      }
    ],
    specifications: {
      printing: {
        buildVolume: {
          dimensions: "300 × 300 × 300 мм",
          area: "90 000 мм²",
          maxLength: "300 мм"
        },
        resolution: {
          layerHeight: "0.1-0.4 мм",
          xyResolution: "0.1 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "150 мм/с",
          typicalRange: "40-100 мм/с"
        }
      },
      technology: {
        printingTechnology: {
         
