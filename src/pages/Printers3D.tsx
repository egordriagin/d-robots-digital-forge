
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const Printers3D = () => {
  usePageTitle("3D Принтеры");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const printers = [
    { id: "creatbot-d600", name: "Creatbot D600", brand: "Creatbot", type: "FDM", price: "Запросить цену", rating: 4.5, popular: true },
    { id: "creatbot-peek-300", name: "Creatbot PEEK-300", brand: "Creatbot", type: "FDM", price: "Запросить цену", rating: 4.8, popular: false },
    { id: "flashforge-creator-4", name: "Flashforge Creator 4", brand: "Flashforge", type: "FDM", price: "Зап росить цену", rating: 4.3, popular: true },
    { id: "bambu-x1", name: "Bambu Lab X1", brand: "Bambu Lab", type: "FDM", price: "Запросить цену", rating: 4.9, popular: true },
    { id: "bambu-p1s", name: "Bambu P1S", brand: "Bambu Lab", type: "FDM", price: "Запросить цену", rating: 4.7, popular: true },
    { id: "prusa-xl", name: "Prusa XL", brand: "Prusa", type: "FDM", price: "Запросить цену", rating: 4.6, popular: false },
    { id: "prusa-mk4", name: "Prusa MK4", brand: "Prusa", type: "FDM", price: "Запросить цену", rating: 4.8, popular: true },
    { id: "qidi-x-max", name: "QIDI X MAX", brand: "QIDI", type: "FDM", price: "Запросить цену", rating: 4.4, popular: false },
    { id: "raise3d-pro3", name: "Raise3D Pro3", brand: "Raise3D", type: "FDM", price: "Запросить цену", rating: 4.5, popular: false },
    { id: "anycubic-photon-m3", name: "Anycubic Photon M3 Max", brand: "Anycubic", type: "SLA", price: "Запросить цену", rating: 4.2, popular: false }
  ];

  const filteredPrinters = printers
    .filter(printer => 
      printer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      printer.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "brand") return a.brand.localeCompare(b.brand);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#113C5A] mb-4">3D Принтеры</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные 3D принтеры для промышленности, образования и исследований. 
              Выберите из широкого ассортимента FDM и SLA технологий.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Поиск по названию или бренду..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="brand">По бренду</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrinters.map((printer) => (
            <Card key={printer.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" 
                  alt={printer.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {printer.popular && (
                  <Badge className="absolute top-3 left-3 bg-[#3498DB] text-white">
                    Популярный
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-white text-[#113C5A]">
                  {printer.type}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
                    {printer.brand}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{printer.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors text-lg">
                  {printer.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-[#1F669D]">
                    {printer.price}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/product/3d-printers/${printer.id}`}>
                      <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
                Почему выбирают наши 3D принтеры?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
                  <span>Официальная гарантия от производителя</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
                  <span>Бесплатная техническая поддержка и обучение</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
                  <span>Поставка расходных материалов и запчастей</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
                  <span>Сервисное обслуживание по всей России</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
                alt="3D Printing"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-[#113C5A] mb-4">
            Нужна помощь в выборе?
          </h3>
          <p className="text-gray-600 mb-6">
            Наши эксперты помогут подобрать оптимальное решение для ваших задач
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#3498DB] hover:bg-[#1F669D] text-white px-8 py-3">
              Получить консультацию
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Printers3D;
