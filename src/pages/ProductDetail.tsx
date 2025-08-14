// src/pages/ProductDetail.tsx

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "@/integrations/supabase/api";
import type { Product } from "@/types/product";

// UI Components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

// Child Components
import CommercialOfferForm from "@/components/CommercialOfferForm";
import ConsultationForm from "@/components/ConsultationForm";
import ContactForm from "@/components/ContactForm";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductPricing from "@/components/ProductPricing";
import ProductTabs from "@/components/ProductTabs";

// Hooks and Utils
import { useMetaData } from "@/hooks/useMetaData";
import { pluralizeRating } from "@/utils/pluralization";
import { generateProductStructuredData, generateMetaDescription } from "@/utils/structuredData";

/**
 * A map to convert category slugs into human-readable names.
 */
const categoryDisplayNames: Record<string, string> = {
    '3d-printers': '3D Принтеры',
    '3d-scanners': '3D Сканеры',
    'robotic-dogs': 'Роботы-собаки',
    'humanoid-robots': 'Человекоподобные роботы',
    'robotic-arms': 'Роботизированные руки',
    'laser-cutters': 'Лазерные граверы'
};

const getCategoryName = (slug: string = '') => categoryDisplayNames[slug] || slug;

/**
 * ProductDetailView Component
 * This component is responsible for rendering the UI of the product details.
 * It only renders when the `product` data has been successfully fetched.
 */
const ProductDetailView = ({ product, category, slug }: { product: Product; category: string; slug: string }) => {
    const [showOfferForm, setShowOfferForm] = useState(false);
    const [showConsultationForm, setShowConsultationForm] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);

    // Set page metadata and structured data for SEO
    useMetaData(
        `${product.name} - ${getCategoryName(category)}`,
        generateMetaDescription(product)
    );
    const currentUrl = `${window.location.origin}/product/${category}/${slug}`;
    const structuredData = generateProductStructuredData(product, category, currentUrl);

    return (
        <>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>
            <div className="min-h-screen py-8">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs Navigation */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link to="/" className="hover:text-[#3498DB]">Главная</Link>
                            <span>/</span>
                            <Link to={`/${category}`} className="hover:text-[#3498DB]">{getCategoryName(category)}</Link>
                            <span>/</span>
                            <span className="text-[#113C5A] font-medium">{product.name}</span>
                        </div>
                    </div>

                    {/* Main Product Section */}
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

                    {/* Product Tabs for detailed info */}
                    <div className="mb-16">
                        <ProductTabs product={product} />
                    </div>

                    {/* Call to Action Section */}
                    <div className="text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">Заинтересованы в этом продукте?</h2>
                        <p className="text-xl mb-8 text-gray-200">Получите персональное коммерческое предложение с лучшими условиями</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white" onClick={() => setShowContactForm(true)}>Связаться с нами</Button>
                            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]" onClick={() => setShowConsultationForm(true)}>Получить консультацию</Button>
                        </div>
                    </div>
                </div>

                {/* Modal Forms */}
                {showOfferForm && <CommercialOfferForm productName={product.name} onClose={() => setShowOfferForm(false)} />}
                {showConsultationForm && <ConsultationForm productName={product.name} onClose={() => setShowConsultationForm(false)} />}
                {showContactForm && <ContactForm productName={product.name} onClose={() => setShowContactForm(false)} />}
            </div>
        </>
    );
};

/**
 * Loading Skeleton Component
 * Displays a placeholder UI while the product data is being fetched.
 */
const ProductDetailLoading = () => (
    <div className="container mx-auto px-4 py-8 animate-pulse">
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
                <Skeleton className="w-full h-96" />
                <div className="flex space-x-2">
                    <Skeleton className="w-20 h-20" />
                    <Skeleton className="w-20 h-20" />
                    <Skeleton className="w-20 h-20" />
                </div>
            </div>
            <div className="space-y-6">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-48 w-full" />
            </div>
        </div>
    </div>
);

/**
 * Error Component
 * Displays a user-friendly error message if the product fails to load.
 */
const ProductDetailError = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Продукт не найден</h1>
            <p className="text-xl text-gray-600 mb-8">Запрашиваемый продукт не существует или произошла ошибка при загрузке.</p>
            <Link to="/">
                <Button className="bg-[#3498DB] hover:bg-[#1F669D] text-white">Вернуться на главную</Button>
            </Link>
        </div>
    </div>
);


/**
 * ProductDetail Page Container
 * This is the main component for the page. It handles data fetching,
 * loading, and error states, and then renders the appropriate view.
 */
const ProductDetail = () => {
    // The route should be `/product/:category/:slug`
    const { category, slug } = useParams<{ category: string; slug: string }>();

    const { data: product, isLoading, isError } = useQuery({
        // The query key now includes both category and slug to ensure it's unique
        // for each product page, preventing data conflicts in the cache.
        queryKey: ['product', category, slug],

        // The query function now correctly passes both `slug` and `category`
        // to the data fetching API.
        queryFn: () => fetchProductBySlug(slug!, category!),

        // The query will only run if both `slug` and `category` are present in the URL.
        enabled: !!slug && !!category,
    });

    if (isLoading) {
        return <ProductDetailLoading />;
    }

    if (isError || !product) {
        return <ProductDetailError />;
    }

    // Once data is successfully loaded, render the view component with all required props.
    return <ProductDetailView product={product} category={category!} slug={slug!} />;
};

export default ProductDetail;
