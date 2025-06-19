import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useProductData } from '@/hooks/useProductData';
import ProductSpecifications from '@/components/ProductSpecifications';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useProductData(productId || '');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  usePageTitle(product?.name || 'Продукт не найден');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Продукт не найден</h1>
          <p className="text-gray-600">К сожалению, запрашиваемый продукт не найден.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[#1F669D]">
            Lovable
          </a>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-[#1F669D]">Главная</a>
          <span>/</span>
          <a href="/3d-printers" className="hover:text-[#1F669D]">3D принтеры</a>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImageIndex === index ? 'border-[#1F669D]' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">В наличии</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(24 отзыва)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#1F669D]">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Ключевые особенности:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#1F669D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1 bg-[#1F669D] hover:bg-[#113C5A] text-white">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Добавить в корзину
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <ProductSpecifications specifications={product.specifications} />
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
