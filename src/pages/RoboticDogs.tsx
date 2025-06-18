
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const RoboticDogs = () => {
  const roboticDogs = [
    { id: "unitree-go2-pro", name: "Unitree Go2 Pro", model: "GO2 Pro", price: "Запросить цену", rating: 4.8, popular: true },
    { id: "unitree-go2-edu", name: "Unitree Go2 EDU", model: "GO2 EDU", price: "Запросить цену", rating: 4.6, popular: true },
    { id: "unitree-b1", name: "Unitree B1", model: "B1", price: "Запросить цену", rating: 4.7, popular: false },
    { id: "unitree-a1", name: "Unitree A1", model: "A1", price: "Запросить цену", rating: 4.5, popular: false }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Робо-собаки</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Четвероногие роботы нового поколения для исследований, образования и промышленного применения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roboticDogs.map((robot) => (
            <Card key={robot.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop" 
                  alt={robot.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {robot.popular && (
                  <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                    Популярный
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
                    Unitree
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{robot.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors">
                  {robot.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-[#1F669D]">
                    {robot.price}
                  </div>
                  <Link to={`/product/robotic-dogs/${robot.id}`}>
                    <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
              Применение робо-собак
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🔬</span>
                </div>
                <h3 className="font-semibold text-[#113C5A] mb-2">Исследования</h3>
                <p className="text-gray-600 text-sm">Научные исследования в области робототехники и ИИ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🎓</span>
                </div>
                <h3 className="font-semibold text-[#113C5A] mb-2">Образование</h3>
                <p className="text-gray-600 text-sm">Обучение студентов основам робототехники</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🏭</span>
                </div>
                <h3 className="font-semibold text-[#113C5A] mb-2">Промышленность</h3>
                <p className="text-gray-600 text-sm">Инспекция и мониторинг производственных объектов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticDogs;
