import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    name: "Bambu Lab X1E",
    brand: "Bambu Lab",
    price: "Запросить цену",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    description: "Профессиональный 3D принтер с автоматической системой смены материалов и высокой точностью печати.",
    features: [
      "Автоматическая калибровка",
      "Система смены материалов",
      "Высокая скорость печати",
      "Точность до 0.1 мм",
      "Закрытая камера печати"
    ],
    specifications: {
      "Технология печати": "FDM",
      "Область печати": "256 × 256 × 256 мм",
      "Точность": "±0.1 мм",
      "Поддерживаемые материалы": "PLA, ABS, PETG, TPU, PA",
      "Скорость печати": "до 500 мм/с"
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
            <span>/</span>
            <Link to={`/${category}`} className="hover:text-[#3498DB] capitalize">
              {category?.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-[#113C5A] font-medium">{product.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                Популярный
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 text-[#1F669D] border-[#1F669D]" variant="outline">
                {product.brand}
              </Badge>
              <h1 className="text-3xl font-bold text-[#113C5A] mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">В наличии</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-3xl font-bold text-[#1F669D] mb-6">{product.price}</div>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#3498DB] hover:bg-[#1F669D] text-white"
                  onClick={() => setShowOfferForm(true)}
                >
                  Запросить коммерческое предложение
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Получить консультацию
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-[#113C5A] mb-4">Ключевые особенности</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#113C5A]">Технические характеристики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-[#1F669D]">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Заинтересованы в этом продукте?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Получите персональное коммерческое предложение
          </p>
          <Button 
            size="lg" 
            className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white"
            onClick={() => setShowContactForm(true)}
          >
            Связаться с нами
          </Button>
        </div>
      </div>

      {/* Commercial Offer Form Modal */}
      {showOfferForm && (
        <CommercialOfferForm
          productName={product.name}
          onClose={() => setShowOfferForm(false)}
        />
      )}

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <ConsultationForm
          productName={product.name}
          onClose={() => setShowConsultationForm(false)}
        />
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          productName={product.name}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
