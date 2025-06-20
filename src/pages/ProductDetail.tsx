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
import StandardizedSpecifications from "@/components/StandardizedSpecifications";
import ScannerSpecifications from "@/components/ScannerSpecifications";
import RoboticDogSpecifications from "@/components/RoboticDogSpecifications";
import HumanoidRobotSpecifications from "@/components/HumanoidRobotSpecifications";
import RoboticArmSpecifications from "@/components/RoboticArmSpecifications";
import LaserCutterSpecifications from "@/components/LaserCutterSpecifications";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getProduct } from "@/data/products";
import { pluralizeRating } from "@/utils/pluralization";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Get product data
  const product = getProduct(id || '');

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

  // Set dynamic page title
  usePageTitle(product ? `${product.name} - ${getCategoryName(category)}` : 'Продукт не найден');

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Продукт не найден</h1>
          <p className="text-xl text-gray-600 mb-8">
            Запрашиваемый продукт не существует или был удален.
          </p>
          <Link to="/">
            <Button className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
      "price": "0",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stockStatus === "in-stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    
    "seller": {
      "@type": "Organization",
      "name": "3D Robots",
      "legalName": "ООО «Аддитивные Системы и Робототехника»",
      "url": "https://3d-robots.com",
      "logo": "https://3d-robots.com/images/3d-robots-logo.png",
      "warranty": "12-месячная гарантия производителя на все детали и работы",
      "description": "Компания «3D Robots» поставляет 3D-принтеры, 3D-сканеры, лазерные станки, робототехнические манипуляторы, мобильных роботов и роботов-гуманоидов для промышленных предприятий, образовательных учреждений и научно-исследовательских центров.",
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
        "streetAddress": "Ковенский пер, д. 9 литера А, помещ. 5-н, 6-н офис 10",
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

  const renderSpecifications = () => {
    if (product.printerSpecifications) {
      return <StandardizedSpecifications specifications={product.printerSpecifications} />;
    }
    
    if (product.scannerSpecifications) {
      return <ScannerSpecifications specifications={product.scannerSpecifications} />;
    }
    
    if (product.roboticDogSpecifications) {
      return <RoboticDogSpecifications specifications={product.roboticDogSpecifications} />;
    }
    
    if (product.humanoidRobotSpecifications) {
      return <HumanoidRobotSpecifications specifications={product.humanoidRobotSpecifications} />;
    }
    
    if (product.roboticArmSpecifications) {
      return <RoboticArmSpecifications specifications={product.roboticArmSpecifications} />;
    }
    
    if (product.laserCutterSpecifications) {
      return <LaserCutterSpecifications specifications={product.laserCutterSpecifications} />;
    }
    
    return (
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики</h3>
          <p className="text-gray-600">Детальные характеристики скоро будут добавлены.</p>
        </CardContent>
      </Card>
    );
  };

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
                  Популярный
                </Badge>
                {product.stockStatus === "in-stock" && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    В наличии
                  </Badge>
                )}
              </div>
              
              {/* Image thumbnails */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
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
                    <span className="text-gray-500">({pluralizeRating(product.reviewCount)})</span>
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
                  {product.pricing.withAMS && (
                    <div className="flex justify-between items-center">
                      <span>С системой AMS</span>
                      <span className="text-xl font-bold text-[#1F669D]">{product.pricing.withAMS}</span>
                    </div>
                  )}
                  {product.pricing.withAccessories && (
                    <div className="flex justify-between items-center">
                      <span>Полная комплектация</span>
                      <span className="text-xl font-bold text-[#1F669D]">{product.pricing.withAccessories}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>Доставка: {product.shipping.cost}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Срок: {product.leadTime}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Бесплатная доставка при заказе от 50 000 ₽
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
                      <h3 className="text-2xl font-bold text-[#113C5A] mb-4">Подробное описание</h3>
                      <div 
                        className="text-gray-700 leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                      />
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
                {renderSpecifications()}
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
                        <span className="text-gray-500">({pluralizeRating(product.reviewCount)})</span>
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
                    
                    {product.reviews.length > 3 && (
                      <div className="mt-8 text-center">
                        <Button 
                          variant="outline" 
                          className="border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white"
                          onClick={() => setShowAllReviews(!showAllReviews)}
                        >
                          {showAllReviews ? 'Скрыть отзывы' : 'Показать все отзывы'}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="video" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Видео обзор</h3>
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <iframe
                        width="100%"
                        height="100%"
                        src={product.demoVideo}
                        title={`Обзор ${product.name}`}
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
                          <span>Распаковка и первоначальная настройка</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Калибровка и подготовка к работе</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Демонстрация основных функций</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                          <span>Примеры готовых работ</span>
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
            <h2 className="text-3xl font-bold mb-4">Заинтересованы в этом продукте?</h2>
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
