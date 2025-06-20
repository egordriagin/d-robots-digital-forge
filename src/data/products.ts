import { PrinterSpecifications } from "@/types/printer-specifications";
import { ScannerSpecifications } from "@/types/scanner-specifications";

export type StockStatus = "in-stock" | "backorder" | "out-of-stock" | "discontinued";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: string;
  popular: boolean;
  rating: number;
  reviewCount: number;
  stockStatus: StockStatus;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
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
  demoVideo: string;
  reviews: Review[];
  printerSpecifications?: PrinterSpecifications;
  scannerSpecifications?: ScannerSpecifications;
  power?: string; // For laser cutters
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export const products: Product[] = [
  // 3D Printers
  {
    id: "bambu-x1-carbon",
    name: "Bambu Lab X1 Carbon",
    brand: "Bambu Lab",
    category: "3d-printers",
    type: "FDM",
    popular: true,
    rating: 4.9,
    reviewCount: 127,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1606378059120-35d1b1c16b73?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092917791-20a3ea9025a8?w=600&h=400&fit=crop"
    ],
    shortDescription: "Высокоскоростной 3D-принтер с автоматической системой смены материалов и интеллектуальным управлением печатью.",
    fullDescription: `Bambu Lab X1 Carbon представляет новое поколение настольных 3D-принтеров с революционной системой автоматического управления. 

Принтер оснащен системой LiDAR для автоматического выравнивания стола, AI-детектором для мониторинга печати в реальном времени и системой AMS для автоматической смены до 4 различных материалов.

Благодаря закрытой камере с активным обогревом и фильтрацией воздуха, X1 Carbon позволяет печатать инженерными пластиками включая ABS, ASA, PC, PA-CF и другие высокотемпературные материалы.

Скорость печати достигает 500 мм/с с сохранением высокого качества благодаря системе вибрационной компенсации и точной калибровке давления в экструдере.`,
    features: [
      "Автоматическая система смены материалов AMS",
      "LiDAR-сканер для выравнивания стола",
      "AI-детектор дефектов печати",
      "Закрытая камера с подогревом до 65°C",
      "Скорость печати до 500 мм/с",
      "Поддержка инженерных пластиков",
      "Система фильтрации воздуха",
      "Мониторинг через мобильное приложение"
    ],
    pricing: {
      base: "Запросить цену",
      withAMS: "Запросить цену",
      withAccessories: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "150 000 ₽"
    },
    leadTime: "7-14 дней",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Алексей М.",
        rating: 5,
        date: "2024-03-15",
        comment: "Невероятно быстрый и точный принтер. AMS система работает безупречно, печать инженерных пластиков теперь стала простой задачей."
      },
      {
        id: 2,
        author: "Мария К.",
        rating: 5,
        date: "2024-03-10",
        comment: "Отличное качество печати прямо из коробки. AI-детектор действительно помогает избежать брака. Рекомендую для профессионального использования."
      }
    ],
    printerSpecifications: {
      printing: {
        buildVolume: {
          dimensions: "256 × 256 × 256 мм",
          area: "65 536 мм²",
          maxLength: "256 мм"
        },
        resolution: {
          layerHeight: "0.08 - 0.35 мм",
          xyResolution: "0.02 мм",
          dimensionalAccuracy: "±0.15 мм",
          minWallThickness: "0.35 мм"
        },
        speed: {
          maxSpeed: "500 мм/с",
          typicalRange: "50-250 мм/с",
          materialDependent: "ABS/ASA: до 300 мм/с, PLA: до 500 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Система прямого привода с титановым тепловым барьером"
        },
        materials: {
          supportedMaterials: "PLA, PETG, ABS, ASA, TPU, PA, PA-CF, PET-CF, PC, PVA, HIPS, PPA-CF",
          cartridgeSpecs: "Катушки 1.75 мм, вес до 1 кг",
          temperatureRange: "Экструдер: до 300°C, Стол: до 120°C, Камера: до 65°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "389 × 389 × 457 мм",
          weight: "13.2 кг",
          requiredSpace: "500 × 500 × 600 мм (с учетом обслуживания)"
        },
        interface: {
          controlType: "4-дюймовый цветной сенсорный экран",
          displaySpecs: "480×800 пикселей, IPS матрица",
          languages: "Русский, английский, китайский, немецкий, французский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n 2.4 ГГц",
          ethernet: "RJ45 Gigabit Ethernet",
          usb: "USB-A для печати с флешки, MicroSD слот"
        }
      },
      environment: {
        operating: {
          temperatureRange: "16-32°C",
          humidity: "20-70% относительной влажности"
        },
        power: {
          voltage: "100-240 В AC",
          consumption: "350 Вт максимум",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "LiDAR сканер + автоматическая калибровка стола",
          sensors: "AI-камера для детекции дефектов, датчики натяжения филамента",
          autoFeed: "Автоматическая система смены материалов AMS (опция)"
        },
        software: {
          compatibleOS: "Windows 10/11, macOS 10.15+, Linux Ubuntu 18.04+",
          fileFormats: "STL, OBJ, 3MF, AMF",
          systemRequirements: "4GB RAM, OpenGL 2.0, 8GB свободного места"
        },
        qualityControl: {
          forceSensing: "Датчик усилия экструдера для контроля подачи",
          temperatureControl: "PID регулирование температуры экструдера и стола",
          realTimeMonitoring: "AI-камера с детекцией спагетти и дефектов слоев"
        }
      }
    }
  },
  {
    id: "prusa-mk4",
    name: "Prusa MK4",
    brand: "Prusa Research",
    category: "3d-printers",
    type: "FDM",
    popular: true,
    rating: 4.8,
    reviewCount: 94,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop"
    ],
    shortDescription: "Надежный 3D-принтер с автоматическим выравниванием стола и высокой точностью печати для профессионального использования.",
    fullDescription: `Prusa MK4 - это эволюция легендарной серии 3D-принтеров от чешской компании Prusa Research. Принтер сочетает в себе проверенную временем конструкцию с современными технологиями.

Оснащен системой автоматического выравнивания стола LoadCell, которая использует датчик нагрузки для точного определения положения сопла относительно стола. Это обеспечивает идеальное первое слоение без ручной настройки.

Новый экструдер Nextruder с планетарным редуктором обеспечивает точную подачу филамента и работу с широким спектром материалов, включая абразивные и композитные пластики.

Input Shaper технология позволяет печатать на высоких скоростях без потери качества, автоматически компенсируя вибрации рамы принтера.`,
    features: [
      "Автоматическое выравнивание LoadCell",
      "Input Shaper для высокоскоростной печати",
      "Экструдер Nextruder с планетарным редуктором",
      "Магнитный гибкий стол PEI",
      "Датчики обрыва и застревания филамента",
      "Цветной ЖК-дисплей с поворотным энкодером",
      "32-битная плата управления",
      "Предустановленный слайсер PrusaSlicer"
    ],
    pricing: {
      base: "Запросить цену",
      withAccessories: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100 000 ₽"
    },
    leadTime: "14-21 день",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Дмитрий В.",
        rating: 5,
        date: "2024-03-12",
        comment: "Классический Prusa стал еще лучше. LoadCell работает идеально, больше не нужно вручную выравнивать стол. Качество печати на высоте."
      }
    ],
    printerSpecifications: {
      printing: {
        buildVolume: {
          dimensions: "250 × 210 × 220 мм",
          area: "52 500 мм²",
          maxLength: "250 мм"
        },
        resolution: {
          layerHeight: "0.05 - 0.30 мм",
          xyResolution: "0.025 мм",
          dimensionalAccuracy: "±0.1 мм",
          minWallThickness: "0.4 мм"
        },
        speed: {
          maxSpeed: "200 мм/с",
          typicalRange: "30-150 мм/с"
        }
      },
      technology: {
        printingTechnology: {
          type: "FDM (Fused Deposition Modeling)",
          implementation: "Direct Drive экструдер Nextruder с планетарным редуктором"
        },
        materials: {
          supportedMaterials: "PLA, PETG, ABS, ASA, TPU, PA, PC, CPE, PVB, HIPS",
          cartridgeSpecs: "Филамент 1.75 мм",
          temperatureRange: "Экструдер: до 300°C, Стол: до 120°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "500 × 550 × 400 мм",
          weight: "7 кг",
          requiredSpace: "600 × 650 × 500 мм"
        },
        interface: {
          controlType: "3.5-дюймовый цветной ЖК-дисплей",
          displaySpecs: "320×240 пикселей с поворотным энкодером",
          languages: "15+ языков включая русский"
        },
        connectivity: {
          wifi: "Опциональный Wi-Fi модуль",
          ethernet: "RJ45 Ethernet (опция)",
          usb: "USB-A, MicroSD карта"
        }
      },
      environment: {
        operating: {
          temperatureRange: "15-32°C"
        },
        power: {
          voltage: "110-240 В AC",
          consumption: "120 Вт средн., 215 Вт пик",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "LoadCell автоматическое выравнивание стола",
          sensors: "Датчик обрыва филамента, датчик застревания, температурные датчики",
          autoFeed: "Ручная загрузка филамента"
        },
        software: {
          compatibleOS: "Windows, macOS, Linux",
          fileFormats: "STL, OBJ, 3MF, AMF",
          systemRequirements: "2GB RAM, 1GB свободного места"
        },
        qualityControl: {
          forceSensing: "LoadCell сенсор для автокалибровки",
          temperatureControl: "PID контроль температуры",
          realTimeMonitoring: "Мониторинг через Prusa Connect"
        }
      }
    }
  },
  {
    id: "flashforge-creator-4",
    name: "Flashforge Creator 4",
    brand: "Flashforge",
    category: "3d-printers",
    type: "FDM",
    popular: true,
    rating: 4.3,
    reviewCount: 67,
    stockStatus: "backorder",
    images: [
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=400&fit=crop"
    ],
    shortDescription: "Двухэкструдерный 3D-принтер с независимыми экструдерами для печати сложных моделей с поддержками.",
    fullDescription: `Flashforge Creator 4 - профессиональный 3D-принтер с системой независимых двойных экструдеров (IDEX), позволяющий печатать двумя материалами одновременно или дублировать модели.

Закрытая камера с фильтрацией воздуха обеспечивает стабильную температуру для печати ABS и других термопластиков, требующих подогрева.

Автоматическое выравнивание стола и система управления с 5-дюймовым сенсорным экраном делают принтер удобным в использовании для профессиональных задач.`,
    features: [
      "Независимые двойные экструдеры (IDEX)",
      "Закрытая камера с подогревом",
      "Автоматическое выравнивание стола",
      "5-дюймовый сенсорный экран",
      "Система фильтрации воздуха",
      "Wi-Fi подключение",
      "Камера для мониторинга печати",
      "Поддержка облачной печати"
    ],
    pricing: {
      base: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "120 000 ₽"
    },
    leadTime: "10-14 дней",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Сергей Л.",
        rating: 4,
        date: "2024-03-08",
        comment: "Отличный принтер для сложных проектов. IDEX система работает стабильно, качество печати хорошее."
      }
    ],
    printerSpecifications: {
      printing: {
        buildVolume: {
          dimensions: "400 × 350 × 500 мм",
          area: "140 000 мм²",
          maxLength: "500 мм"
        },
        resolution: {
          layerHeight: "0.1 - 0.3 мм",
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
          type: "FDM с независимыми двойными экструдерами",
          implementation: "IDEX система с раздельными экструдерами"
        },
        materials: {
          supportedMaterials: "PLA, ABS, PETG, TPU, HIPS, PVA",
          cartridgeSpecs: "Филамент 1.75 мм",
          temperatureRange: "Экструдеры: до 240°C, Стол: до 120°C, Камера: до 65°C"
        }
      },
      hardware: {
        dimensions: {
          printerSize: "665 × 590 × 860 мм",
          weight: "56 кг",
          requiredSpace: "800 × 700 × 1000 мм"
        },
        interface: {
          controlType: "5-дюймовый цветной сенсорный экран",
          displaySpecs: "800×480 пикселей",
          languages: "Русский, английский, китайский"
        },
        connectivity: {
          wifi: "Wi-Fi 802.11 b/g/n",
          ethernet: "RJ45 Ethernet",
          usb: "USB-A, USB-C"
        }
      },
      environment: {
        operating: {
          temperatureRange: "18-30°C"
        },
        power: {
          voltage: "110-240 В AC",
          consumption: "400 Вт",
          frequency: "50/60 Гц"
        }
      },
      advanced: {
        automation: {
          autoLeveling: "Автоматическое выравнивание с 25 точками",
          sensors: "Датчики обрыва филамента, температурные датчики",
          autoFeed: "Автоматическая подача филамента"
        },
        software: {
          compatibleOS: "Windows, macOS",
          fileFormats: "STL, OBJ, 3MF",
          systemRequirements: "4GB RAM, 2GB свободного места"
        },
        qualityControl: {
          forceSensing: "Нет",
          temperatureControl: "PID контроль",
          realTimeMonitoring: "Встроенная камера с удаленным мониторингом"
        }
      }
    }
  },
  // 3D Scanners
  {
    id: "artec-leo",
    name: "Artec Leo",
    brand: "Artec 3D",
    category: "3d-scanners",
    type: "Structured Light",
    popular: true,
    rating: 4.7,
    reviewCount: 43,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    ],
    shortDescription: "Беспроводной 3D-сканер со встроенным экраном и обработкой данных на борту для профессионального сканирования.",
    fullDescription: `Artec Leo представляет революционный подход к профессиональному 3D-сканированию. Это первый в мире беспроводной 3D-сканер со встроенным сенсорным экраном и обработкой данных в реальном времени.

Благодаря встроенному компьютеру на базе NVIDIA Jetson Xavier, сканер обрабатывает данные прямо во время сканирования, позволяя видеть результат в режиме реального времени на 5-дюймовом HD экране.

Автономность работы до 4 часов и отсутствие проводов делают Leo идеальным для сканирования в полевых условиях, на производстве или в любых местах, где мобильность критична.`,
    features: [
      "Беспроводная работа до 4 часов",
      "Встроенный 5-дюймовый HD экран",
      "Обработка данных в реальном времени",
      "Автоматическое выравнивание сканов",
      "Встроенная система координат",
      "Wi-Fi синхронизация с компьютером",
      "Сканирование без маркеров",
      "Защита от пыли и влаги IP54"
    ],
    pricing: {
      base: "Запросить цену",
      withAccessories: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "500 000 ₽"
    },
    leadTime: "21-30 дней",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Андрей С.",
        rating: 5,
        date: "2024-02-28",
        comment: "Потрясающий сканер! Мобильность и качество на высшем уровне. Идеально подходит для работы на объектах."
      }
    ],
    scannerSpecifications: {
      accuracy: {
        pointAccuracy: {
          range: "До 0.1 мм",
          typical: "0.1 мм",
          measurement: "Одноточечная точность"
        },
        volumetricAccuracy: {
          baseAccuracy: "0.03 мм",
          distanceCoefficient: "0.15 мм/м",
          formula: "0.03 мм + 0.15 мм/м × расстояние измерения"
        },
        resolution: {
          measurementResolution: "0.2 мм",
          pointDistance: "0.2 мм",
          outputMeshResolution: "0.2-2.0 мм"
        }
      },
      speed: {
        frameRate: "80 FPS",
        measurementSpeed: "35 000 точек в секунду",
        dataCollectionSpeed: "Real-time обработка на борту"
      },
      captureRange: {
        singleScanRange: "838 × 488 мм на расстоянии 900 мм",
        fieldOfView: "838 × 488 мм на расстоянии 900 мм",
        depthOfField: "0.35-1.2 м",
        workingDistance: "0.35-1.2 м",
        objectSizeCapabilities: {
          minimum: "0.2 м",
          maximum: "Неограничено (с использованием маркеров)",
          recommended: "0.2-10 м"
        }
      },
      technology: {
        scanningTechnology: {
          type: "Структурированный свет",
          lightSourceCharacteristics: "Безопасный белый LED",
          camerasAndProjectors: "3 камеры + проектор"
        },
        trackingAndPositioning: {
          alignmentMethods: "Автоматическое по геометрии и текстуре",
          trackingCapabilities: "Гибридное отслеживание",
          markerSupport: "Опционально, без маркеров по умолчанию"
        }
      },
      compatibility: {
        sizeConstraints: {
          recommendedRange: "От 20 см до 10 м",
          typicalCharacteristics: "Люди, автомобили, мебель, скульптуры",
          maximumScannable: "Без ограничений с маркерами"
        },
        surfaceRequirements: {
          compatibleSurfaces: "Матовые, слабо отражающие поверхности",
          processingRecommendations: "Антибликовый спрей для блестящих поверхностей",
          limitations: "Ограничения с прозрачными и зеркальными поверхностями"
        }
      },
      software: {
        outputCompatibility: {
          supportedFileFormats: "OBJ, STL, PLY, E57, ASCII, WRML, AOP",
          operatingSystems: "Windows 10/11 64-bit",
          mobileCompatibility: "Нет"
        },
        systemRequirements: {
          minimumSpecs: "Intel i5, 16GB RAM, DirectX 11",
          recommendedSpecs: "Intel i7/AMD Ryzen 7, 32GB RAM, NVIDIA GTX 1060+",
          ramGpuCpuRequirements: "Дискретная видеокарта обязательна, 50GB свободного места"
        }
      },
      hardware: {
        equipmentCharacteristics: {
          weightAndDimensions: "2.6 кг",
          cableAndConnectivity: "Беспроводной (Wi-Fi синхронизация)",
          portabilityClassification: "Полностью портативный с встроенным экраном"
        },
        operatingConditions: {
          indoorOutdoorCapabilities: "Внутренние и наружные условия",
          lightingRequirements: "Работа при любом освещении",
          environmentalConstraints: "IP54 защита от пыли и влаги"
        }
      },
      advanced: {
        scanningModes: {
          multipleOptions: "HD режим, быстрое сканирование",
          textureColorCapture: "Полноцветная текстура в HD качестве",
          realtimeVsPostprocessing: "Обработка и визуализация в реальном времени"
        },
        qualityControl: {
          autoCalibration: "Автоматическая калибровка при включении",
          errorDetectionCorrection: "Автоматическое обнаружение проблем сканирования",
          qualityAssessmentTools: "Встроенные инструменты оценки качества в Artec Studio"
        }
      }
    }
  },
  {
    id: "artec-eva",
    name: "Artec Eva",
    brand: "Artec 3D",
    category: "3d-scanners",
    type: "Structured Light",
    popular: false,
    rating: 4.8,
    reviewCount: 15,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&overlay=top"
    ],
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
        id: 3,
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
    type: "Infrared VCSEL",
    popular: false,
    rating: 4.6,
    reviewCount: 12,
    stockStatus: "out-of-stock",
    images: [
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091870621-0d77de92b7e6?w=600&h=400&fit=crop&overlay=top"
    ],
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
        id: 4,
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
    type: "Quadruped Robot",
    popular: false,
    rating: 4.7,
    reviewCount: 8,
    stockStatus: "in-stock",
    power: "100W",
    images: [
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1677495149385-c19494439794?w=400&h=300&fit=crop&overlay=top"
    ],
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
        id: 5,
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
    type: "Industrial Robot",
    popular: true,
    rating: 4.9,
    reviewCount: 6,
    stockStatus: "discontinued",
    power: "400W",
    images: [
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1631934495749-aa9953e15c1c?w=400&h=300&fit=crop&overlay=top"
    ],
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
        id: 6,
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
    type: "Humanoid",
    popular: false,
    rating: 4.8,
    reviewCount: 4,
    stockStatus: "out-of-stock",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atlas_performs_parkour.gif/300px-Atlas_performs_parkour.gif"
    ],
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
        id: 7,
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
    type: "Service Robot",
    popular: true,
    rating: 4.5,
    reviewCount: 7,
    stockStatus: "in-stock",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg/300px-Pepper_at_the_Webwinkelvakdagen_2019_%2801%29.jpg"
    ],
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
        id: 8,
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
    id: "ufactory-xarm6",
    name: "UFactory xArm 6",
    brand: "UFactory",
    category: "robotic-arms",
    type: "6-DOF Collaborative Robot",
    popular: true,
    rating: 4.7,
    reviewCount: 23,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    ],
    shortDescription: "Коллаборативный робот-манипулятор с 6 степенями свободы для точных операций.",
    fullDescription: "UFactory xArm 6 - это современный коллаборативный робот-манипулятор с 6 степенями свободы, предназначенный для автоматизации производственных процессов.",
    features: [
      "6 степеней свободы",
      "Грузоподъемность до 5 кг",
      "Радиус действия 700 мм",
      "Повторяемость ±0.1 мм"
    ],
    pricing: {
      base: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "150 000 ₽"
    },
    leadTime: "4-6 недель",
    reviews: [
      {
        id: 101,
        author: "Завод Металлоизделий",
        rating: 5,
        date: "2024-03-01",
        comment: "Отличная точность и надежность в работе."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "ufactory-xarm7",
    name: "UFactory xArm 7",
    brand: "UFactory",
    category: "robotic-arms",
    type: "7-DOF Collaborative Robot",
    popular: false,
    rating: 4.8,
    reviewCount: 15,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop"
    ],
    shortDescription: "Продвинутый коллаборативный робот с 7 степенями свободы для сложных задач.",
    fullDescription: "UFactory xArm 7 обеспечивает дополнительную гибкость благодаря 7-й степени свободы для выполнения самых сложных манипуляций.",
    features: [
      "7 степеней свободы",
      "Грузоподъемность до 3.5 кг",
      "Радиус действия 700 мм",
      "Избежание сингулярностей"
    ],
    pricing: {
      base: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "150 000 ₽"
    },
    leadTime: "4-6 недель",
    reviews: [
      {
        id: 102,
        author: "Лаборатория Автоматики",
        rating: 5,
        date: "2024-02-20",
        comment: "Превосходная гибкость в движениях."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "dobot-mg400",
    name: "Dobot MG400",
    brand: "Dobot",
    category: "robotic-arms",
    type: "4-DOF Desktop Robot",
    popular: true,
    rating: 4.5,
    reviewCount: 31,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
    ],
    shortDescription: "Компактный настольный робот для образования и легких производственных задач.",
    fullDescription: "Dobot MG400 - это доступный настольный робот-манипулятор, идеально подходящий для образовательных целей и автоматизации легких задач.",
    features: [
      "4 степени свободы",
      "Грузоподъемность до 750 г",
      "Радиус действия 320 мм",
      "Простое программирование"
    ],
    pricing: {
      base: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "100 000 ₽"
    },
    leadTime: "2-3 недели",
    reviews: [
      {
        id: 103,
        author: "Техникум Робототехники",
        rating: 4,
        date: "2024-03-05",
        comment: "Отличный выбор для обучения студентов."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "dobot-cr3",
    name: "Dobot CR3",
    brand: "Dobot",
    category: "robotic-arms",
    type: "6-DOF Collaborative Robot",
    popular: false,
    rating: 4.6,
    reviewCount: 18,
    stockStatus: "in-stock",
    images: [
      "https://images.unsplash.com/photo-1606378059120-35d1b1c16b73?w=600&h=400&fit=crop"
    ],
    shortDescription: "Коллаборативный робот среднего класса для промышленных применений.",
    fullDescription: "Dobot CR3 предлагает баланс между производительностью и доступностью для средних производственных задач.",
    features: [
      "6 степеней свободы",
      "Грузоподъемность до 3 кг",
      "Радиус действия 500 мм",
      "Безопасная работа с людьми"
    ],
    pricing: {
      base: "Запросить цену"
    },
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "120 000 ₽"
    },
    leadTime: "3-4 недели",
    reviews: [
      {
        id: 104,
        author: "Цех Точного Машиностроения",
        rating: 5,
        date: "2024-02-28",
        comment: "Надежный помощник в производстве."
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Universal Robots UR5e and FANUC CRX-10iA entries
  {
    id: "universal-robots-ur5e",
    name: "Universal Robots UR5e",
    brand: "Universal Robots",
    category: "robotic-arms",
    type: "Collaborative Robot",
    popular: false,
    rating: 4.6,
    reviewCount: 11,
    stockStatus: "in-stock",
    images: [
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85",
      "https://www.universal-robots.com/media/18639/ur5e-product.jpg?width=450&quality=85"
    ],
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
        id: 9,
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
    type: "Collaborative Robot",
    popular: false,
    rating: 4.7,
    reviewCount: 9,
    stockStatus: "in-stock",
    images: [
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png",
      "https://www.fanuc.eu/~/media/images/fanuc%20europe/products/robots/series/crx/crx-10ia_2.png"
    ],
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
        id: 10,
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
    type: "Desktop Laser",
    popular: false,
    rating: 4.5,
    reviewCount: 14,
    stockStatus: "in-stock",
    power: "45W",
    images: [
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995",
      "https://cdn.shopify.com/s/files/1/0274/3345/products/pro-closed-0000_5000x.jpg?v=1663343995"
    ],
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
        id: 11,
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
    type: "Industrial Laser",
    popular: true,
    rating: 4.8,
    reviewCount: 10,
    stockStatus: "in-stock",
    power: "120W",
    images: [
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg",
      "https://www.epiloglaser.com/assets/img/products/fusion-laser-series/gallery/fusion-m2-40-laser-machine-1-lg.jpg"
    ],
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
        id: 12,
        author: "Производство ЛазерТех",
        rating: 5,
        date: "28 октября 2024",
        comment: "Превосходная производительность!"
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Helper function to convert old inStock boolean to new stockStatus
const getStockStatusFromBoolean = (inStock: boolean): StockStatus => {
  return inStock ? "in-stock" : "out-of-stock";
};

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
