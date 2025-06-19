import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  model: string;
  availability: string;
  rating: number;
  reviewCount: number;
  images: string[];
  shortDescription: string;
  features: string[];
}

const ProductDetail = () => {
  const { productId } = useParams();

  const product = {
    id: "prusa-core-one",
    name: "Prusa CORE ONE",
    price: 1199,
    originalPrice: 1299,
    category: "3D Принтеры",
    brand: "Prusa Research",
    model: "CORE ONE",
    availability: "В наличии",
    rating: 4.8,
    reviewCount: 127,
    images: [
      "/lovable-uploads/4250113c-57a1-40fc-9a50-b3b6528b7ecc.png",
      "/lovable-uploads/1d6a218d-dce1-4be6-9d73-c264b057ebab.png",
      "/lovable-uploads/601d9a5c-5a42-41fb-bfb1-98c0524126b9.png",
      "/lovable-uploads/096c7a17-98be-421a-8711-6fd337d5cdda.png"
    ],
    shortDescription: "Первый CoreXY 3D-принтер от Prusa с закрытым корпусом для профессиональной печати",
    features: [
      "Закрытый корпус с контролем температуры камеры",
      "Система CoreXY для быстрой и точной печати",
      "Nextruder экструдер с прямым приводом",
      "Автоматическое выравнивание стола с тензодатчиками", 
      "Поддержка широкого спектра материалов",
      "Wi-Fi, Ethernet и USB подключение"
    ]
  };
  
  usePageTitle(`${product.name} - Робототехника`);

  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImg(image);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-700">
            Робототехника
          </a>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </header>

      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="/" className="text-blue-500 hover:text-blue-700">
                  Главная
                </a>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.921c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <a
                  href="/category/3d-printers"
                  className="text-blue-500 hover:text-blue-700"
                >
                  3D Принтеры
                </a>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.921c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li>
                <span className="text-gray-500">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={selectedImg}
                alt={product.name}
                className="w-full rounded-lg shadow-md"
              />
              <div className="mt-4 grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - Дополнительное изображение ${
                      index + 1
                    }`}
                    className="w-full rounded-lg shadow-sm cursor-pointer hover:opacity-75 transition-opacity duration-200"
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        product.rating > index
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviewCount} отзывов)
                </span>
              </div>
              <div className="mb-4">
                <Badge className="mr-2">{product.availability}</Badge>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              <p className="text-gray-700 mb-6">{product.shortDescription}</p>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-semibold text-blue-700">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Heart className="h-5 w-5 mr-2" />
                    В избранное
                  </Button>
                  <Button>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Особенности:
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-end">
                <Button variant="ghost" className="text-gray-500">
                  <Share2 className="h-4 w-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#113C5A] mb-4">
                  Информация о продавце
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Seller Avatar"
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="font-medium text-gray-800">ООО "Робототех"</p>
                    <p className="text-sm text-gray-500">
                      Рейтинг: 4.9 (1568 продаж)
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Продавец является проверенным партнером и предлагает широкий
                  ассортимент товаров для робототехники.
                </p>
                <Button variant="outline">Связаться с продавцом</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#1F669D]">
                    Подробное описание
                  </h4>
                  <p className="text-gray-700">
                    Prusa CORE ONE - это первый 3D-принтер от Prusa,
                    использующий кинематику CoreXY, что обеспечивает высокую
                    скорость и точность печати. Закрытый корпус позволяет
                    контролировать температуру камеры, что особенно важно при
                    работе с материалами, чувствительными к температурным
                    колебаниям.
                  </p>
                  <h4 className="text-xl font-semibold text-[#1F669D]">
                    Преимущества
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>
                      Высокая скорость и точность печати благодаря кинематике
                      CoreXY.
                    </li>
                    <li>
                      Закрытый корпус для контроля температуры и работы с
                      различными материалами.
                    </li>
                    <li>
                      Nextruder экструдер с прямым приводом для надежной подачи
                      материала.
                    </li>
                    <li>
                      Автоматическое выравнивание стола с тензодатчиками для
                      идеального первого слоя.
                    </li>
                    <li>Широкий спектр поддерживаемых материалов.</li>
                    <li>Wi-Fi, Ethernet и USB подключение.</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold text-[#1F669D] mb-4 border-b-2 border-[#1F669D] pb-2">Характеристики печати</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Область построения / Объем печати</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Максимальные размеры печати (оси X × Y × Z):</span>
                              <span className="text-gray-700">250 × 220 × 270 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Площадь платформы построения в квадратных единицах:</span>
                              <span className="text-gray-700">55 000 мм²</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Максимальная длина создаваемой детали:</span>
                              <span className="text-gray-700">270 мм</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Разрешение и точность</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Диапазон толщины слоя (минимальная и максимальная):</span>
                              <span className="text-gray-700">0,05 - 0,35 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Разрешение по XY (горизонтальная детализация):</span>
                              <span className="text-gray-700">0,1 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Допуски на точность размеров для различных элементов:</span>
                              <span className="text-gray-700">±0,1 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Минимально возможная толщина стенки:</span>
                              <span className="text-gray-700">0,4 мм</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Скорость печати</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Максимальная скорость печати:</span>
                              <span className="text-gray-700">250 мм/с</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Типичный/средний диапазон скорости печати:</span>
                              <span className="text-gray-700">50-200 мм/с</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Изменения скорости в зависимости от типа материала:</span>
                              <span className="text-gray-700">Автоматическая регулировка для оптимального качества</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-[#1F669D] mb-4 border-b-2 border-[#1F669D] pb-2">Технология и материалы</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Технология печати</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Основной тип технологии (FDM, SLA, SLS и т.д.):</span>
                              <span className="text-gray-700">FDM (Fused Deposition Modeling)</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Детали конкретной реализации:</span>
                              <span className="text-gray-700">CoreXY с закрытым корпусом и Nextruder</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Совместимость с материалами</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Поддерживаемые типы материалов:</span>
                              <span className="text-gray-700">PLA, PETG, ABS, ASA, PC, TPU, Nylon, Carbon Fiber</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Характеристики картриджей/катушек с материалом:</span>
                              <span className="text-gray-700">Стандартные катушки 1,75 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Рабочий диапазон температур для материалов:</span>
                              <span className="text-gray-700">Экструдер: до 290°C, платформа: до 120°C, камера: до 55°C</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-[#1F669D] mb-4 border-b-2 border-[#1F669D] pb-2">Аппаратные характеристики</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Габариты и вес</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Габариты принтера (Ш × Г × В):</span>
                              <span className="text-gray-700">500 × 550 × 515 мм</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Вес принтера:</span>
                              <span className="text-gray-700">22 кг</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Требования к минимальному пространству для доступа и обслуживания:</span>
                              <span className="text-gray-700">700 × 700 мм пространства вокруг</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Управление и интерфейс</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Тип и характеристики интерфейса управления:</span>
                              <span className="text-gray-700">Цветной сенсорный экран с поворотным диском</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Разрешение и размер дисплея:</span>
                              <span className="text-gray-700">Цветной TFT дисплей</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Доступные языки интерфейса:</span>
                              <span className="text-gray-700">Многоязычный, включая русский</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Подключение</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Поддержка Wi-Fi и соответствующие стандарты:</span>
                              <span className="text-gray-700">Wi-Fi 802.11 b/g/n, съемный модуль</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Подключение по Ethernet:</span>
                              <span className="text-gray-700">Да</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Варианты подключения по USB:</span>
                              <span className="text-gray-700">USB порт, USB флеш-накопитель, NFC</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-[#1F669D] mb-4 border-b-2 border-[#1F669D] pb-2">Требования к среде эксплуатации и питанию</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Условия эксплуатации</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Диапазон рабочих температур:</span>
                              <span className="text-gray-700">15-30°C</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Требования к влажности:</span>
                              <span className="text-gray-700">20-80% без конденсации</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Характеристики электропитания</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Требования к напряжению (В, переменный ток):</span>
                              <span className="text-gray-700">100-240 В, 50/60 Гц</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Энергопотребление (Ватт):</span>
                              <span className="text-gray-700">250 Вт</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Требования к частоте тока (Гц):</span>
                              <span className="text-gray-700">50/60 Гц</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-[#1F669D] mb-4 border-b-2 border-[#1F669D] pb-2">Расширенные функции</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Автоматизация и датчики</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Функция автоматического выравнивания платформы:</span>
                              <span className="text-gray-700">Да, на основе тензодатчиков</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Сенсорные системы для мониторинга процесса:</span>
                              <span className="text-gray-700">Датчик филамента, температуры, давления, двери</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Функции автоматической подачи/загрузки материала:</span>
                              <span className="text-gray-700">Автоматическая подача и очистка сопла</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Совместимость с ПО</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Совместимые операционные системы:</span>
                              <span className="text-gray-700">Windows, macOS, Linux</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Поддерживаемые форматы файлов:</span>
                              <span className="text-gray-700">.gcode, .stl, .obj, .3mf</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Требуемые системные характеристики для ПО:</span>
                              <span className="text-gray-700">Минимум 4 ГБ ОЗУ, 64-битная ОС</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-medium text-[#113C5A] mb-3">Контроль качества</h5>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Функция определения усилия (Force sensing):</span>
                              <span className="text-gray-700">Да, через тензодатчики</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Системы контроля температуры:</span>
                              <span className="text-gray-700">Многозонный контроль: экструдер, стол, камера</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="font-medium text-[#1F669D]">Функции мониторинга печати в реальном времени:</span>
                              <span className="text-gray-700">Да, через PrusaLink/PrusaConnect и дисплей</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#1F669D]">
                    Отзывы покупателей
                  </h4>
                  <p className="text-gray-700">
                    Здесь будут отображаться отзывы покупателей о данном
                    товаре.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#1F669D]">
                    Условия доставки
                  </h4>
                  <p className="text-gray-700">
                    Информация об условиях доставки данного товара.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
