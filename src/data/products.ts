
import { Product } from "@/types/product";

export { Product } from "@/types/product";
export { StockStatus } from "@/types/product";

export const products: Product[] = [
  {
    id: "3d-scanner-001",
    name: "3D Scanner Pro",
    brand: "Tech Solutions",
    category: "3d-scanners",
    shortDescription: "High-precision 3D scanner for professional use.",
    fullDescription: "The 3D Scanner Pro offers unparalleled accuracy and detail, making it perfect for industrial design, reverse engineering, and quality control.",
    images: ["/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png"],
    pricing: {
      base: "от 250 000 ₽"
    },
    leadTime: "14-21 день",
    stockStatus: "in-stock",
    rating: 4.8,
    reviewCount: 12,
    features: [
      "Точность сканирования до 0.02 мм",
      "Объем сканирования 200x200x200 мм",
      "Скорость сканирования до 8 секунд",
      "Экспорт в STL, OBJ, PLY",
      "Технология синего света",
      "Разрешение камеры 5.0 МП"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Алексей М.",
        rating: 5,
        date: "15.12.2024",
        comment: "Отличный сканер, очень точный и быстрый."
      }
    ],
    scannerSpecifications: {
      scanAccuracy: "Up to 0.02 mm",
      scanVolume: "200 x 200 x 200 mm",
      scanSpeed: "Up to 8 seconds per scan",
      dataExportFormats: ["STL", "OBJ", "PLY"],
      lightSource: "Blue light technology",
      cameraResolution: "5.0 MP"
    }
  },
  {
    id: "spot-mini",
    name: "Spot Mini",
    brand: "Boston Dynamics",
    category: "robotic-dogs",
    shortDescription: "Agile robot dog for various applications.",
    fullDescription: "Spot Mini is designed for indoor and outdoor use, capable of navigating complex terrains and performing tasks such as inspection, delivery, and data collection.",
    images: ["/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png"],
    pricing: {
      base: "от 7 500 000 ₽"
    },
    leadTime: "30-45 дней",
    stockStatus: "backorder",
    rating: 4.9,
    reviewCount: 8,
    features: [
      "Максимальная скорость 1.6 м/с",
      "Время работы 90 минут",
      "Грузоподъемность 14 кг",
      "17 степеней свободы",
      "Камеры, LiDAR, IMU",
      "Wi-Fi, Ethernet подключение"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Дмитрий К.",
        rating: 5,
        date: "10.12.2024",
        comment: "Невероятная машина! Очень впечатляющие возможности."
      }
    ],
    roboticDogSpecifications: {
      maxSpeed: "1.6 m/s",
      batteryLife: "90 minutes",
      payloadCapacity: "14 kg",
      degreesOfFreedom: "17",
      sensors: ["Cameras", "LiDAR", "Inertial Measurement Unit"],
      communication: "Wi-Fi, Ethernet"
    }
  },
  {
    id: "atlas-humanoid",
    name: "Atlas Humanoid",
    brand: "Boston Dynamics",
    category: "humanoid-robots",
    shortDescription: "Advanced humanoid robot for research and development.",
    fullDescription: "Atlas is a dynamic humanoid robot designed for a variety of tasks, including search and rescue, manufacturing, and construction. Its advanced control system allows for complex movements and balance.",
    images: ["/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png"],
    pricing: {
      base: "от 15 000 000 ₽"
    },
    leadTime: "60-90 дней",
    stockStatus: "backorder",
    rating: 4.7,
    reviewCount: 5,
    features: [
      "Рост 1.5 м, вес 80 кг",
      "28 степеней свободы",
      "Литий-ионная батарея",
      "Камеры, LiDAR, датчики силы",
      "Wi-Fi подключение",
      "Продвинутая система управления"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Сергей Р.",
        rating: 5,
        date: "05.12.2024",
        comment: "Передовые технологии робототехники в действии!"
      }
    ],
    humanoidRobotSpecifications: {
      height: "1.5 m",
      weight: "80 kg",
      degreesOfFreedom: "28",
      powerSource: "Lithium-ion battery",
      sensors: ["Cameras", "LiDAR", "Force sensors"],
      communication: "Wi-Fi"
    }
  },
  {
    id: "collaborative-arm",
    name: "Collaborative Robotic Arm",
    brand: "Universal Robots",
    category: "robotic-arms",
    shortDescription: "Safe and flexible robotic arm for collaborative tasks.",
    fullDescription: "This collaborative robotic arm is designed to work alongside humans in a variety of industrial applications, providing increased efficiency and safety.",
    images: ["/lovable-uploads/0d3b1654-814f-455b-a2b3-0d3f3432c2c9.png"],
    pricing: {
      base: "от 4 500 000 ₽"
    },
    leadTime: "21-30 дней",
    stockStatus: "in-stock",
    rating: 4.6,
    reviewCount: 15,
    features: [
      "Грузоподъемность 5 кг",
      "Радиус действия 850 мм",
      "6 степеней свободы",
      "Повторяемость ±0.03 мм",
      "Питание AC 220V",
      "Ethernet подключение"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Михаил В.",
        rating: 4,
        date: "20.11.2024",
        comment: "Отличное решение для автоматизации производства."
      }
    ],
    roboticArmSpecifications: {
      payloadCapacity: "5 kg",
      reach: "850 mm",
      degreesOfFreedom: "6",
      repeatability: "±0.03 mm",
      powerSource: "AC 220V",
      communication: "Ethernet"
    }
  },
  {
    id: "laser-cutter-pro",
    name: "Laser Cutter Pro",
    brand: "Glowforge",
    category: "laser-cutters",
    shortDescription: "Professional laser cutter for precise cutting and engraving.",
    fullDescription: "The Laser Cutter Pro is perfect for small businesses and hobbyists, offering high-precision cutting and engraving on a variety of materials, including wood, acrylic, and leather.",
    images: ["/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png"],
    pricing: {
      base: "от 600 000 ₽"
    },
    leadTime: "14-21 день",
    stockStatus: "in-stock",
    rating: 4.5,
    reviewCount: 22,
    features: [
      "Мощность лазера 45W",
      "Область резки 300x500 мм",
      "Толщина материала до 12 мм",
      "CO2 лазер",
      "Замкнутое жидкостное охлаждение",
      "Поддержка SVG, DXF, PNG, JPG"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Елена П.",
        rating: 5,
        date: "18.11.2024",
        comment: "Превосходное качество резки и гравировки!"
      }
    ],
    laserCutterSpecifications: {
      laserPower: "45W",
      cuttingArea: "300 x 500 mm",
      materialThickness: "Up to 12 mm",
      laserType: "CO2 laser",
      coolingSystem: "Closed-loop liquid cooling",
      softwareCompatibility: ["SVG", "DXF", "PNG", "JPG"]
    }
  },
  {
    id: "ultimaker-s5",
    name: "Ultimaker S5",
    brand: "Ultimaker",
    category: "3d-printers",
    shortDescription: "Reliable 3D printer for professional prototyping.",
    fullDescription: "The Ultimaker S5 offers dual extrusion, a large build volume, and compatibility with a wide range of materials, making it ideal for professional prototyping and small-scale manufacturing.",
    images: ["/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"],
    pricing: {
      base: "от 700 000 ₽"
    },
    leadTime: "14-21 день",
    stockStatus: "in-stock",
    rating: 4.7,
    reviewCount: 28,
    features: [
      "Объем печати 330x240x300 мм",
      "Разрешение слоя до 20 микрон",
      "Диаметр сопла 0.4 мм",
      "Скорость печати до 24 мм³/с",
      "Материалы: PLA, ABS, Nylon, CPE, TPU",
      "Wi-Fi, Ethernet, USB"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Андрей С.",
        rating: 5,
        date: "25.11.2024",
        comment: "Профессиональный принтер с отличным качеством печати."
      }
    ],
    printerSpecifications: {
      buildVolume: "330 x 240 x 300 mm",
      layerResolution: "Up to 20 microns",
      nozzleDiameter: "0.4 mm",
      printSpeed: "Up to 24 mm³/s",
      materials: ["PLA", "ABS", "Nylon", "CPE", "TPU"],
      connectivity: "Wi-Fi, Ethernet, USB"
    }
  },
  {
    id: "prusa-core-one",
    name: "Prusa Core One",
    brand: "Prusa",
    category: "3d-printers",
    shortDescription: "Высокоскоростной 3D-принтер с автоматической калибровкой",
    fullDescription: `<h2>Prusa Core One - революция в мире 3D-печати</h2>

<p>Prusa Core One представляет собой новейшую разработку компании Prusa Research, объединяющую передовые технологии и многолетний опыт в области 3D-печати. Этот принтер создан для тех, кто не готов идти на компромиссы в вопросах качества, скорости и надежности.</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<h3>Ключевые особенности:</h3>

<img src="/path/to/prusa-core-one-features.jpg" alt="Prusa Core One Features" style="width: 100%; max-width: 600px; margin: 20px 0;">

<ul>
<li><strong>Высокая скорость печати:</strong> До 200 мм/с без потери качества</li>
<li><strong>Автоматическая калибровка:</strong> Система автоматического выравнивания стола</li>
<li><strong>Закрытая камера:</strong> Обеспечивает стабильную температуру для печати ABS и других высокотемпературных материалов</li>
<li><strong>Тихая работа:</strong> Уровень шума менее 40 дБ</li>
<li><strong>Большая область печати:</strong> 250×220×270 мм</li>
</ul>

<hr>

<h3>Технические характеристики:</h3>

<table border="1" style="width: 100%; border-collapse: collapse;">
<tr>
<th>Параметр</th>
<th>Значение</th>
</tr>
<tr>
<td>Область печати</td>
<td>250 × 220 × 270 мм</td>
</tr>
<tr>
<td>Скорость печати</td>
<td>До 200 мм/с</td>
</tr>
<tr>
<td>Точность позиционирования</td>
<td>0.1 мм</td>
</tr>
<tr>
<td>Диаметр сопла</td>
<td>0.4 мм (сменные 0.2-1.0 мм)</td>
</tr>
<tr>
<td>Поддерживаемые материалы</td>
<td>PLA, PETG, ABS, ASA, TPU, PC, PA и другие</td>
</tr>
<tr>
<td>Подключение</td>
<td>USB, Ethernet, Wi-Fi</td>
</tr>
</table>

<img src="/path/to/prusa-core-one-specs.jpg" alt="Prusa Core One Specifications" style="width: 100%; max-width: 600px; margin: 20px 0;">

<h3>Преимущества для профессионалов:</h3>

<p>Prusa Core One разработан с учетом потребностей профессиональных пользователей и производственных задач:</p>

<img src="/path/to/prusa-core-one-professional.jpg" alt="Professional Use" style="width: 100%; max-width: 600px; margin: 20px 0;">

<ul>
<li>Надежность 24/7 работы</li>
<li>Возможность удаленного мониторинга</li>
<li>Система восстановления печати после сбоев</li>
<li>Простое обслуживание и замена деталей</li>
</ul>

<h3>Программное обеспечение:</h3>

<p>В комплекте поставляется обновленная версия PrusaSlicer с предустановленными профилями для оптимальной печати на Core One.</p>

<img src="/path/to/prusaslicer-interface.jpg" alt="PrusaSlicer Interface" style="width: 100%; max-width: 600px; margin: 20px 0;">

<hr>

<h3>Что входит в комплект:</h3>

<ul>
<li>3D-принтер Prusa Core One (собранный и откалиброванный)</li>
<li>Комплект инструментов для обслуживания</li>
<li>Образцы филамента для первых отпечатков</li>
<li>USB-кабель и карта памяти</li>
<li>Подробная инструкция на русском языке</li>
<li>Доступ к технической поддержке 24/7</li>
</ul>

<img src="/path/to/prusa-core-one-package.jpg" alt="Package Contents" style="width: 100%; max-width: 600px; margin: 20px 0;">

<p><strong>Prusa Core One</strong> - это инвестиция в будущее вашего творчества и бизнеса. Получите профессиональное качество печати с первого дня использования!</p>`,
    images: ["/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"],
    pricing: {
      base: "от 119 900 ₽",
      withAMS: "от 159 900 ₽",
      withAccessories: "от 199 900 ₽"
    },
    leadTime: "7-14 дней",
    stockStatus: "in-stock",
    rating: 4.9,
    reviewCount: 45,
    features: [
      "Высокая скорость печати до 200 мм/с",
      "Автоматическая калибровка стола",
      "Закрытая камера для стабильной температуры",
      "Тихая работа менее 40 дБ",
      "Область печати 250×220×270 мм",
      "Поддержка множества материалов"
    ],
    shipping: {
      cost: "Бесплатно",
      freeThreshold: "50 000 ₽"
    },
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reviews: [
      {
        id: 1,
        author: "Владимир Т.",
        rating: 5,
        date: "01.12.2024",
        comment: "Революционный принтер! Скорость и качество на высшем уровне."
      },
      {
        id: 2,
        author: "Мария К.",
        rating: 5,
        date: "28.11.2024",
        comment: "Автоматическая калибровка экономит массу времени."
      },
      {
        id: 3,
        author: "Игорь С.",
        rating: 4,
        date: "25.11.2024",
        comment: "Отличный принтер, но цена кусается."
      }
    ],
    popular: true,
    printerSpecifications: {
      printVolume: "250 × 220 × 270 мм",
      printSpeed: "До 200 мм/с",
      layerHeight: "0.05 - 0.35 мм",
      nozzleDiameter: "0.4 мм",
      materials: ["PLA", "PETG", "ABS", "ASA", "TPU"],
      connectivity: ["USB", "Ethernet", "Wi-Fi"]
    }
  },
  {
    id: "creality-ender-3",
    name: "Creality Ender 3",
    brand: "Creality",
    category: "3d-printers",
    price: 200,
    image: "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png",
    description: "Affordable 3D printer for beginners.",
    fullDescription: "The Creality Ender 3 is a popular choice for beginners due to its low price and ease of use. It offers a decent build volume and is compatible with a variety of materials.",
    specifications: {
      printVolume: "220 x 220 x 250 mm",
      printSpeed: "Up to 180 mm/s",
      layerHeight: "0.1 - 0.4 mm",
      nozzleDiameter: "0.4 mm",
      materials: ["PLA", "PETG", "ABS"],
      connectivity: "SD card"
    }
  },
  {
    id: "anycubic-photon",
    name: "Anycubic Photon",
    brand: "Anycubic",
    category: "3d-printers",
    price: 300,
    image: "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png",
    description: "Resin 3D printer for high-detail prints.",
    fullDescription: "The Anycubic Photon is a resin 3D printer that offers high-detail prints, making it ideal for miniatures, jewelry, and dental models.",
    specifications: {
      printVolume: "115 x 65 x 155 mm",
      layerResolution: "25 - 100 microns",
      printSpeed: "Up to 20 mm/h",
      materials: ["Resin"],
      connectivity: "USB"
    }
  },
  {
    id: "formlabs-form-3",
    name: "Formlabs Form 3",
    brand: "Formlabs",
    category: "3d-printers",
    price: 3500,
    image: "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png",
    description: "Advanced resin 3D printer for professional use.",
    fullDescription: "The Formlabs Form 3 is an advanced resin 3D printer that offers high-precision prints, making it ideal for engineering, manufacturing, and healthcare applications.",
    specifications: {
      printVolume: "145 x 145 x 185 mm",
      layerResolution: "25 - 300 microns",
      printSpeed: "Up to 20 mm/h",
      materials: ["Resin"],
      connectivity: "Wi-Fi, Ethernet, USB"
    }
  }
];

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
