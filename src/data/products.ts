import { PrinterSpecifications } from "@/types/printer-specifications";
import { ScannerSpecifications } from "@/types/scanner-specifications";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
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
    withAccessories?: string;
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
  specifications?: PrinterSpecifications;
  scannerSpecifications?: ScannerSpecifications;
  type?: string;
  power?: string;
  dof?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
];

const defaultReviews = [
  {
    id: 1,
    author: "Дмитрий К.",
    rating: 5,
    date: "15 марта 2024",
    comment: "Отличное оборудование! Качество работы превосходное, настройка простая. Рекомендую для профессионального использования."
  },
  {
    id: 2,
    author: "Анна М.",
    rating: 4,
    date: "8 марта 2024",
    comment: "Очень доволен покупкой. Быстрая доставка, качественная упаковка. Оборудование работает стабильно."
  },
  {
    id: 3,
    author: "Сергей В.",
    rating: 5,
    date: "2 марта 2024",
    comment: "Профессиональное оборудование высокого класса. Система работает безупречно."
  }
];

const defaultSpecs: PrinterSpecifications = {
  printing: {
    buildVolume: {
      dimensions: "250 × 210 × 210 мм",
      area: "52 500 мм²",
      maxLength: "250 мм"
    },
    resolution: {
      layerHeight: "0.05-0.3 мм",
      xyResolution: "0.1 мм",
      dimensionalAccuracy: "±0.05 мм",
      minWallThickness: "0.4 мм"
    },
    speed: {
      maxSpeed: "200 мм/с",
      typicalRange: "50-150 мм/с",
      materialDependent: "Скорость может снижаться при печати с гибкими или специальными материалами"
    }
  },
  technology: {
    printingTechnology: {
      type: "FDM (Fused Deposition Modeling)",
      implementation: "Классическая FDM с нагреваемой платформой и экструдером"
    },
    materials: {
      supportedMaterials: "PLA, PETG, ABS, ASA, Flex, Nylon",
      cartridgeSpecs: "Стандартные катушки 1.75 мм",
      temperatureRange: "Экструдер: до 300°C, платформа: до 100°C"
    }
  },
  hardware: {
    dimensions: {
      printerSize: "420 × 420 × 380 мм",
      weight: "12 кг",
      requiredSpace: "Рекомендуется минимум 600 × 600 мм пространства вокруг"
    },
    interface: {
      controlType: "Цветной сенсорный экран",
      displaySpecs: "3.5 дюйма, цветной TFT",
      languages: "Многоязычный, включая русский"
    },
    connectivity: {
      wifi: "Wi-Fi 802.11 b/g/n",
      ethernet: "Нет",
      usb: "USB Type-B, USB флеш-накопитель"
    }
  },
  environment: {
    operating: {
      temperatureRange: "15-30°C",
      humidity: "20-80% без конденсации"
    },
    power: {
      voltage: "100-240 В переменного тока",
      consumption: "150 Вт",
      frequency: "50/60 Гц"
    }
  },
  advanced: {
    automation: {
      autoLeveling: "Да, с помощью датчиков",
      sensors: "Датчик окончания филамента, датчик температуры",
      autoFeed: "Автоматическая подача филамента"
    },
    software: {
      compatibleOS: "Windows, macOS, Linux",
      fileFormats: ".gcode, .stl, .obj",
      systemRequirements: "Минимум 4 ГБ ОЗУ, 64-битная ОС"
    },
    qualityControl: {
      forceSensing: "Нет",
      temperatureControl: "Поддержка контроля температуры экструдера и платформы",
      realTimeMonitoring: "Да, через ПО и экран"
    }
  }
};

