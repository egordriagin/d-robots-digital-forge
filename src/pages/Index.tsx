import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Star } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: "bambu-x1e",
      name: "Bambu Lab X1E",
      category: "3d-printers",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=400&fit=crop",
      description: "Professional 3D printer with automatic material system",
      price: "Запросить цену",
      badge: "Популярный"
    },
    {
      id: "unitree-go2-pro",
      name: "Unitree Go2 Pro",
      category: "robotic-dogs",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop",
      description: "Advanced quadrupedal robot with AI capabilities",
      price: "Запросить цену",
      badge: "Новинка"
    },
    {
      id: "freescan-ue-pro",
      name: "FreeScan UE Pro",
      category: "3d-scanners",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
      description: "High-precision 3D scanner for professional applications",
      price: "Запросить цену",
      badge: "Рекомендуем"
    }
  ];

  const clientLogos = [
    "МГТУ «СТАНКИН»", "X5 Group", "Аквафор", "Университет ИТМО", 
    "МГУ им. Ломоносова", "Татнефть", "SUZUKI", "LG Electronics"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#113C5A] via-[#1F669D] to-[#3498DB] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#3498DB] text-white px-4 py-2 text-sm">
                  Надежный партнер с 2025 года
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Передовые решения 
                  <span className="text-[#3498DB]"> цифрового</span> производства
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Более 1000 организаций по всему миру доверяют нашим 3D принтерам, 
                  сканерам, роботам и станкам с ЧПУ для реализации инновационных проектов.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white font-semibold px-8 py-3 transition-all duration-300">
                  Посмотреть каталог
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A] font-semibold px-8 py-3 transition-all duration-300">
                    Получить консультацию
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3498DB]">1000+</div>
                  <div className="text-sm text-gray-300">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3498DB]">5+</div>
                  <div className="text-sm text-gray-300">Стран присутствия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3498DB]">100+</div>
                  <div className="text-sm text-gray-300">Моделей оборудования</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=500&fit=crop" 
                alt="3D Printing Technology" 
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-[#113C5A] p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Высокая точность</div>
                <div className="text-xs text-gray-600">до 0.1мм</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#113C5A] mb-4">Популярные продукты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Откройте для себя наши самые востребованные решения для цифрового производства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-[#1F669D]">
                      {product.price}
                    </div>
                    <Link to={`/product/${product.category}/${product.id}`}>
                      <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/3d-printers">
              <Button size="lg" variant="outline" className="border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white">
                Смотреть весь каталог
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#113C5A] mb-4">Категории оборудования</h2>
            <p className="text-xl text-gray-600">
              Полный спектр решений для современного производства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "3D Принтеры", path: "/3d-printers", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop", description: "Профессиональные 3D принтеры для любых задач" },
              { name: "3D Сканеры", path: "/3d-scanners", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", description: "Высокоточное 3D сканирование объектов" },
              { name: "Робо-собаки", path: "/robotic-dogs", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", description: "Четвероногие роботы нового поколения" },
              { name: "Роботы-гуманоиды", path: "/humanoid-robots", image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop", description: "Передовые человекоподобные роботы" },
              { name: "Роботизированные руки", path: "/robotic-arms", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", description: "Промышленные манипуляторы высокой точности" },
              { name: "Лазерные станки", path: "/laser-cutters", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", description: "Точная лазерная резка и гравировка" }
            ].map((category) => (
              <Link key={category.path} to={category.path} className="group block">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#113C5A]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 group-hover:text-[#1F669D] transition-colors">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#113C5A] mb-4">Нам доверяют</h2>
            <p className="text-xl text-gray-600">
              Ведущие компании и университеты выбирают наши решения
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-[#3498DB] transition-colors">
                <div className="text-[#1F669D] font-semibold text-sm md:text-base">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#113C5A] to-[#1F669D]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы начать свой проект?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Получите персональную консультацию и подберите оптимальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white font-semibold px-8 py-3">
                  Получить консультацию
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A] font-semibold px-8 py-3">
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
