
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    images: string[];
    rating: number;
    pricing?: {
      base: string;
    };
    basePrice?: string;
    popular?: boolean;
    type?: string;
    power?: string;
    shortDescription?: string;
    inStock?: boolean;
    leadTime?: string;
  };
  category: string;
  showPopularBadge?: boolean;
  showTypeBadge?: boolean;
  showPowerBadge?: boolean;
  cardSize?: "default" | "large";
}

export const ProductCard = ({ 
  product, 
  category, 
  showPopularBadge = true,
  showTypeBadge = true,
  showPowerBadge = false,
  cardSize = "default"
}: ProductCardProps) => {
  const price = product.pricing?.base || product.basePrice;
  const imageHeight = cardSize === "large" ? "h-64" : "h-48";

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className={`w-full ${imageHeight} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        
        {showPopularBadge && product.popular && (
          <Badge className="absolute top-3 left-3 bg-[#3498DB] text-white">
            Популярный
          </Badge>
        )}
        
        {showPowerBadge && product.power && (
          <Badge className="absolute top-3 right-3 bg-[#3498DB] text-white">
            {product.power}
          </Badge>
        )}
        
        {showTypeBadge && product.type && (
          <Badge className="absolute top-3 right-3 bg-white text-[#113C5A]">
            {product.type}
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs text-[#1F669D] border-[#1F669D]">
            {product.brand}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors text-lg">
          {product.name}
        </CardTitle>
        {product.shortDescription && (
          <p className="text-gray-600 text-sm">{product.shortDescription}</p>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-[#1F669D]">
            {price}
          </div>
          <Link to={`/product/${category}/${product.id}`}>
            <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
              Подробнее
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