const defaultScannerSpecs: ScannerSpecifications = {
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
    frameRate: {
      fps: "10 кад/с",
      range: "5-15 кад/с",
      conditions: "В зависимости от режима сканирования"
    },
    measurementSpeed: {
      pointsPerSecond: "550,000 точек/с",
      measurementsPerSecond: "1,100,000 измерений/с",
      dataAcquisition: "До 2 млн точек/с"
    },
    scanningModes: {
      fastMode: "15 кад/с, пониженная точность",
      precisionMode: "5 кад/с, максимальная точность",
      standardMode: "10 кад/с, баланс скорости и точности"
    }
  },
  captureRange: {
    fieldOfView: {
      singleScan: "200×150 мм",
      width: "200 мм",
      height: "150 мм"
    },
    depthOfField: {
      range: "150 мм",
      optimal: "300-450 мм",
      minimum: "200 мм"
    },
    workingDistance: {
      range: "300-800 мм",
      optimal: "400 мм",
      objectDistance: "300-800 мм от сканера"
    },
    objectSize: {
      minimum: "30×30×30 мм",
      maximum: "4000×4000×4000 мм",
      recommended: "50-2000 мм"
    }
  },
  technology: {
    scanningTechnology: {
      type: "Структурированный свет",
      implementation: "Белый свет LED проекция",
      lightSource: "LED белый свет"
    },
    hardware: {
      cameras: "2 × 2 МП камеры",
      projectors: "1 × DLP проектор",
      laserClass: "Безопасный (LED)"
    },
    tracking: {
      alignmentMethods: ["Геометрия", "Цвет", "Маркеры", "Визуальное отслеживание"],
      trackingMode: "Автоматическое/ручное позиционирование",
      markerSupport: "Поддержка маркеров и режим без маркеров"
    }
  },
  compatibility: {
    objectSize: {
      recommendedRange: "50 мм - 2 м",
      typicalCharacteristics: "Средние и крупные объекты",
      maximumSize: "4×4×4 м (с поворотным столом)"
    },
    surfaceRequirements: {
      compatibleSurfaces: ["Матовые", "Полуматовые", "Текстурированные", "Окрашенные"],
      surfaceTreatment: "Антибликовый спрей для блестящих поверхностей",
      limitations: ["Прозрачные поверхности", "Зеркальные поверхности", "Очень темные поверхности"]
    },
    materials: {
      supported: ["Пластик", "Металл", "Керамика", "Дерево", "Гипс", "Смола"],
      challenging: ["Стекло", "Хром", "Полированный металл", "Черные материалы"],
      preprocessing: "Матирующий спрей для проблемных поверхностей"
    }
  },
  software: {
    outputFormats: {
      fileFormats: ["STL", "OBJ", "PLY", "ASC"],
      meshFormats: ["STL", "OBJ", "PLY"],
      cloudFormats: ["PLY", "ASC", "XYZ"]
    },
    systemCompatibility: {
      operatingSystems: ["Windows 10/11", "macOS 10.14+"],
      mobileSupport: "Нет",
      cloudProcessing: "Локальная обработка"
    },
    requirements: {
      minimumSpecs: {
        ram: "8 ГБ",
        processor: "Intel i5 / AMD Ryzen 5",
        graphics: "Интегрированная графика",
        storage: "100 ГБ свободного места"
      },
      recommendedSpecs: {
        ram: "16 ГБ",
        processor: "Intel i7 / AMD Ryzen 7",
        graphics: "Дискретная видеокарта",
        storage: "500 ГБ SSD"
      }
    }
  },
  hardware: {
    physicalSpecs: {
      scannerWeight: "0.85 кг",
      scannerDimensions: "150×80×30 мм",
      portability: "Портативный ручной"
    },
    connectivity: {
      cableSpecs: "USB 3.0 кабель 3 м",
      connectionType: "USB 3.0",
      wirelessOptions: "Нет"
    },
    classification: {
      type: "handheld",
      mobility: "Полностью портативный",
      setupTime: "< 2 минут"
    }
  },
  advanced: {
    operatingConditions: {
      indoorOutdoor: "Помещение, контролируемое освещение",
      lightingRequirements: "Рассеянный свет, избегать прямого солнца",
      environmentalLimitations: ["Прямой солнечный свет", "Вибрации", "Пыльная среда"]
    },
    scanningModes: {
      availableModes: ["HD", "Быстрый", "Фиксированный", "Автоматический"],
      textureCapture: "Полноцветный захват текстур",
      colorCapture: "24-битный цвет",
      realTimeProcessing: "Предварительный просмотр в реальном времени"
    },
    qualityControl: {
      autoCalibration: "Автоматическая калибровка при старте",
      errorDetection: "Автоматическое обнаружение пропусков",
      qualityAssessment: "Встроенная оценка качества сетки",
      softwareTools: ["Автозаполнение отверстий", "Сглаживание сетки", "Упрощение полигонов", "Контроль качества"]
    }
  }
};

