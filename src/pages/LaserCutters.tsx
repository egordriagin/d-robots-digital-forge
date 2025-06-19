
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

const LaserCutters = () => {
  const laserCutters = getProductsByCategory("laser-cutters");

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Лазерные станки</h1>
          <p className="text-xl text-gray-600">Высокоточная лазерная резка и гравировка для творчества и производства</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {laserCutters.map((cutter) => (
            <Card key={cutter.id} className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={cutter.images[0]}
                  alt={cutter.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-[#3498DB] text-white">
                  {cutter.power}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
                    {cutter.brand}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{cutter.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#113C5A] text-lg">{cutter.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-[#1F669D]">{cutter.basePrice}</span>
                  <Link to={`/product/laser-cutters/${cutter.id}`}>
                    <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D]">Подробнее</Button>
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

export default LaserCutters;
