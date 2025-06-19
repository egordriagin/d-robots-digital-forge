import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Truck, Play } from "lucide-react";
import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";

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

  // Mock product data - in a real app, this would come from an API
  const product = {
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
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
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
    specifications: {
      "Технология печати": "FDM (Fused Deposition Modeling)",
      "Область печати": "256 × 256 × 256 мм",
      "Точность позиционирования": "±0.1 мм",
      "Высота слоя": "0.08-0.35 мм",
      "Поддерживаемые материалы": "PLA, ABS, PETG, TPU, PA, PC, ASA",
      "Скорость печати": "до 500 мм/с",
      "Диаметр филамента": "1.75 мм",
      "Температура сопла": "до 300°C",
      "Температура стола": "до 120°C",
      "Подключение": "Wi-Fi, Ethernet, USB",
      "Размеры принтера": "385 × 389 × 457 мм",
      "Вес": "31 кг",
      "Питание": "220V, 350W"
    },
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
    ]
  };

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
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
              {product.inStock && (
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
                  <span>С системой AMS</span>
                  <span className="text-xl font-bold text-[#1F669D]">{product.pricing.withAMS}</span>
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
                    <span>Доставка: {product.shipping.cost}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Срок: {product.leadTime}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Бесплатная доставка при заказе от {product.shipping.freeThreshold}
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
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      {product.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                      ))}
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
                  <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Видео обзор</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-[#3498DB] mx-auto mb-4" />
                      <p className="text-gray-600 text-lg font-medium">Обзор Bambu Lab X1E</p>
                      <p className="text-sm text-gray-500">Подробный видео обзор всех функций принтера</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-[#3498DB] mx-auto mb-2" />
                        <p className="text-gray-600">Процесс настройки</p>
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-[#3498DB] mx-auto mb-2" />
                        <p className="text-gray-600">Печать образцов</p>
                      </div>
                    </div>
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
                        <span>Калибровка и подготовка к печати</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Демонстрация системы AMS</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Примеры готовых изделий</span>
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
  );
};

export default ProductDetail;