export const productsDatabase: Record<string, Product> = {
  // 3D Printers
  "creatbot-d600": {
    id: "creatbot-d600",
    name: "Creatbot D600",
    brand: "Creatbot",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.5,
    reviewCount: 89,
    images: defaultImages,
    shortDescription: "Профессиональный 3D принтер большого формата с высокой точностью печати.",
    fullDescription: "Creatbot D600 представляет собой промышленный 3D принтер, предназначенный для создания крупногабаритных деталей с высокой точностью.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Большая область печати 600×600×600 мм",
      "Закрытая камера с подогревом",
      "Двойной экструдер",
      "Автоматическое выравнивание стола"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },
  
  "creatbot-peek-300": {
    id: "creatbot-peek-300",
    name: "Creatbot PEEK-300",
    brand: "Creatbot",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.8,
    reviewCount: 65,
    images: defaultImages,
    shortDescription: "Специализированный 3D принтер для печати высокотемпературными материалами.",
    fullDescription: "Creatbot PEEK-300 разработан специально для работы с высокотемпературными инженерными пластиками, включая PEEK.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Температура экструдера до 400°C",
      "Печать материалами PEEK, PEI",
      "Закрытая камера с контролем температуры",
      "Промышленная надежность"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "flashforge-creator-4": {
    id: "flashforge-creator-4",
    name: "Flashforge Creator 4",
    brand: "Flashforge",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.3,
    reviewCount: 112,
    images: defaultImages,
    shortDescription: "Универсальный 3D принтер с двойным экструдером для многоцветной печати.",
    fullDescription: "Flashforge Creator 4 обеспечивает высококачественную печать с возможностью использования двух материалов одновременно.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Двойной независимый экструдер",
      "Автоматическое выравнивание",
      "Закрытая камера",
      "Wi-Fi подключение"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "bambu-x1": {
    id: "bambu-x1",
    name: "Bambu Lab X1",
    brand: "Bambu Lab",
    category: "3d-printers",
    type: "FDM",
    basePrice: "2,890,000 ₽",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.9,
    reviewCount: 127,
    images: defaultImages,
    shortDescription: "Профессиональный 3D принтер с автоматической системой смены материалов и высокой точностью печати.",
    fullDescription: "Bambu Lab X1 представляет собой революционное решение в области 3D печати, объединяющее передовые технологии и простоту использования.",
    demoVideo: "https://www.youtube.com/embed/qMj_FIumSn8",
    features: [
      "Автоматическая калибровка",
      "Система смены материалов AMS",
      "Высокая скорость печати до 500 мм/с",
      "Точность позиционирования ±0.1 мм"
    ],
    pricing: { 
      base: "2,890,000 ₽",
      withAMS: "3,290,000 ₽",
      withAccessories: "3,690,000 ₽"
    },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "bambu-p1s": {
    id: "bambu-p1s",
    name: "Bambu P1S",
    brand: "Bambu Lab",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    images: defaultImages,
    shortDescription: "Компактный и доступный 3D принтер с технологиями Bambu Lab.",
    fullDescription: "Bambu P1S предлагает передовые технологии Bambu Lab в более доступном формате.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Автоматическая калибровка",
      "Высокая скорость печати",
      "Совместимость с AMS",
      "Удаленное управление"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "prusa-xl": {
    id: "prusa-xl",
    name: "Prusa XL",
    brand: "Prusa",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.6,
    reviewCount: 76,
    images: defaultImages,
    shortDescription: "Крупноформатный 3D принтер с модульной системой экструдеров.",
    fullDescription: "Prusa XL предлагает увеличенную область печати и возможность установки до 5 экструдеров.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Область печати 360×360×360 мм",
      "До 5 экструдеров",
      "Автоматическое выравнивание",
      "Открытый исходный код"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "prusa-mk4": {
    id: "prusa-mk4",
    name: "Prusa MK4",
    brand: "Prusa",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.8,
    reviewCount: 134,
    images: defaultImages,
    shortDescription: "Популярный настольный 3D принтер с проверенной надежностью.",
    fullDescription: "Prusa MK4 - это эволюция популярной серии принтеров Prusa с улучшенными характеристиками.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Проверенная надежность",
      "Автоматическое выравнивание",
      "Открытый исходный код",
      "Активное сообщество"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "qidi-x-max": {
    id: "qidi-x-max",
    name: "QIDI X MAX",
    brand: "QIDI",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.4,
    reviewCount: 67,
    images: defaultImages,
    shortDescription: "Промышленный 3D принтер большого формата с закрытой камерой.",
    fullDescription: "QIDI X MAX обеспечивает стабильную печать крупных деталей в контролируемой среде.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Большая область печати",
      "Закрытая камера с подогревом",
      "Промышленная надежность",
      "Высокотемпературные материалы"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "raise3d-pro3": {
    id: "raise3d-pro3",
    name: "Raise3D Pro3",
    brand: "Raise3D",
    category: "3d-printers",
    type: "FDM",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.5,
    reviewCount: 54,
    images: defaultImages,
    shortDescription: "Профессиональный 3D принтер с независимыми двойными экструдерами.",
    fullDescription: "Raise3D Pro3 предназначен для профессионального использования с возможностью многоматериальной печати.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Независимые двойные экструдеры",
      "Закрытая камера",
      "Профессиональное ПО",
      "Высокая точность"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  "anycubic-photon-m3": {
    id: "anycubic-photon-m3",
    name: "Anycubic Photon M3 Max",
    brand: "Anycubic",
    category: "3d-printers",
    type: "SLA",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.2,
    reviewCount: 43,
    images: defaultImages,
    shortDescription: "Крупноформатный SLA 3D принтер для высокодетализированной печати.",
    fullDescription: "Anycubic Photon M3 Max использует технологию стереолитографии для создания деталей с исключительной детализацией.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Технология SLA",
      "Высокое разрешение",
      "Большая область печати",
      "Автоматическое выравнивание"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    specifications: defaultSpecs
  },

  // 3D Scanners
  "einscan-pro-2x": {
    id: "einscan-pro-2x",
    name: "EinScan Pro 2X",
    brand: "Shining 3D",
    category: "3d-scanners",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.6,
    reviewCount: 32,
    images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"],
    shortDescription: "Профессиональный ручной 3D сканер с высокой точностью.",
    fullDescription: "EinScan Pro 2X обеспечивает профессиональное 3D сканирование для различных применений в промышленности, медицине, образовании и искусстве. Сочетает портативность ручного сканера с точностью стационарных систем.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Ручное и стационарное сканирование",
      "Точность до 0.1 мм",
      "Быстрое сканирование",
      "Профессиональное ПО"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews,
    scannerSpecifications: defaultScannerSpecs
  },

  // Robotic Dogs
  "unitree-go1": {
    id: "unitree-go1",
    name: "Unitree Go1",
    brand: "Unitree",
    category: "robotic-dogs",
    basePrice: "Запросить цену",
    shippingCost: "25,000 ₽",
    leadTime: "21-30 рабочих дней",
    inStock: true,
    rating: 4.7,
    reviewCount: 18,
    images: ["https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&h=600&fit=crop"],
    shortDescription: "Квадрупедальный робот для исследований и образования.",
    fullDescription: "Unitree Go1 представляет собой передовую платформу для изучения робототехники и автономного движения.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Автономное движение",
      "Обход препятствий",
      "Программируемое поведение",
      "Долгое время работы"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "25,000 ₽", freeThreshold: "5,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  // Humanoid Robots
  "unitree-h1": {
    id: "unitree-h1",
    name: "Unitree H1",
    brand: "Unitree",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    shippingCost: "50,000 ₽",
    leadTime: "30-45 рабочих дней",
    inStock: true,
    rating: 4.8,
    reviewCount: 12,
    images: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop"],
    shortDescription: "Полноразмерный гуманоидный робот для исследований.",
    fullDescription: "Unitree H1 - это передовой гуманоидный робот, предназначенный для исследований в области робототехники.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Двуногое передвижение",
      "Манипуляция объектами",
      "Система компьютерного зрения",
      "Программируемое поведение"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "50,000 ₽", freeThreshold: "10,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "unitree-g1": {
    id: "unitree-g1",
    name: "Unitree G1",
    brand: "Unitree",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    shippingCost: "40,000 ₽",
    leadTime: "30-45 рабочих дней",
    inStock: true,
    rating: 4.6,
    reviewCount: 8,
    images: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop"],
    shortDescription: "Компактный гуманоидный робот для образования.",
    fullDescription: "Unitree G1 предназначен для образовательных целей и начального изучения гуманоидной робототехники.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Компактный размер",
      "Образовательная платформа",
      "Простое программирование",
      "Безопасная эксплуатация"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "40,000 ₽", freeThreshold: "8,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  // Robotic Arms
  "ufactory-xarm6": {
    id: "ufactory-xarm6",
    name: "UFactory xArm 6",
    brand: "UFactory",
    category: "robotic-arms",
    dof: "6-DOF",
    basePrice: "Запросить цену",
    shippingCost: "20,000 ₽",
    leadTime: "21-30 рабочих дней",
    inStock: true,
    rating: 4.5,
    reviewCount: 25,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
    shortDescription: "6-осевой промышленный робот-манипулятор.",
    fullDescription: "UFactory xArm 6 представляет собой высокоточный робот-манипулятор для промышленных применений.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "6 степеней свободы",
      "Высокая точность позиционирования",
      "Простое программирование",
      "Система безопасности"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "20,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "ufactory-xarm7": {
    id: "ufactory-xarm7",
    name: "UFactory xArm 7",
    brand: "UFactory",
    category: "robotic-arms",
    dof: "7-DOF",
    basePrice: "Запросить цену",
    shippingCost: "20,000 ₽",
    leadTime: "21-30 рабочих дней",
    inStock: true,
    rating: 4.7,
    reviewCount: 19,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
    shortDescription: "7-осевой промышленный робот-манипулятор.",
    fullDescription: "UFactory xArm 7 обеспечивает дополнительную гибкость благодаря 7-й степени свободы.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "7 степеней свободы",
      "Повышенная гибкость",
      "Избежание сингулярностей",
      "Продвинутые алгоритмы управления"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "20,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "dobot-mg400": {
    id: "dobot-mg400",
    name: "Dobot MG400",
    brand: "Dobot",
    category: "robotic-arms",
    dof: "4-DOF",
    basePrice: "Запросить цену",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.3,
    reviewCount: 34,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
    shortDescription: "Настольный робот-манипулятор для образования.",
    fullDescription: "Dobot MG400 предназначен для образовательных целей и небольших производственных задач.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "4 степени свободы",
      "Настольный формат",
      "Образовательная платформа",
      "Доступная цена"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "15,000 ₽", freeThreshold: "2,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "dobot-cr3": {
    id: "dobot-cr3",
    name: "Dobot CR3",
    brand: "Dobot",
    category: "robotic-arms",
    dof: "6-DOF",
    basePrice: "Запросить цену",
    shippingCost: "20,000 ₽",
    leadTime: "21-30 рабочих дней",
    inStock: true,
    rating: 4.4,
    reviewCount: 28,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
    shortDescription: "Коллаборативный робот для безопасной работы с людьми.",
    fullDescription: "Dobot CR3 разработан для безопасного взаимодействия с человеком в производственной среде.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Коллаборативная безопасность",
      "6 степеней свободы",
      "Датчики силы и момента",
      "Простая настройка"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "20,000 ₽", freeThreshold: "3,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  // Laser Cutters
  "xtool-p2": {
    id: "xtool-p2",
    name: "xTool P2",
    brand: "xTool",
    category: "laser-cutters",
    power: "55W",
    basePrice: "Запросить цену",
    shippingCost: "10,000 ₽",
    leadTime: "10-14 рабочих дней",
    inStock: true,
    rating: 4.6,
    reviewCount: 45,
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"],
    shortDescription: "Настольный лазерный гравер с системой автофокуса.",
    fullDescription: "xTool P2 обеспечивает точную лазерную резку и гравировку с автоматической фокусировкой.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Мощность лазера 55W",
      "Автоматическая фокусировка",
      "Камера для позиционирования",
      "Простое ПО"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "10,000 ₽", freeThreshold: "1,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "xtool-s1-40w": {
    id: "xtool-s1-40w",
    name: "xTool S1 40W",
    brand: "xTool",
    category: "laser-cutters",
    power: "40W",
    basePrice: "Запросить цену",
    shippingCost: "10,000 ₽",
    leadTime: "10-14 рабочих дней",
    inStock: true,
    rating: 4.4,
    reviewCount: 38,
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"],
    shortDescription: "Универсальный лазерный станок для различных материалов.",
    fullDescription: "xTool S1 40W предназначен для работы с широким спектром материалов.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Мощность лазера 40W",
      "Работа с различными материалами",
      "Закрытый корпус",
      "Система вентиляции"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "10,000 ₽", freeThreshold: "1,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "flux-hexa": {
    id: "flux-hexa",
    name: "FLUX HEXA",
    brand: "FLUX",
    category: "laser-cutters",
    power: "30W",
    basePrice: "Запросить цену",
    shippingCost: "10,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.2,
    reviewCount: 23,
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"],
    shortDescription: "Многофункциональный станок с модульной системой.",
    fullDescription: "FLUX HEXA сочетает лазерную резку, 3D печать и фрезерование в одном устройстве.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Многофункциональность",
      "Модульная система",
      "Лазер 30W",
      "Компактный дизайн"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "10,000 ₽", freeThreshold: "1,000,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  },

  "xtool-f1": {
    id: "xtool-f1",
    name: "xTool F1",
    brand: "xTool",
    category: "laser-cutters",
    power: "20W",
    basePrice: "Запросить цену",
    shippingCost: "8,000 ₽",
    leadTime: "7-10 рабочих дней",
    inStock: true,
    rating: 4.3,
    reviewCount: 52,
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"],
    shortDescription: "Портативный лазерный гравер для мелких работ.",
    fullDescription: "xTool F1 идеально подходит для персонального использования и небольших проектов.",
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    features: [
      "Портативный дизайн",
      "Мощность лазера 20W",
      "Быстрая настройка",
      "Доступная цена"
    ],
    pricing: { base: "Запросить цену" },
    shipping: { cost: "8,000 ₽", freeThreshold: "500,000 ₽", regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"] },
    reviews: defaultReviews
  }
};

export const getProduct = (id: string): Product | null => {
  return productsDatabase[id] || null;
};

export const getProductsByCategory = (category: string): Product[] => {
  return Object.values(productsDatabase).filter(product => product.category === category);
};
