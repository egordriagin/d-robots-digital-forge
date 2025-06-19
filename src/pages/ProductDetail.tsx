import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const ProductDetail = () => {
  const { category, id } = useParams();
  usePageTitle("Prusa CORE ONE - 3D Принтер");
  
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app this would come from API/database
  const product = {
    id: "prusa-core-one",
    name: "Prusa CORE ONE",
    brand: "Prusa",
    category: "3D Принтеры",
    price: "Запросить цену",
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    popular: true,
    images: [
      "/lovable-uploads/4250113c-57a1-40fc-9a50-b3b6528b7ecc.png",
      "/lovable-uploads/1d6a218d-dce1-4be6-9d73-c264b057ebab.png",
      "/lovable-uploads/601d9a5c-5a42-41fb-bfb1-98c0524126b9.png",
      "/lovable-uploads/096c7a17-98be-421a-8711-6fd337d5cdda.png"
    ]
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
          <span>/</span>
          <Link to="/3d-printers" className="hover:text-[#3498DB]">3D Принтеры</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к каталогу
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-[#3498DB]" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-[#1F669D] border-[#1F669D]">
                  {product.brand}
                </Badge>
                {product.popular && (
                  <Badge className="bg-[#3498DB] text-white">
                    Популярный
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-[#113C5A] mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-gray-600">({product.reviewCount} отзывов)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-[#1F669D] mb-6">
                {product.price}
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className={product.inStock ? "text-green-700" : "text-red-700"}>
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-[#3498DB] hover:bg-[#1F669D] text-white">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Запросить цену
              </Button>
              
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="h-5 w-5 mr-2" />
                В избранное
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Быстрая консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Нужна помощь в выборе? Наши эксперты ответят на все вопросы.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Получить консультацию
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specifications">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Описание товара</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>Prusa Core One — это закрытый CoreXY 3D-принтер, который обеспечивает точную печать со скоростью на 15-20% выше, чем модель MK4S. Prusa Core One оснащен жесткой цельностальной рамой весом 22 килограмма, тремя ходовыми винтами по оси Z для стабильности и системой прямого привода экструдера Nextruder от Prusa. Эта система Nextruder включает интегрированный термобарьер и высокопроизводительное сопло, способное достигать температуры 290°C.</p>
                
                <p>Система управления температурой Prusa Core One обеспечивает температуру в камере до 55°C без специального нагревателя. Эта система управления температурой работает за счет использования комбинации мощности нагревательного стола и двух вытяжных вентиляторов, которые автоматически регулируются в зависимости от требований материала. Например, при печати ABS, Prusa Core One предварительно нагревает камеру до 40°C перед началом печати и поддерживает оптимальную температуру на протяжении всего процесса. Для дополнительного контроля температуры Prusa Core One включает ручную вентиляционную решетку сверху, которая открывается для печати PLA и закрывается для высокотемпературных материалов.</p>
                
                <p>Prusa Core One сохраняет совместимость с существующими нагревательными столами Prusa Mark 52 и рабочими пластинами, добавляя при этом новые функции. Эти новые функции включают боковое хранение филамента, выравнивание стола на основе тензодатчика, которое не требует ручной настройки Z-смещения, и переключатель двери для безопасности. Пользователи могут эксплуатировать Prusa Core One полностью в автономном режиме или подключить его через несколько вариантов. Эти варианты подключения включают Ethernet, Wi-Fi или USB, с доступом к локальной сети через PrusaLink и облачными опциями через PrusaConnect. Prusa Core One доступен как в собранном виде (готов к работе), так и в виде набора, с возможностью обновления для владельцев MK4S.</p>

                <iframe 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  className="w-full max-w-4xl mx-auto my-8" 
                  frameBorder="0" 
                  height="450" 
                  loading="lazy" 
                  src="https://www.youtube-nocookie.com/embed/9MLisQjCSJc?si=pu2-LwdzHJ8v5NlS" 
                  title="YouTube video player"
                />

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-[#113C5A] mb-4">Каково качество печати и производительность Prusa Core One?</h2>
                
                <p>Prusa Core One достигает точного качества печати благодаря системе движения CoreXY. Эта система движения использует гладкие стержни 10 мм для оси Y, линейную направляющую для оси X и три ходовых винта 8 мм для стабильности оси Z. Конфигурация Prusa Core One обеспечивает постоянное наслоение слоев на всей высоте печати 270 мм, устраняя несоответствия слоев, которые возникают в конструкциях с движущимся столом на больших высотах. Для дальнейшего улучшения качества движения Prusa Core One использует шаговые двигатели с шагом 0,9 градуса вместо стандартных двигателей с шагом 1,8 градуса. Эти более точные шаговые двигатели создают более плавное движение с уменьшенным резонансом двигателя. Для сложных геометрий система Nextruder Prusa Core One с 360-градусным охлаждающим вентилятором позволяет печатать свесы до 70 градусов без поддержек.</p>

                <p>Prusa Core One оснащен датчиком напряжения на основе тензодатчика для выравнивания стола, который устраняет необходимость ручной настройки смещения по оси Z. Этот датчик напряжения обеспечивает точное выравнивание стола, измеряя деформацию, вызванную весом печатающей головки, когда она касается поверхности стола. Prusa Core One также включает в себя несколько функций, повышающих удобство использования, таких как боковое хранение филамента, которое позволяет пользователям устанавливать катушки сбоку, а не сзади принтера. Кроме того, Prusa Core One оснащен переключателем двери для безопасности, который приостанавливает печать, когда дверь открыта.</p>

                <p>Prusa Core One может печатать широкий спектр материалов, включая PLA, PETG, ABS и ASA. Он также может печатать гибкие материалы, такие как TPU, но для этого требуются специальные настройки. Prusa Core One имеет максимальную температуру сопла 290°C и температуру стола 110°C, что позволяет печатать большинство материалов без каких-либо проблем. Prusa Core One также имеет закрытую камеру, которая помогает поддерживать постоянную температуру во время печати, что важно для печати материалов, чувствительных к деформации, таких как ABS.</p>

                <p>Prusa Core One — это универсальный и высокопроизводительный 3D-принтер, который идеально подходит для широкого круга пользователей. Он предлагает точное качество печати, высокую скорость и широкий спектр функций, повышающих удобство использования. Независимо от того, являетесь ли вы новичком или опытным пользователем, Prusa Core One — отличный выбор для ваших нужд 3D-печати.</p>

                <img loading="lazy" sizes="(max-width: 991px) 100vw, 750px" src="/lovable-uploads/8d084d6c-caa6-4c96-a641-100a85172705_new.jpg" className="w-full max-w-4xl mx-auto my-8 rounded-lg"/>
                
                <hr className="my-8" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Технические характеристики</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div>
                  <h3 className="text-xl font-semibold text-[#113C5A] mb-4">Характеристики печати</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Область построения / Объем печати</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Максимальные размеры печати (оси X × Y × Z):</strong> 250 × 210 × 210 мм.</p>
                      <p><strong>Площадь платформы построения в квадратных единицах:</strong> 52 500 мм².</p>
                      <p><strong>Максимальная длина создаваемой детали:</strong> 250 мм.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Разрешение и точность</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Диапазон толщины слоя (минимальная и максимальная):</strong> 0,05 - 0,3 мм.</p>
                      <p><strong>Разрешение по XY (горизонтальная детализация):</strong> 0,1 мм.</p>
                      <p><strong>Допуски на точность размеров для различных элементов:</strong> ±0,05 мм.</p>
                      <p><strong>Минимально возможная толщина стенки:</strong> 0,4 мм.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Скорость печати</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Максимальная скорость печати:</strong> 200 мм/с.</p>
                      <p><strong>Типичный/средний диапазон скорости печати:</strong> 50-150 мм/с.</p>
                      <p><strong>Изменения скорости в зависимости от типа материала:</strong> Скорость может снижаться при печати с гибкими или специальными материалами.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#113C5A] mb-4">Технология и материалы</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Технология печати</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Основной тип технологии (FDM, SLA, SLS и т.д.):</strong> FDM.</p>
                      <p><strong>Детали конкретной реализации (например, MSLA, LFD):</strong> Классическая FDM с нагреваемой платформой и экструдером.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Совместимость с материалами</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Поддерживаемые типы материалов:</strong> PLA, PETG, ABS, ASA, Flex, Nylon и другие.</p>
                      <p><strong>Характеристики картриджей/катушек с материалом:</strong> Стандартные катушки 1,75 мм.</p>
                      <p><strong>Рабочий диапазон температур для материалов:</strong> Экструдер: до 300°C, платформа: до 100°C.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#113C5A] mb-4">Аппаратные характеристики</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Габариты и вес</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Габариты принтера (Ш × Г × В):</strong> 420 × 420 × 380 мм.</p>
                      <p><strong>Вес принтера:</strong> 12 кг.</p>
                      <p><strong>Требования к минимальному пространству для доступа и обслуживания:</strong> Рекомендуется минимум 600 × 600 мм пространства вокруг.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Управление и интерфейс</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Тип и характеристики интерфейса управления:</strong> Цветной сенсорный экран 3,5 дюйма.</p>
                      <p><strong>Разрешение и размер дисплея:</strong> 3,5 дюйма, цветной TFT.</p>
                      <p><strong>Доступные языки интерфейса:</strong> Многоязычный, включая русский.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Подключение</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Поддержка Wi-Fi и соответствующие стандарты:</strong> Wi-Fi 802.11 b/g/n.</p>
                      <p><strong>Подключение по Ethernet:</strong> Нет.</p>
                      <p><strong>Варианты подключения по USB:</strong> USB Type-B, USB флеш-накопитель.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#113C5A] mb-4">Требования к среде эксплуатации и питанию</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Условия эксплуатации</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Диапазон рабочих температур:</strong> 15-30°C.</p>
                      <p><strong>Требования к влажности (если применимо):</strong> 20-80% без конденсации.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Характеристики электропитания</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Требования к напряжению (В, переменный ток):</strong> 100-240 В, 50/60 Гц.</p>
                      <p><strong>Энергопотребление (Ватт):</strong> 150 Вт.</p>
                      <p><strong>Требования к частоте тока (Гц):</strong> 50/60 Гц.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#113C5A] mb-4">Расширенные функции</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Автоматизация и датчики</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Функция автоматического выравнивания платформы:</strong> Да, с помощью датчиков.</p>
                      <p><strong>Сенсорные системы для мониторинга процесса:</strong> Датчик окончания филамента, датчик температуры.</p>
                      <p><strong>Функции автоматической подачи/загрузки материала:</strong> Автоматическая подача филамента.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Совместимость с ПО</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Совместимые операционные системы:</strong> Windows, macOS, Linux.</p>
                      <p><strong>Поддерживаемые форматы файлов:</strong> .gcode, .stl, .obj.</p>
                      <p><strong>Требуемые системные характеристики для ПО:</strong> Минимум 4 ГБ ОЗУ, 64-битная ОС.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#1F669D] mb-3">Контроль качества</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Функция определения усилия (Force sensing):</strong> Нет.</p>
                      <p><strong>Системы контроля температуры:</strong> Поддержка контроля температуры экструдера и платформы.</p>
                      <p><strong>Функции мониторинга печати в реальном времени:</strong> Да, через ПО и экран.</p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Отзывы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Здесь будут отзывы о товаре.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Информация о доставке товара.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
