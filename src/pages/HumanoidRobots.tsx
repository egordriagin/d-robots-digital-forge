
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HumanoidRobots = () => {
  const humanoidRobots = [
    { id: "unitree-h1", name: "Unitree H1", description: "Полноразмерный гуманоидный робот", price: "Запросить цену" },
    { id: "unitree-g1", name: "Unitree G1", description: "Компактный гуманоидный робот", price: "Запросить цену" }
  ];

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
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=400&fit=crop" 
                  alt={robot.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                  Новинка
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-[#113C5A]">{robot.name}</CardTitle>
                <p className="text-gray-600">{robot.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#1F669D]">{robot.price}</span>
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
