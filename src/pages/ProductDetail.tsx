
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductPricing from "@/components/ProductPricing";
import ProductTabs from "@/components/ProductTabs";
import { useMetaData } from "@/hooks/useMetaData";
import { getProduct } from "@/data/products";
import { pluralizeRating } from "@/utils/pluralization";
import { generateProductStructuredData, generateMetaDescription } from "@/utils/structuredData";
import { ProductSchema } from "@/schemas/productSchema";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Get product data
  const product = getProduct(id || '');

  // Category name translations
  const getCategoryName = (category: string | undefined) => {
    const categoryNames: { [key: string]: string } = {
      '3d-printers': '3D Принтеры',
      '3d-scanners': '3D Сканеры',
      'robotic-dogs': 'Роботы-собаки',
      'humanoid-robots': 'Человекоподобные роботы',
      'robotic-arms': 'Роботизированные руки',
      'laser-cutters': 'Лазерные граверы'
    };
    return categoryNames[category || ''] || category;
  };

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Продукт не найден</h1>
          <p className="text-xl text-gray-600 mb-8">
            Запрашиваемый продукт не существует или был удален.
          </p>
          <Link to="/">
            <Button className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Validate product data
  try {
    ProductSchema.parse(product);
  } catch (error) {
    console.warn('Product validation failed:', error);
  }

  // Generate dynamic meta data
  const pageTitle = `${product.name} - ${getCategoryName(category)}`;
  const metaDescription = generateMetaDescription(product);
  
  // Use dynamic meta data
  useMetaData(pageTitle, metaDescription);

  // Generate structured data
  const currentUrl = `${window.location.origin}/product/${category}/${id}`;
  const structuredData = generateProductStructuredData(product, category || '', currentUrl);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
              <span>/</span>
              <Link to={`/${category}`} className="hover:text-[#3498DB]">
                {getCategoryName(category)}
              </Link>
              <span>/</span>
              <span className="text-[#113C5A] font-medium">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              isPopular={product.popular}
              stockStatus={product.stockStatus}
            />

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
                    <span className="text-gray-500">({pluralizeRating(product.reviewCount)})</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{product.shortDescription}</p>
              </div>

              {/* Pricing Component */}
              <ProductPricing
                pricing={product.pricing}
                shipping={product.shipping}
                leadTime={product.leadTime}
                onRequestOffer={() => setShowOfferForm(true)}
                onRequestConsultation={() => setShowConsultationForm(true)}
              />
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mb-16">
            <ProductTabs product={product} />
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Заинтересованы в этом продукте?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Получите персональное коммерческое предложение с лучшими условиями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white"
                onClick={() => setShowContactForm(true)}
              >
                Связаться с нами
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]"
                onClick={() => setShowConsultationForm(true)}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        {/* Form Modals */}
        {showOfferForm && (
          <CommercialOfferForm
            productName={product.name}
            onClose={() => setShowOfferForm(false)}
          />
        )}

        {showConsultationForm && (
          <ConsultationForm
            productName={product.name}
            onClose={() => setShowConsultationForm(false)}
          />
        )}

        {showContactForm && (
          <ContactForm
            productName={product.name}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetail;
