
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star, GraduationCap, Shield, Building, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { pluralizeRating } from "@/utils/pluralization";
import StandardizedSpecifications from "@/components/StandardizedSpecifications";
import ScannerSpecifications from "@/components/ScannerSpecifications";
import RoboticDogSpecifications from "@/components/RoboticDogSpecifications";
import HumanoidRobotSpecifications from "@/components/HumanoidRobotSpecifications";
import RoboticArmSpecifications from "@/components/RoboticArmSpecifications";
import LaserCutterSpecifications from "@/components/LaserCutterSpecifications";
import { useState } from "react";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const coreAdvantages = [
    {
      icon: GraduationCap,
      title: "Специальные условия для образования",
      description: "Скидки для учебных заведений на закупки оборудования и расходных материалов. Помогаем в составлении образовательных программ и внедрении."
    },
    {
      icon: Shield,
      title: "Несем ответственность за результат",
      description: "Комплексная гарантия включает диагностику, ремонт и техническую поддержку оборудования в установленные сроки. Ваше спокойствие — наш приоритет."
    },
    {
      icon: Building,
      title: "Работаем с госзакупками и тендерами",
      description: "Полное соответствие требованиям 44-ФЗ и 223-ФЗ."
    },
    {
      icon: Target,
      title: "Экспертиза мирового уровня",
      description: "Глубокая экспертиза в 3D-печати, 3D-сканировании, моделировании, литье пластика, лазерной резке и CNC-фрезеровке."
    },
    {
      icon: Zap,
      title: "Быстрый отклик и поддержка",
      description: "93% клиентов довольны качеством нашего сервиса. Наша команда поддержки отвечает на вопросы в чате или по email 5 дней в неделю, с 10:00 до 18:00 по московскому времени."
    }
  ];

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

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
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
            <div className="flex gap-8">
              <div className="prose max-w-[800px]">
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
              
              <div className="flex-1 min-w-0">
                <div className="sticky top-8">
                  <h4 className="text-xl font-bold text-[#113C5A] mb-6">Наши преимущества</h4>
                  <div className="space-y-4">
                    {coreAdvantages.map((advantage, index) => {
                      const IconComponent = advantage.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#3498DB] rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-[#113C5A] mb-2 text-sm">
                              {advantage.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
  );
};

export default ProductTabs;
