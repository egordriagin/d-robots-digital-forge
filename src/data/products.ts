import { PrinterSpecifications } from "@/types/printer-specifications";
import { ScannerSpecifications } from "@/types/scanner-specifications";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  basePrice: string;
  rating: number;
  images: string[];
  description: string;
  features: string[];
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
    images: [
      "https://images.unsplash.com/photo-1615779458099-ca5701c1ca1f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1615779458099-ca5701c1ca1f?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Промышленный 3D принтер с большой областью печати и высокой точностью.",
    features: [
      "Большая область печати",
      "Высокая точность",
      "Поддержка различных материалов",
      "Автоматическая калибровка"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1607868240674-d99d3649c043?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607868240674-d99d3649c043?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Профессиональный 3D принтер с независимыми экструдерами и закрытой камерой.",
    features: [
      "Независимые экструдеры",
      "Закрытая камера",
      "Высокая точность",
      "Поддержка различных материалов"
    ],
    printerSpecifications: {
      printing: {
        buildVolume: {
          dimensions: "400 x 350 x 500 мм",
          area: "140000 кв.мм",
          maxLength: "602 мм (диагональ)"
        },
        resolution: {
          layerHeight: "0.05 - 0.4 мм",
          xyResolution: "12.5 микрон",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "200 мм/с",
          typicalRange: "50-150 мм/с",
          materialDependent: "Зависит от типа материала"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Двойной независимый экструдер"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PC, Nylon, Carbon Fiber, и др.",
          cartridgeSpecs: "Катушки 1.75 мм",
          temperatureRange: "До 360°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "720 x 650 x 1150 мм",
          weight: "150 кг",
          requiredSpace: "1200 x 1200 мм"
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
          consumption: "800W",
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

  // 3D Scanners
  {
    id: "artec-eva",
    name: "Artec Eva",
    brand: "Artec 3D",
    category: "3d-scanners",
    basePrice: "Запросить цену",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&overlay=top"
    ],
    description: "Профессиональный портативный 3D сканер для захвата объектов среднего размера с высокой точностью.",
    features: [
      "Технология структурированного света",
      "Точность до 0.1 мм",
      "Автоматическое выравнивание",
      "Захват цвета и текстуры"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop&overlay=top"
    ],
    description: "Доступный портативный 3D сканер с высокой точностью для образования и малого бизнеса.",
    features: [
      "Инфракрасная технология VCSEL",
      "Точность до 0.1 мм",
      "Простота использования",
      "Доступная цена"
    ],
    scannerSpecifications: {
      accuracy: {
        pointAccuracy: {
          range: "0.1-0.2 мм",
          typical: "0.1 мм",
          measurement: "Одноточечная точность"
        },
        volumetricAccuracy: {
          baseAccuracy: "0.05 мм",
          distanceCoefficient: "0.2 мм/м",
          formula: "0.05 мм + 0.2 мм/м × расстояние измерения"
        },
        resolution: {
          measurementResolution: "0.15 мм",
          pointDistance: "0.3 мм",
          outputMeshResolution: "0.2-3.0 мм"
        }
      },
      speed: {
        frameRate: "10 кадр/сек",
        measurementSpeed: "До 1.5 млн точек/сек",
        dataCollectionSpeed: "Стандартный режим: 8 сек/кадр"
      },
      captureRange: {
        singleScanRange: "560 × 450 мм (на расстоянии 550 мм)",
        fieldOfView: "51° × 41°",
        depthOfField: "350-1200 мм",
        workingDistance: "550-1200 мм",
        objectSizeCapabilities: {
          minimum: "30 × 30 × 30 мм",
          maximum: "4 × 4 × 4 м",
          recommended: "0.15-3 м"
        }
      },
      technology: {
        scanningTechnology: {
          type: "Инфракрасная технология VCSEL",
          lightSourceCharacteristics: "Инфракрасный лазер класса 1",
          camerasAndProjectors: "2 камеры, 1 инфракрасный проектор"
        },
        trackingAndPositioning: {
          alignmentMethods: "Геометрическое и визуальное отслеживание",
          trackingCapabilities: "Автоматическое отслеживание",
          markerSupport: "Работа без маркеров"
        }
      },
      compatibility: {
        sizeConstraints: {
          recommendedRange: "0.15-3 м в любом измерении",
          typicalCharacteristics: "Малые и средние объекты",
          maximumScannable: "До 4 м в любом измерении"
        },
        surfaceRequirements: {
          compatibleSurfaces: "Большинство непрозрачных поверхностей",
          processingRecommendations: "Матирующий спрей для блестящих поверхностей",
          limitations: "Ограничения с прозрачными и зеркальными поверхностями"
        }
      },
      software: {
        outputCompatibility: {
          supportedFileFormats: "OBJ, STL, PLY",
          operatingSystems: "Windows 10/11 (64-bit), macOS 10.15+",
          mobileCompatibility: "iOS приложение для предварительного просмотра"
        },
        systemRequirements: {
          minimumSpecs: "Intel i5, 8 ГБ RAM, USB 3.0",
          recommendedSpecs: "Intel i7, 16 ГБ RAM, SSD диск",
          ramGpuCpuRequirements: "16 ГБ RAM, встроенная графика достаточна, Intel i7"
        }
      },
      hardware: {
        equipmentCharacteristics: {
          weightAndDimensions: "0.65 кг, 210 × 130 × 75 мм",
          cableAndConnectivity: "USB-C, кабель 3 м",
          portabilityClassification: "Ультрапортативный ручной сканер"
        },
        operatingConditions: {
          indoorOutdoorCapabilities: "Для работы в помещении",
          lightingRequirements: "Работает при любом освещении",
          environmentalConstraints: "Температура: 5-40°C, влажность: 10-90%"
        }
      },
      advanced: {
        scanningModes: {
          multipleOptions: "Быстрый режим, точный режим",
          textureColorCapture: "RGB камера для захвата цвета",
          realtimeVsPostprocessing: "Предварительный просмотр в реальном времени"
        },
        qualityControl: {
          autoCalibration: "Автоматическая калибровка не требуется",
          errorDetectionCorrection: "Автоматическое исправление ошибок сканирования",
          qualityAssessmentTools: "Встроенная оценка качества в реальном времени"
        }
      }
    }
  },

  // Robotic Dogs
  {
    id: "unitree-go1",
    name: "Unitree Go1",
    brand: "Unitree Robotics",
    category: "robotic-dogs",
    basePrice: "Запросить цену",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Интеллектуальный робот-собака для исследований, развлечений и образования.",
    features: [
      "Интеллектуальное следование",
      "Обход препятствий",
      "Распознавание лиц",
      "Программируемое поведение"
    ]
  },
  {
    id: "boston-dynamics-spot",
    name: "Boston Dynamics Spot",
    brand: "Boston Dynamics",
    category: "robotic-dogs",
    basePrice: "Запросить цену",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop&overlay=top"
    ],
    description: "Передовой робот-собака для промышленного применения и исследований.",
    features: [
      "Автономная навигация",
      "Сбор данных",
      "Инспекция объектов",
      "Удаленное управление"
    ]
  },

  // Humanoid Robots
  {
    id: "atlas-robot",
    name: "Atlas Robot",
    brand: "Boston Dynamics",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    rating: 4.8,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif"
    ],
    description: "Динамичный гуманоидный робот, способный выполнять сложные задачи.",
    features: [
      "Динамическое равновесие",
      "Сложная моторика",
      "Автономная навигация",
      "Работа в экстремальных условиях"
    ]
  },
  {
    id: "pepper-robot",
    name: "Pepper Robot",
    brand: "SoftBank Robotics",
    category: "humanoid-robots",
    basePrice: "Запросить цену",
    rating: 4.5,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg"
    ],
    description: "Гуманоидный робот для взаимодействия с людьми в сфере обслуживания.",
    features: [
      "Распознавание эмоций",
      "Речь и общение",
      "Интерактивные приложения",
      "Привлечение внимания"
    ]
  },

  // Robotic Arms
  {
    id: "universal-robots-ur5e",
    name: "Universal Robots UR5e",
    brand: "Universal Robots",
    category: "robotic-arms",
    basePrice: "Запросить цену",
    rating: 4.6,
    images: [
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85",
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85"
    ],
    description: "Коллаборативный робот-манипулятор для автоматизации производства.",
    features: [
      "Простая интеграция",
      "Гибкая настройка",
      "Безопасная работа рядом с людьми",
      "Автоматизация задач"
    ]
  },
  {
    id: "fanuc-crx-10ia",
    name: "FANUC CRX-10iA",
    brand: "FANUC",
    category: "robotic-arms",
    basePrice: "Запросить цену",
    rating: 4.7,
    images: [
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png",
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png"
    ],
    description: "Коллаборативный робот FANUC для различных промышленных задач.",
    features: [
      "Высокая надежность",
      "Простое программирование",
      "Безопасная работа",
      "Различные применения"
    ]
  },

  // Laser Cutters
  {
    id: "glowforge-pro",
    name: "Glowforge Pro",
    brand: "Glowforge",
    category: "laser-cutters",
    basePrice: "Запросить цену",
    rating: 4.5,
    images: [
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995",
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995"
    ],
    description: "Настольный лазерный резак для создания различных проектов.",
    features: [
      "Простота использования",
      "Различные материалы",
      "Встроенный дизайн",
      "Высокая точность"
    ]
  },
  {
    id: "epilog-laser-fusion-m2",
    name: "Epilog Laser Fusion M2",
    brand: "Epilog Laser",
    category: "laser-cutters",
    basePrice: "Запросить цену",
    rating: 4.8,
    images: [
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg",
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg"
    ],
    description: "Промышленный лазерный резак для точной резки и гравировки.",
    features: [
      "Высокая мощность",
      "Большая рабочая область",
      "Различные материалы",
      "Автоматизация задач"
    ]
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (category: string, id: string): Product | undefined => {
  return products.find(product => product.category === category && product.id === id);
};

export default products;
