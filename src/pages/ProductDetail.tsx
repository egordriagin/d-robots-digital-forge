
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Truck, Play } from "lucide-react";
import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";
import { usePageTitle } from "@/hooks/usePageTitle";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Category name translations
  const getCategoryName = (category: string | undefined) => {
    const categoryNames: { [key: string]: string } = {
      '3d-printers': '3D Принтеры',
      '3d-scanners': '3D Сканеры',
      'robotic-dogs': 'Роботы-собаки',
      'humanoid-robots': 'Человекоподобные роботы',
      'robotic-arms': 'Роботизированные руки',
      'laser-cutters': 'Лазерные граверы'
    };
    return categoryNames[category || ''] || category;
  };

  // Real Prusa CORE ONE product data
  const product = {
    name: "Prusa CORE ONE",
    brand: "Prusa Research",
    basePrice: "2,890,000 ₽",
    shippingCost: "15,000 ₽",
    leadTime: "14-21 рабочих дней",
    inStock: true,
    rating: 4.9,
    reviewCount: 87,
    images: [
      "/lovable-uploads/096c7a17-98be-421a-8711-6fd337d5cdda.png",
      "/lovable-uploads/246c7316-f9de-4b7f-a5c6-f36717b7d975.png",
      "/lovable-uploads/1d6a218d-dce1-4be6-9d73-c264b057ebab.png",
      "/lovable-uploads/601d9a5c-5a42-41fb-bfb1-98c0524126b9.png",
      "/lovable-uploads/50022284-efce-4184-bf39-f2053af195b7.png",
      "/lovable-uploads/e876df12-17de-4864-b0c4-e608cba7a730.png",
      "/lovable-uploads/62dc727d-8b1c-4890-b30c-8b8ceeb4e27c.png",
      "/lovable-uploads/8c6653a1-f30e-4468-8cd5-4a1ee630f498.png",
      "/lovable-uploads/8b676c23-6899-4f65-aa72-84bcd1a7b41b.png",
      "/lovable-uploads/4250113c-57a1-40fc-9a50-b3b6528b7ecc.png"
    ],
    shortDescription: "Первый закрытый CoreXY 3D принтер от Prusa Research с точной печатью на скоростях на 15-20% быстрее модели MK4S.",
    fullDescription: `
      Prusa Core One представляет собой закрытый CoreXY 3D принтер, который обеспечивает прецизионную печать со скоростями на 15-20% быстрее модели MK4S. 
      
      Принтер оснащен жесткой стальной рамой весом 22 килограмма, тремя ведущими винтами по оси Z для стабильности и системой прямого привода экструдера Nextruder от Prusa. Эта система Nextruder включает интегрированный теплообменник и высокопроизводительное сопло, способное достигать температуры 290°C.
      
      Система терморегулирования Prusa Core One обеспечивает температуру камеры до 55°C без специального нагревателя. Эта система работает за счет комбинации мощности нагрева стола и двух вытяжных вентиляторов, которые автоматически настраиваются в зависимости от требований материала.
      
      При печати ABS принтер предварительно нагревает камеру до 40°C перед началом печати и поддерживает оптимальную температуру на протяжении всего процесса.
    `,
    demoVideo: "https://www.youtube-nocookie.com/embed/9MLisQjCSJc?si=pu2-LwdzHJ8v5NlS",
    features: [
      "CoreXY кинематика для высокой скорости печати",
      "Закрытая камера с автоматическим контролем температуры",
      "Система Nextruder с прямым приводом",
      "Трехточечная система выравнивания по оси Z",
      "Автоматическое выравнивание стола на основе тензодатчика",
      "Поддержка температуры камеры до 55°C",
      "Подключение по Wi-Fi, Ethernet или USB",
      "Совместимость с Multi Material Upgrade 3 (MMU3)",
      "Магнитное крепление экрана для защиты",
      "Встроенный датчик открытия дверцы для безопасности"
    ],
    specifications: {
      "Технология печати": "FDM (Fused Deposition Modeling)",
      "Область печати": "250 × 220 × 270 мм",
      "Тип кинематики": "CoreXY",
      "Экструдер": "Nextruder (прямой привод)",
      "Поддерживаемые материалы": "PLA, PETG, ABS, ASA, PC, TPU, Carbon Fiber",
      "Максимальная температура сопла": "290°C",
      "Максимальная температура стола": "120°C",
      "Температура камеры": "до 55°C",
      "Точность позиционирования": "±0.1 мм",
      "Высота слоя": "0.05-0.35 мм",
      "Диаметр филамента": "1.75 мм",
      "Подключение": "Wi-Fi, Ethernet, USB, NFC",
      "Размеры принтера": "500 × 550 × 515 мм",
      "Вес": "22 кг",
      "Питание": "220V, 250W"
    },
    pricing: {
      base: "2,890,000 ₽",
      withMMU3: "3,340,000 ₽",
      withAccessories: "3,790,000 ₽"
    },
    shipping: {
      cost: "15,000 ₽",
      freeThreshold: "3,000,000 ₽",
      regions: ["Москва и МО", "Санкт-Петербург", "Регионы РФ"]
    },
    reviews: [
      {
        id: 1,
        author: "Алексей П.",
        rating: 5,
        date: "10 декабря 2024",
        comment: "Превосходный принтер! CoreXY кинематика действительно обеспечивает высокую скорость без потери качества. Закрытая камера отлично работает с ABS."
      },
      {
        id: 2,
        author: "Мария К.",
        rating: 5,
        date: "5 декабря 2024",
        comment: "Отличное качество сборки, система Nextruder работает безупречно. Автоматическое выравнивание стола экономит много времени."
      },
      {
        id: 3,
        author: "Дмитрий В.",
        rating: 4,
        date: "28 ноября 2024",
        comment: "Очень доволен покупкой. Принтер тихий, качество печати на высоком уровне. Единственный минус - цена, но она оправдана качеством."
      },
      {
        id: 4,
        author: "Елена С.",
        rating: 5,
        date: "22 ноября 2024",
        comment: "Профессиональное оборудование высочайшего класса. Система контроля температуры камеры работает идеально для инженерных пластиков."
      }
    ]
  };

  // Set dynamic page title
  usePageTitle(`${product.name} - ${getCategoryName(category)}`);

  // Generate structured data for the product
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.shortDescription,
    "sku": product.name.replace(/\s+/g, '-'),
    "mpn": product.name.replace(/\s+/g, '-'),
    
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": ["RU", "BY", "KZ", "KG", "AM"],
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14,
      "returnMethod": "https://schema.org/ReturnBySpecialArrangement",
      "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility"
    },
    
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": "14",
        "maxValue": "21",
        "unitCode": "DAY"
      }
    },
    
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "RUB"
      }
    },
    
    "offers": {
      "@type": "Offer",
      "url": `${window.location.origin}/product/${category}/${id}`,
      "priceCurrency": "RUB",
      "price": "2890000.00",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    
    "seller": {
      "@type": "Organization",
      "name": "3D Robots",
      "legalName": "ООО «Аддитивные Системы и Робототехника»",
      "url": "https://3d-robots.com",
      "logo": "https://3d-robots.com/images/3d-robots-logo.png",
      "warranty": "12-месячная гарантия производителя на все детали и работы",
      "description": "Компания «3D Robots» поставляет 3D-принтеры, 3D-сканеры, лазерные станки, робототехнические манипуляторы, мобильных роботов и роботов-гуманоидов для промышленных предприятий, образовательных учреждений и научно-исследовательских центров. Мы активно участвуем в федеральных контрактах на территории Российской Федерации, Армении, Республики Беларусь, Республики Казахстан и Кыргызской Республики.",
      "slogan": "Технологии цифрового производства",
      "foundingDate": "2025-04-17",
      "founders": [
        {
          "@type": "Person",
          "name": "Макин Владислав Валерьевич"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ковенский пер, д. 9",
        "addressLocality": "Санкт-Петербург",
        "addressRegion": "Санкт-Петербург",
        "postalCode": "191014",
        "addressCountry": "RU"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+7-967-555-6884",
          "contactType": "customer service",
          "email": "sales@3d-robots.com",
          "availableLanguage": ["Russian", "English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+7-967-555-6884",
          "contactType": "sales",
          "email": "sales@3d-robots.com"
        }
      ],
      "priceRange": "$$$",
      "paymentAccepted": ["Credit Card", "Bank Transfer", "Government Contract"],
      "currenciesAccepted": "RUB, USD, EUR",
      "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
      "award": "Участник федеральных контрактов ЕАЭС 2025",
      "areaServed": ["RU", "BY", "KZ", "KG", "AM"]
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviewCount.toString()
    }
  };

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
              <span>/</span>
              <Link to={`/${category}`} className="hover:text-[#3498DB]">
                {getCategoryName(category)}
              </Link>
              <span>/</span>
              <span className="text-[#113C5A] font-medium">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                  Новинка 2024
                </Badge>
                {product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    В наличии
                  </Badge>
                )}
              </div>
              
              {/* Image thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {product.images.slice(0, 10).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#3498DB]' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 text-[#1F669D] border-[#1F669D]" variant="outline">
                  {product.brand}
                </Badge>
                <h1 className="text-3xl font-bold text-[#113C5A] mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviewCount} отзывов)</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{product.shortDescription}</p>
              </div>

              {/* Pricing */}
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-semibold text-[#113C5A] mb-4">Варианты комплектации</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Базовая комплектация</span>
                    <span className="text-xl font-bold text-[#1F669D]">{product.pricing.base}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>С системой MMU3</span>
                    <span className="text-xl font-bold text-[#1F669D]">{product.pricing.withMMU3}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Полная комплектация</span>
                    <span className="text-xl font-bold text-[#1F669D]">{product.pricing.withAccessories}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>Доставка: Бесплатно</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Срок: {product.leadTime}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Бесплатная доставка при заказе от 3,000,000 ₽
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#3498DB] hover:bg-[#1F669D] text-white"
                  onClick={() => setShowOfferForm(true)}
                >
                  Запросить коммерческое предложение
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Product Information */}
          <div className="mb-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="video">Видео</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="prose max-w-none">
                      <h1 className="text-3xl font-bold text-[#113C5A] mb-6">Prusa CORE ONE: Первый CoreXY 3D принтер от Prusa</h1>
                      
                      <div className="text-gray-700 leading-relaxed space-y-6">
                        <p>
                          Prusa Core One представляет собой закрытый CoreXY 3D принтер, который обеспечивает прецизионную печать со скоростями на 15-20% быстрее модели MK4S. Prusa Core One оснащен жесткой стальной рамой весом 22 килограмма, тремя ведущими винтами по оси Z для стабильности и системой прямого привода экструдера Nextruder от Prusa. Эта система Nextruder включает интегрированный теплообменник и высокопроизводительное сопло, способное достигать температуры 290°C.
                        </p>
                        
                        <p>
                          Система терморегулирования Prusa Core One обеспечивает температуру камеры до 55°C без специального нагревателя. Эта система работает за счет комбинации мощности нагрева стола и двух вытяжных вентиляторов, которые автоматически настраиваются в зависимости от требований материала. Например, при печати ABS принтер Prusa Core One предварительно нагревает камеру до 40°C перед началом печати и поддерживает оптимальную температуру на протяжении всего процесса. Для дополнительного контроля температуры Prusa Core One включает ручную вентиляционную решетку сверху, которая открывается для печати PLA и закрывается для высокотемпературных материалов.
                        </p>
                        
                        <p>
                          Prusa Core One поддерживает совместимость с существующими нагревательными столами Prusa Mark 52 и платформами для печати, добавляя при этом новые функции. Эти новые функции включают боковое хранение филамента, выравнивание стола на основе тензодатчиков, которое не требует ручной настройки Z-смещения, и переключатель дверцы для безопасности. Пользователи могут управлять Prusa Core One полностью в автономном режиме или подключать его через несколько вариантов. Эти варианты подключения включают Ethernet, Wi-Fi или USB, с доступом к локальной сети через PrusaLink и облачными опциями через PrusaConnect. Prusa Core One доступен как в собранном (plug-and-play), так и в комплектном варианте, с возможностью обновления для существующих владельцев MK4S.
                        </p>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-[#113C5A] mb-4">Ключевые возможности</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-[#1F669D]">{key}:</span>
                          <span className="text-gray-700 text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#113C5A]">Отзывы покупателей</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <span className="text-gray-500">({product.reviewCount} отзывов)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {displayedReviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium text-[#113C5A]">{review.author}</span>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button 
                        variant="outline" 
                        className="border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white"
                        onClick={() => setShowAllReviews(!showAllReviews)}
                      >
                        {showAllReviews ? 'Скрыть отзывы' : 'Показать все отзывы'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="video" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Видео обзор Prusa CORE ONE</h3>
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <iframe
                        width="100%"
                        height="100%"
                        src={product.demoVideo}
                        title="Обзор Prusa CORE ONE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-[#113C5A] mb-4">Что вы увидите в видео:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Обзор CoreXY кинематики и её преимуществ</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Демонстрация системы контроля температуры камеры</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Работа экструдера Nextruder</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Примеры печати различными материалами</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Заинтересованы в Prusa CORE ONE?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Получите персональное коммерческое предложение с лучшими условиями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white"
                onClick={() => setShowContactForm(true)}
              >
                Связаться с нами
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]"
                onClick={() => setShowConsultationForm(true)}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        {/* Form Modals */}
        {showOfferForm && (
          <CommercialOfferForm
            productName={product.name}
            onClose={() => setShowOfferForm(false)}
          />
        )}

        {showConsultationForm && (
          <ConsultationForm
            productName={product.name}
            onClose={() => setShowConsultationForm(false)}
          />
        )}

        {showContactForm && (
          <ContactForm
            productName={product.name}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetail;
