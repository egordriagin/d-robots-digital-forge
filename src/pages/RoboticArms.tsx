
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getProductsByCategory } from "@/data/products";

const RoboticArms = () => {
  usePageTitle("Роботизированные руки");
  
  const roboticArms = getProductsByCategory("robotic-arms");

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Роботизированные руки</h1>
          <p className="text-xl text-gray-600">Промышленные манипуляторы высокой точности для автоматизации производства</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roboticArms.map((arm) => (
            <Card key={arm.id} className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={arm.images[0] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"} 
                  alt={arm.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-white text-[#113C5A]">
                  {arm.type}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D] w-fit">
                  {arm.brand}
                </Badge>
                <CardTitle className="text-[#113C5A] text-lg">{arm.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-[#1F669D]">{arm.basePrice}</span>
                  <Link to={`/product/robotic-arms/${arm.id}`}>
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

export default RoboticArms;
