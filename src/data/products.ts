import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "unitree-go1",
    name: "Unitree GO1",
    brand: "Unitree Robotics",
    category: "robotic-dogs",
    shortDescription: "Четвероногий робот с продвинутой системой навигации и автономным управлением для исследовательских и коммерческих применений.",
    fullDescription: "Unitree GO1 представляет собой четвероногого робота нового поколения, оснащенного передовыми технологиями автономной навигации и искусственного интеллекта. Робот способен адаптироваться к различным типам местности и выполнять широкий спектр задач от патрулирования до исследовательских миссий.\n\nОснащенный мощными приводами и интеллектуальной системой управления, GO1 обеспечивает стабильное передвижение по неровной местности, подъем по лестницам и преодоление препятствий. Модульная конструкция позволяет легко интегрировать дополнительное оборудование для специализированных применений.",
    images: [
      "/lovable-uploads/c39058dc-e6c4-43e6-b8ec-f8ab67679a8b.png",
      "/lovable-uploads/ed7dae6b-dce3-45c0-8048-527a3fa3ddad.png",
      "/lovable-uploads/f01ff7a4-ad84-4553-8eac-bfaa2e392886.png"
    ],
    pricing: {
      base: "от 2 890 000 ₽",
      withAccessories: "до 3 540 000 ₽"
    },
    leadTime: "8-12 недель",
    stockStatus: "pre-order",
    rating: 4.7,
    reviewCount: 23,
    features: [
      "Автономная навигация с SLAM",
      "Грузоподъемность до 5 кг",
      "Время работы до 2,5 часов",
      "Защита IP54",
      "Подъем по лестницам",
      "Дистанционное управление",
      "SDK для разработчиков",
      "Модульная платформа"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "2 000 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Дмитрий К.",
        rating: 5,
        date: "15 января 2024",
        comment: "Отличный робот для исследовательских задач. Стабильная работа на различной местности."
      },
      {
        id: 2,
        author: "Анна С.",
        rating: 4,
        date: "8 января 2024",
        comment: "Впечатляющие возможности навигации, но время автономной работы могло бы быть больше."
      }
    ],
    roboticDogSpecifications: {
      dimensions: {
        formFactor: {
          operatingDimensions: "845 × 500 × 400 мм",
          compactDimensions: "700 × 400 × 250 мм",
          totalWeight: "12 кг",
          groundClearance: "150 мм",
          turningRadius: "0,6 м"
        },
        loadCapacity: {
          staticPayload: "5 кг",
          dynamicPayload: "3 кг",
          manipulatorLoad: "1,5 кг (опционально)"
        }
      },
      mobility: {
        speedMovement: {
          maxSpeed: "3,5 м/с",
          workingSpeedRange: "0,1 - 2,0 м/с",
          movementModes: "Ходьба, бег трусцой, боковое движение"
        },
        terrainCapabilities: {
          maxClimbing: "30°",
          maxObstacleHeight: "200 мм",
          stairClimbing: "Ступени 150-200 мм",
          surfaceCompatibility: "Асфальт, бетон, трава, гравий, песок"
        },
        environmentalConditions: {
          operatingTemperature: "-10°C до +45°C",
          humidity: "10-90% без конденсации",
          weatherProtection: "IP54"
        }
      },
      power: {
        batterySystem: {
          capacity: "15000 мАч, 24В (360 Вт⋅ч)",
          batteryType: "Li-Po высокой плотности",
          runtime: "2,5 часа при нормальной нагрузке",
          hotSwap: "Поддерживается"
        },
        consumption: {
          averagePower: "150 Вт",
          peakPower: "800 Вт",
          chargingSpecs: "4А зарядка, 3 часа полной зарядки"
        }
      },
      control: {
        degreesOfFreedom: {
          totalJoints: "12 активных суставов",
          torqueSpecs: "Номинальный: 23,7 Н⋅м, Пиковый: 33,5 Н⋅м",
          jointRange: "Бедро: ±60°, Голень: ±150°"
        },
        sensorsPerception: {
          cameras: "5 RGB камер, 2 стерео камеры",
          lidarRange: "LiDAR 360° до 12 м",
          imuSensors: "6-осевой IMU, компас",
          additionalSensors: "Ультразвуковые датчики, датчики касания"
        },
        computingPlatform: {
          processor: "NVIDIA Jetson Xavier NX",
          memory: "8 ГБ ОЗУ, 32 ГБ eMMC",
          additionalCompute: "Сопроцессор для управления движением"
        }
      },
      connectivity: {
        communication: {
          wifi: "802.11ac dual-band",
          bluetooth: "Bluetooth 5.0",
          ethernet: "Gigabit Ethernet",
          remoteRange: "До 800 м в прямой видимости"
        },
        expansion: {
          expansionPorts: "4× USB 3.0, 2× UART, CAN шина",
          mountingPoints: "Стандартизированные крепления M4/M6",
          peripheralPower: "12В/5А, 24В/2А",
          sdkSupport: "Python, C++, ROS/ROS2"
        }
      },
      safety: {
        emergencySystems: {
          emergencyStop: "Физическая кнопка + программная команда",
          remoteStop: "Мгновенная остановка через приложение",
          failsafeBehavior: "Автоматическое приседание при потере связи"
        },
        operatingModes: {
          manualControl: "Полное дистанционное управление",
          semiAutonomous: "Следование по маршруту с препятствиями",
          fullyAutonomous: "SLAM навигация, патрулирование",
          simulationCompatibility: "Gazebo, Unity, UE4"
        }
      }
    }
  },
  {
    id: "atlas-robot",
    name: "Atlas Robot",
    brand: "Boston Dynamics",
    category: "humanoid-robots",
    shortDescription: "Передовой гуманоидный робот с исключительной мобильностью и ловкостью для сложных промышленных и исследовательских задач.",
    fullDescription: "Atlas представляет собой вершину развития гуманоидной робототехники, сочетая в себе передовые технологии искусственного интеллекта, точные сенсорные системы и мощные приводы. Робот способен выполнять сложные акробатические движения, манипулировать объектами и адаптироваться к динамично изменяющейся среде.\n\nБлагодаря уникальной системе управления Atlas может работать в условиях, непригодных или опасных для человека, обеспечивая высокую производительность в промышленных применениях, аварийно-спасательных операциях и научных исследованиях.",
    images: [
      "/lovable-uploads/0bb275ed-7704-4805-8d11-54c4823937e5.png",
      "/lovable-uploads/12411eee-82bc-4187-a5a4-6874e356ff85.png",
      "/lovable-uploads/2e452893-6352-42a2-a482-740ee299ee26.png"
    ],
    pricing: {
      base: "Цена по запросу",
      withAccessories: "Полная конфигурация по запросу"
    },
    leadTime: "16-24 недели",
    stockStatus: "pre-order",
    rating: 4.9,
    reviewCount: 8,
    features: [
      "28 гидравлических приводов",
      "Акробатические возможности",
      "Продвинутая система баланса",
      "Всепогодная конструкция",
      "Автономная навигация",
      "Высокая грузоподъемность",
      "Система технического зрения",
      "Исследовательская платформа"
    ],
    shipping: {
      cost: "Индивидуальная доставка",
      freeThreshold: "Включено в стоимость"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Исследовательский центр МГУ",
        rating: 5,
        date: "20 декабря 2023",
        comment: "Невероятные возможности для исследований в области робототехники. Превосходит все ожидания."
      }
    ],
    humanoidRobotSpecifications: {
      dimensions: {
        formFactor: {
          standingHeight: "1,5 м",
          weight: "89 кг",
          compactDimensions: "1,2 × 0,8 × 0,4 м",
          armSpan: "2,1 м"
        },
        anthropomorphic: {
          thighLength: "425 мм",
          armLength: "700 мм",
          proportions: "Близко к человеческим пропорциям"
        }
      },
      mobility: {
        movement: {
          walkingSpeed: "5,6 км/ч",
          runningSpeed: "9,6 км/ч",
          movementModes: "Ходьба, бег, прыжки, кувырки"
        },
        navigation: {
          stairClimbing: "Ступени 190-250 мм",
          obstacleHeight: "400 мм",
          terrainAdaptation: "Неровная местность, склоны до 25°",
          balanceSystems: "Динамическая стабилизация"
        }
      },
      degreesOfFreedom: {
        overall: {
          totalDOF: "28 степеней свободы",
          bodyDistribution: "Равномерное распределение по телу"
        },
        limbs: {
          legDOF: "6 DOF на ногу",
          armDOF: "7 DOF на руку",
          waistTorsoDOF: "3 DOF",
          headNeckDOF: "2 DOF"
        },
        handDexterity: {
          handDOF: "Специализированные захваты",
          tactileFeedback: "Силовые датчики в пальцах"
        }
      },
      power: {
        actuators: {
          jointTorque: "Высокомоментные гидравлические приводы",
          peakTorque: "380+ Н⋅м (колено/бедро)",
          actuatorType: "Гидравлические сервоприводы"
        },
        loadCapacity: {
          operatingPayload: "11 кг",
          armLoad: "Подъем 23 кг на вытянутых руках",
          manipulationRating: "Точные операции до 5 кг"
        },
        battery: {
          capacity: "3,7 кВт⋅ч",
          runtime: "1 час интенсивной работы",
          chargingSpecs: "Зарядка 1,5 часа",
          consumptionProfile: "2-4 кВт в зависимости от нагрузки"
        }
      },
      sensing: {
        vision: {
          cameras: "Стерео RGB-D камеры высокого разрешения",
          lidar3D: "Встроенный 3D LiDAR",
          perception360: "Панорамное восприятие"
        },
        audio: {
          microphoneArray: "4-канальный микрофонный массив",
          audioSystems: "Двусторонняя аудиосвязь",
          speechRecognition: "Распознавание команд"
        },
        environmental: {
          imuBalance: "Высокоточный IMU",
          tactileForce: "Тактильные датчики по всему телу",
          temperatureMonitoring: "Мониторинг перегрева"
        }
      },
      computing: {
        power: {
          onboardComputing: "Высокопроизводительные CPU",
          aiComputing: "Специализированные AI-ускорители",
          memoryStorage: "64 ГБ ОЗУ, 1 ТБ SSD"
        },
        aiSystems: {
          multimodalAI: "Обработка видео, аудио, сенсорных данных",
          realtimeProcessing: "Реакция менее 10 мс",
          learningAdaptation: "Машинное обучение в реальном времени"
        }
      },
      connectivity: {
        communication: {
          wireless: "Wi-Fi 6E, 5G ready",
          remoteControl: "Дистанционное управление до 1 км",
          fleetIntegration: "Координация с группой роботов"
        },
        control: {
          voiceCommands: "Голосовое управление на 12 языках",
          vrControl: "VR-интерфейс для оператора",
          teachingByDemonstration: "Обучение через демонстрацию",
          autonomousModes: "Полная автономия для рутинных задач"
        }
      },
      safety: {
        systems: {
          multilevelSecurity: "3-уровневая система безопасности",
          emergencyProtocols: "Мгновенная остановка всех систем",
          protectionLevel: "Уровень PLd"
        },
        environment: {
          operatingConditions: "-20°C до +45°C",
          indoorOutdoor: "Всепогодное исполнение",
          weatherResistance: "IP65"
        }
      },
      software: {
        development: {
          sdkSupport: "Полный SDK для разработчиков",
          frameworkCompatibility: "ROS2, NVIDIA Isaac Lab, PyTorch",
          simulationIntegration: "Gazebo, MuJoCo, Unity"
        },
        applications: {
          serviceInteraction: "Взаимодействие с людьми",
          industrialSupport: "Промышленные операции",
          researchEducation: "Исследовательская платформа"
        }
      }
    }
  },
  {
    id: "dobot-cr3",
    name: "Dobot CR3",
    brand: "Dobot",
    category: "robotic-arms",
    shortDescription: "Коллаборативный робот-манипулятор с грузоподъемностью 3 кг для безопасной работы рядом с человеком в производственных условиях.",
    fullDescription: "Dobot CR3 представляет собой современный коллаборативный робот, специально разработанный для безопасной работы в непосредственной близости от человека. Благодаря встроенным системам обнаружения столкновений и ограничения силы, робот идеально подходит для автоматизации производственных процессов без установки защитных ограждений.\n\nОснащенный интуитивно понятным программным обеспечением и возможностями обучения методом ведения, CR3 легко настраивается для выполнения разнообразных задач от сборки до упаковки, обеспечивая высокую производительность и гибкость в производственных линиях.",
    images: [
      "/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png",
      "/lovable-uploads/6e6dfb31-5bb2-47de-ac80-62b214a5108c.png",
      "/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png"
    ],
    pricing: {
      base: "от 720 000 ₽",
      withAccessories: "до 980 000 ₽"
    },
    leadTime: "6-8 недель",
    stockStatus: "in-stock",
    rating: 4.6,
    reviewCount: 34,
    features: [
      "Коллаборативная безопасность",
      "Грузоподъемность 3 кг",
      "Радиус действия 629 мм",
      "Повторяемость ±0,03 мм",
      "Обучение методом ведения",
      "Графическое программирование",
      "Встроенное зрение",
      "Простая интеграция"
    ],
    shipping: {
      cost: "15 000 ₽",
      freeThreshold: "500 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Сергей М.",
        rating: 5,
        date: "10 февраля 2024",
        comment: "Отличный робот для малого производства. Легко программируется и безопасен в работе."
      },
      {
        id: 2,
        author: "ООО ТехПром",
        rating: 4,
        date: "25 января 2024",
        comment: "Хорошее соотношение цена-качество. Быстро окупился на нашем производстве."
      }
    ],
    roboticArmSpecifications: {
      capacity: {
        payload: {
          maxPayload: "3 кг",
          maxReach: "629 мм",
          nominalPayload: "3 кг при полном радиусе",
          momentInertia: "0,8 кг⋅м²"
        },
        accuracy: {
          repeatability: "±0,03 мм",
          positioningAccuracy: "±0,05 мм",
          pathAccuracy: "±0,1 мм",
          absoluteAccuracy: "±0,3 мм"
        },
        speed: {
          maxToolSpeed: "1 м/с",
          jointAngularSpeed: "Оси 1-3: 180°/с, Оси 4-6: 225°/с",
          acceleration: "До 5 м/с²",
          cycleTime: "Типичный цикл 8-12 сек"
        }
      },
      mechanical: {
        degreesOfFreedom: {
          axesCount: "6 степеней свободы",
          jointRange: "Ось 1: ±360°, Ось 2: ±85°, Ось 3: ±150°, Ось 4: ±360°, Ось 5: ±180°, Ось 6: ±360°",
          infiniteRotation: "Оси 1, 4, 6 - бесконечное вращение"
        },
        physical: {
          manipulatorWeight: "24 кг",
          baseDimensions: "Ø128 мм × 157 мм",
          mountingOptions: "Любая ориентация",
          constructionMaterial: "Алюминиевый сплав"
        }
      },
      control: {
        programming: {
          graphicalEnvironments: "DobotStudio Pro",
          teachByDemonstration: "Ручное ведение с записью траектории",
          programmingLanguages: "Python, C++, ROS/ROS2",
          dragDropInterface: "Блочное программирование"
        },
        methods: {
          pcSoftware: "DobotStudio для Windows/Linux",
          mobileApp: "iOS/Android приложение",
          voiceControl: "Голосовые команды (опция)",
          gestureVision: "Управление жестами через камеру"
        }
      },
      connectivity: {
        communication: {
          ethernet: "TCP/IP, Modbus TCP",
          usb: "USB 3.0",
          wireless: "Wi-Fi 802.11n, Bluetooth",
          endEffectorComm: "RS485 для захватов"
        },
        io: {
          digitalIO: "16 входов, 16 выходов",
          analogIO: "2 входа, 2 выхода",
          toolConnectorIO: "8-pin M12 разъем",
          endEffectorProtocols: "Modbus RTU, RS485"
        }
      },
      power: {
        requirements: {
          inputVoltage: "100-240В AC, 50/60 Гц",
          powerConsumption: "150 Вт максимум",
          currentRequirements: "1,5А при 220В"
        },
        operating: {
          temperatureRange: "0°C до +45°C",
          humidity: "20-80% без конденсации",
          ipRating: "IP54",
          cleanroomClass: "ISO класс 6"
        }
      },
      safety: {
        functions: {
          collisionDetection: "Встроенные датчики момента",
          safetyBoundaries: "Программируемые зоны безопасности",
          emergencyStop: "Категория 0 и 1",
          forceTorqueLimiting: "Ограничение по всем осям",
          selfCollisionPrevention: "Самодиагностика траектории"
        },
        collaborative: {
          advancedSafetyFeatures: "15 функций коллаборативной безопасности",
          forceSensing: "Силовые датчики в каждом суставе",
          speedSeparation: "Адаптивная скорость",
          safeOperatingModes: "4 режима безопасности"
        }
      },
      software: {
        development: {
          simulation3D: "Встроенная 3D симуляция",
          autonomousProgramming: "AI-ассистированное программирование",
          trajectoryRecording: "Запись и воспроизведение",
          cadCamIntegration: "Импорт CAD моделей"
        },
        applications: {
          endEffectorTypes: "Захваты, отвертки, сварочные горелки",
          multiAxisMachining: "Фрезерование, сверление",
          pickPlaceOptimization: "Оптимизация траекторий",
          weldingAssembly: "Точечная сварка, сборка"
        }
      }
    }
  },
  {
    id: "glowforge-pro",
    name: "Glowforge Pro",
    brand: "Glowforge",
    category: "laser-cutters",
    shortDescription: "Профессиональный лазерный станок с облачным управлением для высокоточной резки и гравировки различных материалов.",
    fullDescription: "Glowforge Pro представляет собой революционное решение в области лазерной обработки материалов, сочетающее в себе профессиональные возможности и простоту использования. Оснащенный мощным CO2 лазером и системой автоматического фокуса, станок обеспечивает исключительную точность и качество обработки.\n\nУникальная облачная платформа управления позволяет работать с дизайнами прямо из веб-браузера, автоматически оптимизируя параметры для различных материалов. Встроенная система видеонаблюдения обеспечивает точное позиционирование и контроль процесса в реальном времени.",
    images: [
      "/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png",
      "/lovable-uploads/c24a9af4-19d1-442e-b8dd-1c3fdd4f5e18.png",
      "/lovable-uploads/ee48ea43-e5bc-4062-b68f-e63d6b298f54.png"
    ],
    pricing: {
      base: "от 890 000 ₽",
      withAccessories: "до 1 200 000 ₽"
    },
    leadTime: "10-14 недель",
    stockStatus: "in-stock",
    rating: 4.8,
    reviewCount: 67,
    features: [
      "45 Вт CO2 лазер",
      "Облачное управление",
      "Автоматический фокус",
      "Встроенная камера",
      "Рабочая область 279×495 мм",
      "Система охлаждения",
      "Фильтрация дыма",
      "Мобильное приложение"
    ],
    shipping: {
      cost: "25 000 ₽",
      freeThreshold: "800 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Мария Л.",
        rating: 5,
        date: "5 марта 2024",
        comment: "Невероятно простой в использовании станок. Качество резки превосходное!"
      },
      {
        id: 2,
        author: "Александр Р.",
        rating: 5,
        date: "28 февраля 2024",
        comment: "Отличное решение для малого бизнеса. Быстро освоили и начали зарабатывать."
      }
    ],
    laserCutterSpecifications: {
      laser: {
        power: {
          outputPower: "45 Вт CO2 лазер",
          laserType: "Запаянная CO2 трубка",
          wavelength: "10640 нм",
          spotSize: "0,15 × 0,2 мм",
          tubeLifetime: "8000-10000 часов"
        },
        performance: {
          maxEngravingSpeed: "До 500 мм/с",
          processingAccuracy: "±0,01 мм",
          imageResolution: "До 1355 DPI",
          speedRange: "1-500 мм/с переменная"
        }
      },
      workArea: {
        processing: {
          workAreaSize: "279 × 495 мм",
          tableSize: "330 × 520 мм",
          maxWorkpieceHeight: "50 мм (с материалом)",
          maxCuttingThickness: "Фанера: 6 мм, Акрил: 12 мм, Кожа: 8 мм"
        },
        physical: {
          machineDimensions: "845 × 560 × 310 мм",
          totalWeight: "34 кг",
          rotaryEngravingDiameter: "Не поддерживается"
        }
      },
      vision: {
        cameras: {
          cameraResolution: "HD CMOS камера",
          visionAccuracy: "±0,2 мм",
          previewArea: "Полное покрытие рабочей области",
          autofocusLidar: "Автоматическая фокусировка"
        },
        advanced: {
          curved3DEngraving: "Не поддерживается",
          autoPassthrough: "Слот для длинных материалов",
          electricLifting: "Ручная регулировка высоты"
        }
      },
      control: {
        interface: {
          touchPanelSpecs: "Веб-интерфейс",
          controlMethods: "Облачное управление через браузер",
          displayLanguages: "Английский, поддержка других языков"
        },
        software: {
          supportedPlatforms: "Glowforge Web App",
          osCompatibility: "Любая ОС с браузером",
          supportedFormats: "SVG, PDF, JPG, PNG, GIF"
        }
      },
      connectivity: {
        options: {
          wifiCapabilities: "802.11n Wi-Fi",
          ethernetPort: "Не предусмотрен",
          usbConnections: "Не требуется",
          mobileCompatibility: "iOS/Android приложения"
        }
      },
      safety: {
        features: {
          safetyClassification: "FDA класс I",
          enclosedWorkspace: "Полностью закрытый корпус",
          emergencyStop: "Кнопка экстренной остановки",
          automaticLocks: "Блокировка при открытии крышки",
          warningSystems: "Световые и звуковые индикаторы"
        },
        operating: {
          operatingTemperature: "16-24°C",
          storageTemperature: "0-40°C",
          powerRequirements: "100-240В AC, 50/60 Гц"
        }
      },
      cooling: {
        system: {
          coolingCapacity: "Встроенная система охлаждения",
          airAssist: "Интегрированный воздушный ассистент",
          exhaustFan: "Встроенный вытяжной вентилятор",
          smokeFiltering: "Дополнительный фильтр (опция)"
        }
      },
      materials: {
        cutting: {
          compatibleCuttingMaterials: "Дерево, фанера, акрил, кожа, ткань, картон",
          cuttingDepthByMaterial: "Зависит от материала и мощности"
        },
        engraving: {
          engravingMaterials: "Дерево, кожа, стекло, металл с покрытием, пластик",
          materialParameters: "Автоматическая оптимизация через облако"
        }
      }
    }
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
