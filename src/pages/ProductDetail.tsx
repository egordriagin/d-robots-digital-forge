import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "@/integrations/supabase/api";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductPricing from "@/components/ProductPricing";
import ProductTabs from "@/components/ProductTabs";
import { useMetaData } from "@/hooks/useMetaData";
import { pluralizeRating } from "@/utils/pluralization";
import { generateProductStructuredData, generateMetaDescription } from "@/utils/structuredData";
import { Product } from "@/types/product";

const ProductDetail = () => {
  const { category, id: slug } = useParams<{ category: string; id: string }>();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const { data: product, isLoading, isError } = useQuery<Product | null>({
    queryKey: ['product', slug],
    queryFn: () => fetchProductBySlug(slug!),
    enabled: !!slug,
  });

  console.log("Product Data:", product); // <--- ADD THIS LINE


  const getCategoryName = (cat: string | undefined) => {
    const categoryNames: { [key: string]: string } = {
      '3d-printers': '3D Принтеры',
      '3d-scanners': '3D Сканеры',
      'robotic-dogs': 'Роботы-собаки',
      'humanoid-robots': 'Человекоподобные роботы',
      'robotic-arms': 'Роботизированные руки',
      'laser-cutters': 'Лазерные граверы'
    };
    return categoryNames[cat || ''] || cat;
  };

  // **THE FIX:** Call hooks at the top level, but make the data passed to them conditional.
  useMetaData(
    product ? `${product.name} - ${getCategoryName(category)}` : "Загрузка...",
    product ? generateMetaDescription(product) : "Загрузка информации о продукте..."
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <Skeleton className="w-full h-96" />
            <div className="flex space-x-2"><Skeleton className="w-20 h-20" /><Skeleton className="w-20 h-20" /><Skeleton className="w-20 h-20" /></div>
          </div>
          <div className="space-y-6"><Skeleton className="h-6 w-1/4" /><Skeleton className="h-10 w-3/4" /><Skeleton className="h-20 w-full" /><Skeleton className="h-48 w-full" /></div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Продукт не найден</h1>
          <p className="text-xl text-gray-600 mb-8">Запрашиваемый продукт не существует или произошла ошибка при загрузке.</p>
          <Link to="/"><Button className="bg-[#3498DB] hover:bg-[#1F669D] text-white">Вернуться на главную</Button></Link>
        </div>
      </div>
    );
  }

  // From here on, `product` is guaranteed to exist.
  const currentUrl = `${window.location.origin}/product/${category}/${slug}`;
  const structuredData = generateProductStructuredData(product, category || '', currentUrl);

  return (
    <>
      <Helmet><script type="application/ld+json">{JSON.stringify(structuredData)}</script></Helmet>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
              <span>/</span>
              <Link to={`/${category}`} className="hover:text-[#3498DB]">{getCategoryName(category)}</Link>
              <span>/</span>
              <span className="text-[#113C5A] font-medium">{product.name}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ProductImageGallery images={product.images as string[]} productName={product.name} isPopular={product.popular} stockStatus={product.stockStatus} />
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 text-[#1F669D] border-[#1F669D]" variant="outline">{product.brand}</Badge>
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
              <ProductPricing pricing={product.pricing} shipping={product.shipping} leadTime={product.leadTime} onRequestOffer={() => setShowOfferForm(true)} onRequestConsultation={() => setShowConsultationForm(true)} />
            </div>
          </div>
          <div className="mb-16"><ProductTabs product={product} /></div>
          <div className="text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Заинтересованы в этом продукте?</h2>
            <p className="text-xl mb-8 text-gray-200">Получите персональное коммерческое предложение с лучшими условиями</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white" onClick={() => setShowContactForm(true)}>Связаться с нами</Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]" onClick={() => setShowConsultationForm(true)}>Получить консультацию</Button>
            </div>
          </div>
        </div>
        {showOfferForm && <CommercialOfferForm productName={product.name} onClose={() => setShowOfferForm(false)} />}
        {showConsultationForm && <ConsultationForm productName={product.name} onClose={() => setShowConsultationForm(false)} />}
        {showContactForm && <ContactForm productName={product.name} onClose={() => setShowContactForm(false)} />}
      </div>
    </>
  );
};

export default ProductDetail;
