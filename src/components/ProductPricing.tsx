import { Button } from "@/components/ui/button";
import { Clock, Truck } from "lucide-react";

// **THE FIX:** The 'pricing' prop is an array of objects, not a single object.
interface PricingOption {
  key: string;
  label: string;
  price: string;
}

interface ProductPricingProps {
  pricing: PricingOption[];
  shipping: {
    cost: string;
    freeThreshold: string;
  };
  leadTime: string;
  onRequestOffer: () => void;
  onRequestConsultation: () => void;
}

const ProductPricing = ({ 
  pricing, 
  shipping, 
  leadTime, 
  onRequestOffer, 
  onRequestConsultation 
}: ProductPricingProps) => {
  return (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-lg font-semibold text-[#113C5A] mb-4">Варианты комплектации</h3>
        <div className="space-y-3">
          {pricing.map((option) => (
            <div key={option.key} className="flex justify-between items-center">
              <span className="text-gray-600">{option.label}</span>
              <span className="text-xl font-bold text-[#1F669D]">{option.price}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-300">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>Доставка: {shipping.cost}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Срок: {leadTime}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Бесплатная доставка при заказе от 50 000 ₽
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          size="lg" 
          className="w-full bg-[#3498DB] hover:bg-[#1F669D] text-white"
          onClick={onRequestOffer}
        >
          Запросить коммерческое предложение
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white"
          onClick={onRequestConsultation}
        >
          Получить консультацию
        </Button>
      </div>
    </div>
  );
};

export default ProductPricing;
