
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

const HumanoidRobots = () => {
  const humanoidRobots = getProductsByCategory("humanoid-robots");

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Роботы-гуманоиды</h1>
          <p className="text-xl text-gray-600">Передовые человекоподобные роботы для исследований и разработки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {humanoidRobots.map((robot) => (
            <Card key={robot.id} className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={robot.images[0]}
                  alt={robot.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                  Новинка
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
                    {robot.brand}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{robot.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#113C5A]">{robot.name}</CardTitle>
                <p className="text-gray-600">{robot.shortDescription}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#1F669D]">{robot.basePrice}</span>
                  <Link to={`/product/humanoid-robots/${robot.id}`}>
                    <Button className="bg-[#3498DB] hover:bg-[#1F669D]">Подробнее</Button>
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

export default HumanoidRobots;
