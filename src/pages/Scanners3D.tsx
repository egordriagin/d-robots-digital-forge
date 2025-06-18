
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const Scanners3D = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const scanners = [
    { id: "freescan-ue-pro", name: "FreeScan UE Pro", brand: "SHINING 3D", type: "Handheld", price: "Запросить цену", rating: 4.8, popular: true },
    { id: "einstar-3d", name: "EinStar 3D Scanner", brand: "SHINING 3D", type: "Handheld", price: "Запросить цену", rating: 4.5, popular: true },
    { id: "revopoint-miraco", name: "Revopoint MIRACO", brand: "Revopoint", type: "Handheld", price: "Запросить цену", rating: 4.3, popular: false },
    { id: "einscan-pro-2x", name: "EinScan Pro 2X 2020", brand: "SHINING 3D", type: "Desktop", price: "Запросить цену", rating: 4.6, popular: true }
  ];

  const filteredScanners = scanners.filter(scanner => 
    scanner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scanner.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">3D Сканеры</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Высокоточные 3D сканеры для реверс-инжиниринга, контроля качества и цифровизации объектов
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Поиск по названию или бренду..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScanners.map((scanner) => (
            <Card key={scanner.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
                  alt={scanner.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {scanner.popular && (
                  <Badge className="absolute top-3 left-3 bg-[#3498DB] text-white">
                    Популярный
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-white text-[#113C5A]">
                  {scanner.type}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
                    {scanner.brand}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{scanner.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors text-lg">
                  {scanner.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-[#1F669D]">
                    {scanner.price}
                  </div>
                  <Link to={`/product/3d-scanners/${scanner.id}`}>
                    <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scanners3D;
