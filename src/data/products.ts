
import { PrinterSpecifications } from "@/types/printer-specifications";
import { ScannerSpecifications } from "@/types/scanner-specifications";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  basePrice: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  power?: string;
  inStock: boolean;
  pricing: {
    base: string;
    withAMS?: string;
    withAccessories?: string;
  };
  shipping: {
    cost: string;
    freeThreshold: string;
  };
  leadTime: string;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  demoVideo: string;
  printerSpecifications?: PrinterSpecifications;
  scannerSpecifications?: ScannerSpecifications;
}

const products: Product[] = [
  // 3D Printers
  {
    id: "creatbot-d600",
    name: "Creatbot D600",
    brand: "Creatbot",
    category: "3d-printers",
    basePrice: "Запросить цену",
    rating: 4.5,
    reviewCount: 23,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1615779458099-ca5701c1ca1f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1615779458099-ca5701c1ca1f?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Промышленный 3D принтер с большой областью печати и высокой точностью.",
    shortDescription: "Промышленный 3D принтер с большой областью печати и высокой точностью.",
    fullDescription: "Creatbot D600 представляет собой промышленный 3D принтер, который обеспечивает исключительную точность печати и может работать с широким спектром материалов. Этот принтер идеально подходит для производственных задач, где требуется высокая точность и надежность.",
    features: [
      "Большая область печати",
      "Высокая точность",
      "Поддержка различных материалов",
      "Автоматическая калибровка"
    ],
    pricing: {
      base: "от 450,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "2-3 недели",
    reviews: [
      {
        id: "1",
        author: "Александр К.",
        rating: 5,
        date: "15 декабря 2024",
        comment: "Отличный принтер для профессиональной работы. Высокое качество печати."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    printerSpecifications: {
      printing: {
        buildVolume: {
          dimensions: "600 x 600 x 600 мм",
          area: "360000 кв.мм",
          maxLength: "848 мм (диагональ)"
        },
        resolution: {
          layerHeight: "0.04 - 0.3 мм",
          xyResolution: "12.5 микрон",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "180 мм/с",
          typicalRange: "60-120 мм/с",
          materialDependent: "Зависит от типа материала"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Двойной экструдер"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PC, Nylon, Carbon Fiber, и др.",
          cartridgeSpecs: "Катушки 1.75 мм",
          temperatureRange: "До 420°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "940 x 1100 x 1650 мм",
          weight: "280 кг",
          requiredSpace: "1500 x 1500 мм"
        },
        interface: {
          controlType: "7-дюймовый сенсорный экран",
          displaySpecs: "1024 x 600 пикселей",
          languages: "Английский, Китайский"
        },
        connectivity: {
          wifi: "IEEE 802.11 b/g/n",
          ethernet: "10/100 Mbps",
          usb: "USB 2.0"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-30°C",
          humidity: "До 70%"
        },
        power: {
          voltage: "220V",
          consumption: "1200W",
          frequency: "50/60Hz"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Автоматическое выравнивание платформы",
          sensors: "Датчик окончания филамента",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS",
          fileFormats: "STL, OBJ, G-Code",
          systemRequirements: "Intel i5, 8GB RAM"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "PID-регулирование температуры",
          realTimeMonitoring: "Мониторинг через веб-интерфейс"
        }
      }
    }
  },
  {
    id: "flashforge-creator-4",
    name: "Flashforge Creator 4",
    brand: "Flashforge",
    category: "3d-printers",
    basePrice: "Запросить цену",
    rating: 4.3,
    reviewCount: 18,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1607868240674-d99d3649c043?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607868240674-d99d3649c043?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Профессиональный 3D принтер с независимыми экструдерами и закрытой камерой.",
    shortDescription: "Профессиональный 3D принтер с независимыми экструдерами и закрытой камерой.",
    fullDescription: "Flashforge Creator 4 - это профессиональный 3D принтер с независимыми экструдерами, который позволяет печатать двумя материалами одновременно. Закрытая камера обеспечивает стабильную температуру для качественной печати.",
    features: [
      "Независимые экструдеры",
      "Закрытая камера",
      "Высокая точность",
      "Поддержка различных материалов"
    ],
    pricing: {
      base: "от 380,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "2-3 недели",
    reviews: [
      {
        id: "2",
        author: "Мария П.",
        rating: 4,
        date: "10 декабря 2024",
        comment: "Хороший принтер, но требует настройки."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // 3D Scanners
  {
    id: "artec-eva",
    name: "Artec Eva",
    brand: "Artec 3D",
    category: "3d-scanners",
    basePrice: "Запросить цену",
    rating: 4.8,
    reviewCount: 15,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&overlay=top"
    ],
    description: "Профессиональный портативный 3D сканер для захвата объектов среднего размера с высокой точностью.",
    shortDescription: "Профессиональный портативный 3D сканер для захвата объектов среднего размера с высокой точностью.",
    fullDescription: "Artec Eva - это профессиональный портативный 3D сканер, использующий технологию структурированного света для создания высокоточных 3D моделей объектов среднего размера.",
    features: [
      "Технология структурированного света",
      "Точность до 0.1 мм",
      "Автоматическое выравнивание",
      "Захват цвета и текстуры"
    ],
    pricing: {
      base: "от 750,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "3-4 недели",
    reviews: [
      {
        id: "3",
        author: "Дмитрий С.",
        rating: 5,
        date: "8 декабря 2024",
        comment: "Превосходное качество сканирования!"
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    scannerSpecifications: {
      accuracy: {
        pointAccuracy: {
          range: "0.05-0.10 мм",
          typical: "0.1 мм",
          measurement: "Одноточечная точность"
        },
        volumetricAccuracy: {
          baseAccuracy: "0.03 мм",
          distanceCoefficient: "0.15 мм/м",
          formula: "0.03 мм + 0.15 мм/м × расстояние измерения"
        },
        resolution: {
          measurementResolution: "0.1 мм",
          pointDistance: "0.2 мм",
          outputMeshResolution: "0.1-2.0 мм"
        }
      },
      speed: {
        frameRate: "16 кадр/сек",
        measurementSpeed: "До 2 млн точек/сек",
        dataCollectionSpeed: "Быстрый режим: 5 сек/кадр, HD режим: 15 сек/кадр"
      },
      captureRange: {
        singleScanRange: "214 × 148 мм (на расстоянии 400 мм)",
        fieldOfView: "30° × 21°",
        depthOfField: "300-1000 мм",
        workingDistance: "400-1000 мм",
        objectSizeCapabilities: {
          minimum: "50 × 50 × 50 мм",
          maximum: "3 × 3 × 3 м",
          recommended: "0.2-2 м"
        }
      },
      technology: {
        scanningTechnology: {
          type: "Структурированный белый свет",
          lightSourceCharacteristics: "Безопасный LED источник, класс 1",
          camerasAndProjectors: "2 камеры, 1 проектор"
        },
        trackingAndPositioning: {
          alignmentMethods: "Геометрическое выравнивание, цветовое отслеживание",
          trackingCapabilities: "Автоматическое отслеживание без маркеров",
          markerSupport: "Поддержка маркеров и работа без маркеров"
        }
      },
      compatibility: {
        sizeConstraints: {
          recommendedRange: "0.2-2 м в любом измерении",
          typicalCharacteristics: "Средние и крупные объекты",
          maximumScannable: "До 3 м в любом измерении"
        },
        surfaceRequirements: {
          compatibleSurfaces: "Матовые, полуматовые поверхности",
          processingRecommendations: "Антибликовый спрей для отражающих поверхностей",
          limitations: "Сложности с прозрачными, зеркальными и черными поверхностями"
        }
      },
      software: {
        outputCompatibility: {
          supportedFileFormats: "OBJ, PLY, STL, WRL, E57, ASCII, PTX",
          operatingSystems: "Windows 10/11 (64-bit)",
          mobileCompatibility: "Не поддерживается"
        },
        systemRequirements: {
          minimumSpecs: "Intel i5, 8 ГБ RAM, DirectX 11",
          recommendedSpecs: "Intel i7, 16 ГБ RAM, дискретная видеокарта",
          ramGpuCpuRequirements: "16 ГБ RAM, NVIDIA GTX 1060 или лучше, Intel i7 8-го поколения"
        }
      },
      hardware: {
        equipmentCharacteristics: {
          weightAndDimensions: "0.85 кг, 262 × 158 × 63 мм",
          cableAndConnectivity: "USB 3.0, кабель 4.5 м",
          portabilityClassification: "Портативный ручной сканер"
        },
        operatingConditions: {
          indoorOutdoorCapabilities: "В основном для работы в помещении",
          lightingRequirements: "Избегать прямого солнечного света",
          environmentalConstraints: "Температура: 10-35°C, влажность: 20-80%"
        }
      },
      advanced: {
        scanningModes: {
          multipleOptions: "HD режим, быстрый режим, режим геометрии",
          textureColorCapture: "Полноцветный захват с разрешением 1.3 Мп",
          realtimeVsPostprocessing: "Обработка в реальном времени с предварительным просмотром"
        },
        qualityControl: {
          autoCalibration: "Автоматическая калибровка при запуске",
          errorDetectionCorrection: "Автоматическое обнаружение и исправление ошибок захвата",
          qualityAssessmentTools: "Встроенные инструменты контроля качества в Artec Studio"
        }
      }
    }
  },
  {
    id: "einstar-scanner",
    name: "EinStar 3D Scanner",
    brand: "Shining 3D",
    category: "3d-scanners",
    basePrice: "Запросить цену",
    rating: 4.6,
    reviewCount: 12,
    inStock: false,
    images: [
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop&overlay=top"
    ],
    description: "Доступный портативный 3D сканер с высокой точностью для образования и малого бизнеса.",
    shortDescription: "Доступный портативный 3D сканер с высокой точностью для образования и малого бизнеса.",
    fullDescription: "EinStar - это доступный портативный 3D сканер, который идеально подходит для образовательных учреждений и малого бизнеса. Использует инфракрасную технологию для высокоточного сканирования.",
    features: [
      "Инфракрасная технология VCSEL",
      "Точность до 0.1 мм",
      "Простота использования",
      "Доступная цена"
    ],
    pricing: {
      base: "от 180,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "4-5 недель",
    reviews: [
      {
        id: "4",
        author: "Елена М.",
        rating: 4,
        date: "5 декабря 2024",
        comment: "Отличное соотношение цена-качество."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Robotic Dogs
  {
    id: "unitree-go1",
    name: "Unitree Go1",
    brand: "Unitree Robotics",
    category: "robotic-dogs",
    basePrice: "Запросить цену",
    rating: 4.7,
    reviewCount: 8,
    inStock: true,
    power: "100W",
    images: [
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Интеллектуальный робот-собака для исследований, развлечений и образования.",
    shortDescription: "Интеллектуальный робот-собака для исследований, развлечений и образования.",
    fullDescription: "Unitree Go1 - это современный робот-собака, оснащенный передовыми алгоритмами искусственного интеллекта для автономного движения и взаимодействия с окружающей средой.",
    features: [
      "Интеллектуальное следование",
      "Обход препятствий",
      "Распознавание лиц",
      "Программируемое поведение"
    ],
    pricing: {
      base: "от 850,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "6-8 недель",
    reviews: [
      {
        id: "5",
        author: "Иван Т.",
        rating: 5,
        date: "1 декабря 2024",
        comment: "Невероятные возможности!"
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "boston-dynamics-spot",
    name: "Boston Dynamics Spot",
    brand: "Boston Dynamics",
    category: "robotic-dogs",
    basePrice: "Запросить цену",
    rating: 4.9,
    reviewCount: 6,
    inStock: false,
    power: "400W",
    images: [
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Передовой робот-собака для промышленного применения и исследований.",
    shortDescription: "Передовой робот-собака для промышленного применения и исследований.",
    fullDescription: "Boston Dynamics Spot - это передовой робот-собака, предназначенный для промышленного применения, инспекций и исследовательских задач в сложных условиях.",
    features: [
      "Автономная навигация",
      "Сбор данных",
      "Инспекция объектов",
      "Удаленное управление"
    ],
    pricing: {
      base: "от 2,500,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "12-16 недель",
    reviews: [
      {
        id: "6",
        author: "Компания ТехИнно",
        rating: 5,
        date: "25 ноября 2024",
        comment: "Лучший робот для промышленных задач."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Humanoid Robots
  {
    id: "atlas-robot",
    name: "Atlas Robot",
    brand: "Boston Dynamics",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    rating: 4.8,
    reviewCount: 4,
    inStock: false,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif"
    ],
    description: "Динамичный гуманоидный робот, способный выполнять сложные задачи.",
    shortDescription: "Динамичный гуманоидный робот, способный выполнять сложные задачи.",
    fullDescription: "Atlas Robot от Boston Dynamics представляет собой самый передовой гуманоидный робот в мире, способный выполнять сложные динамические движения и работать в экстремальных условиях.",
    features: [
      "Динамическое равновесие",
      "Сложная моторика",
      "Автономная навигация",
      "Работа в экстремальных условиях"
    ],
    pricing: {
      base: "по запросу"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "по согласованию",
    reviews: [
      {
        id: "7",
        author: "НИИ Робототехники",
        rating: 5,
        date: "20 ноября 2024",
        comment: "Революционная технология!"
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "pepper-robot",
    name: "Pepper Robot",
    brand: "SoftBank Robotics",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    rating: 4.5,
    reviewCount: 7,
    inStock: true,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg"
    ],
    description: "Гуманоидный робот для взаимодействия с людьми в сфере обслуживания.",
    shortDescription: "Гуманоидный робот для взаимодействия с людьми в сфере обслуживания.",
    fullDescription: "Pepper Robot - это дружелюбный гуманоидный робот, специально разработанный для взаимодействия с людьми в сфере обслуживания, образования и развлечений.",
    features: [
      "Распознавание эмоций",
      "Речь и общение",
      "Интерактивные приложения",
      "Привлечение внимания"
    ],
    pricing: {
      base: "от 1,200,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "8-10 недель",
    reviews: [
      {
        id: "8",
        author: "Торговый центр Мега",
        rating: 4,
        date: "15 ноября 2024",
        comment: "Отлично привлекает посетителей."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Robotic Arms
  {
    id: "universal-robots-ur5e",
    name: "Universal Robots UR5e",
    brand: "Universal Robots",
    category: "robotic-arms",
    basePrice: "Запросить цену",
    rating: 4.6,
    reviewCount: 11,
    inStock: true,
    images: [
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85",
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85"
    ],
    description: "Коллаборативный робот-манипулятор для автоматизации производства.",
    shortDescription: "Коллаборативный робот-манипулятор для автоматизации производства.",
    fullDescription: "Universal Robots UR5e - это коллаборативный робот-манипулятор нового поколения, обеспечивающий безопасную работу рядом с людьми и простую интеграцию в производственные процессы.",
    features: [
      "Простая интеграция",
      "Гибкая настройка",
      "Безопасная работа рядом с людьми",
      "Автоматизация задач"
    ],
    pricing: {
      base: "от 950,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "6-8 недель",
    reviews: [
      {
        id: "9",
        author: "Завод Автокомплект",
        rating: 5,
        date: "10 ноября 2024",
        comment: "Значительно повысил эффективность производства."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "fanuc-crx-10ia",
    name: "FANUC CRX-10iA",
    brand: "FANUC",
    category: "robotic-arms",
    basePrice: "Запросить цену",
    rating: 4.7,
    reviewCount: 9,
    inStock: true,
    images: [
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png",
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png"
    ],
    description: "Коллаборативный робот FANUC для различных промышленных задач.",
    shortDescription: "Коллаборативный робот FANUC для различных промышленных задач.",
    fullDescription: "FANUC CRX-10iA - это надежный коллаборативный робот с высокой точностью и простым программированием для широкого спектра промышленных применений.",
    features: [
      "Высокая надежность",
      "Простое программирование",
      "Безопасная работа",
      "Различные применения"
    ],
    pricing: {
      base: "от 1,100,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "8-10 недель",
    reviews: [
      {
        id: "10",
        author: "Производство СтанкоПром",
        rating: 5,
        date: "5 ноября 2024",
        comment: "Надежность на высшем уровне."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Laser Cutters
  {
    id: "glowforge-pro",
    name: "Glowforge Pro",
    brand: "Glowforge",
    category: "laser-cutters",
    basePrice: "Запросить цену",
    rating: 4.5,
    reviewCount: 14,
    inStock: true,
    power: "45W",
    images: [
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995",
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995"
    ],
    description: "Настольный лазерный резак для создания различных проектов.",
    shortDescription: "Настольный лазерный резак для создания различных проектов.",
    fullDescription: "Glowforge Pro - это настольный лазерный резак и гравер, который делает лазерную обработку доступной для дизайнеров, художников и производителей всех уровней.",
    features: [
      "Простота использования",
      "Различные материалы",
      "Встроенный дизайн",
      "Высокая точность"
    ],
    pricing: {
      base: "от 380,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "4-6 недель",
    reviews: [
      {
        id: "11",
        author: "Студия Крафт",
        rating: 4,
        date: "1 ноября 2024",
        comment: "Отличный инструмент для творчества."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "epilog-laser-fusion-m2",
    name: "Epilog Laser Fusion M2",
    brand: "Epilog Laser",
    category: "laser-cutters",
    basePrice: "Запросить цену",
    rating: 4.8,
    reviewCount: 10,
    inStock: true,
    power: "120W",
    images: [
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg",
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg"
    ],
    description: "Промышленный лазерный резак для точной резки и гравировки.",
    shortDescription: "Промышленный лазерный резак для точной резки и гравировки.",
    fullDescription: "Epilog Laser Fusion M2 - это промышленный лазерный резак высокой мощности для профессиональной резки и гравировки широкого спектра материалов.",
    features: [
      "Высокая мощность",
      "Большая рабочая область",
      "Различные материалы",
      "Автоматизация задач"
    ],
    pricing: {
      base: "от 1,500,000 ₽"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100,000 ₽"
    },
    leadTime: "6-8 недель",
    reviews: [
      {
        id: "12",
        author: "Производство ЛазерТех",
        rating: 5,
        date: "28 октября 2024",
        comment: "Превосходная производительность!"
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (category: string, id: string): Product | undefined => {
  return products.find(product => product.category === category && product.id === id);
};

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export default products;
