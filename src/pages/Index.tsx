
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Zap, Shield, Headphones, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("3D Robots - Технологии цифрового производства");

  // Get featured products from different categories
  const featuredPrinters = getProductsByCategory("3d-printers").slice(0, 2);
  const featuredRobots = getProductsByCategory("humanoid-robots").slice(0, 2);

  const categories = [
    {
      title: "3D Принтеры",
      description: "Профессиональные 3D принтеры для промышленности и образования",
      link: "/3d-printers",
      image: "/lovable-uploads/bambu-x1-carbon-1.jpg",
      badge: "Популярно"
    },
    {
      title: "3D Сканеры",
      description: "Высокоточные 3D сканеры для реверс-инжиниринга",
      link: "/3d-scanners",
      image: "/lovable-uploads/einstar-scanner-1.jpg",
      badge: "Новинка"
    },
    {
      title: "Роботы-собаки",
      description: "Мобильные роботы для патрулирования и исследований",
      link: "/robotic-dogs",
      image: "/lovable-uploads/unitree-go2-1.jpg",
      badge: "Инновация"
    },
    {
      title: "Человекоподобные роботы",
      description: "Гуманоидные роботы для исследований и образования",
      link: "/humanoid-robots",
      image: "/lovable-uploads/unitree-h1-1.jpg",
      badge: "Будущее"
    },
    {
      title: "Роботизированные руки",
      description: "Промышленные манипуляторы для автоматизации",
      link: "/robotic-arms",
      image: "/lovable-uploads/dobot-mg400-1.jpg",
      badge: "Точность"
    },
    {
      title: "Лазерные граверы",
      description: "Прецизионные лазерные станки для обработки",
      link: "/laser-cutters",
      image: "/lovable-uploads/atomstack-x7-1.jpg",
      badge: "Качество"
    }
  ];

  const advantages = [
    {
      icon: <Star className="h-8 w-8 text-[#3498DB]" />,
      title: "Проверенное качество",
      description: "Только сертифицированное оборудование от ведущих мировых производителей"
    },
    {
      icon: <Users className="h-8 w-8 text-[#3498DB]" />,
      title: "Экспертная поддержка",
      description: "Комплексное сопровождение от консультации до послепродажного обслуживания"
    },
    {
      icon: <Zap className="h-8 w-8 text-[#3498DB]" />,
      title: "Быстрая доставка",
      description: "Оперативная поставка оборудования по всей России и странам ЕАЭС"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#3498DB]" />,
      title: "Официальная гарантия",
      description: "Полная гарантия производителя и сервисное обслуживание"
    },
    {
      icon: <Headphones className="h-8 w-8 text-[#3498DB]" />,
      title: "Техподдержка 24/7",
      description: "Круглосуточная техническая поддержка и консультации специалистов"
    },
    {
      icon: <Award className="h-8 w-8 text-[#3498DB]" />,
      title: "Федеральные контракты",
      description: "Участие в государственных закупках и федеральных контрактах"
    }
  ];

  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "3D Robots",
    "legalName": "ООО «Аддитивные Системы и Робототехника»",
    "url": "https://3d-robots.com",
    "logo": "https://3d-robots.com/images/3d-robots-logo.png",
    "description": "Ведущий поставщик решений для цифрового производства: 3D-принтеры, 3D-сканеры, лазерные станки, робототехнические манипуляторы, мобильные роботы и роботы-гуманоиды для промышленных предприятий, образовательных учреждений и научно-исследовательских центров.",
    "slogan": "Технологии цифрового производства",
    "foundingDate": "2025-04-17",
    "founders": [
      {
        "@type": "Person",
        "name": "Макин Владислав Валерьевич"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ковенский пер, д. 9 литера А, помещ. 5-н, 6-н офис 10",
      "addressLocality": "Санкт-Петербург",
      "addressRegion": "Санкт-Петербург",
      "postalCode": "191014",
      "addressCountry": "RU"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+7-967-555-6884",
        "contactType": "customer service",
        "email": "sales@3d-robots.com",
        "availableLanguage": ["Russian", "English"]
      }
    ],
    "sameAs": [
      "https://3d-robots.com"
    ],
    "priceRange": "$$$",
    "paymentAccepted": ["Credit Card", "Bank Transfer", "Government Contract"],
    "currenciesAccepted": "RUB, USD, EUR",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "award": "Участник федеральных контрактов ЕАЭС 2025",
    "areaServed": ["RU", "BY", "KZ", "KG", "AM"]
  };

  return (
    <>
      <Helmet>
        <title>3D Robots - Технологии цифрового производства</title>
        <meta name="description" content="3D Robots - ведущий поставщик 3D-принтеров, 3D-сканеров, роботов и лазерных станков для промышленности и образования. Официальная гарантия, быстрая доставка по России и ЕАЭС." />
        <meta name="keywords" content="3D принтеры, 3D сканеры, роботы, лазерные станки, цифровое производство, промышленное оборудование, робототехника" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="3D Robots - Технологии цифрового производства" />
        <meta property="og:description" content="3D Robots - ведущий поставщик 3D-принтеров, 3D-сканеров, роботов и лазерных станков для промышленности и образования. Официальная гарантия, быстрая доставка по России и ЕАЭС." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/3d-robots-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Robots - Технологии цифрового производства" />
        <meta name="twitter:description" content="3D Robots - ведущий поставщик 3D-принтеров, 3D-сканеров, роботов и лазерных станков для промышленности и образования." />
        <meta name="twitter:image" content="https://3d-robots.com/images/3d-robots-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#113C5A] via-[#1F669D] to-[#3498DB] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Технологии цифрового производства
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Будущее производства <br />
              <span className="text-[#3498DB]">уже здесь</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Поставляем передовое оборудование для 3D-печати, робототехники и автоматизации 
              производства по всей России и странам ЕАЭС
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white">
                Каталог оборудования
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#113C5A] mb-4">
              Каталог оборудования
            </h2>
            <p className="text-xl text-gray-600">
              Широкий выбор современного оборудования для различных отраслей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
                      {category.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#113C5A] group-hover:text-[#3498DB] transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-[#3498DB] font-medium group-hover:text-[#1F669D]">
                      Смотреть категорию
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#113C5A] mb-4">
              Популярное оборудование
            </h2>
            <p className="text-xl text-gray-600">
              Самые востребованные модели с отличными отзывами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPrinters.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                category="3d-printers"
                cardSize="large"
              />
            ))}
            {featuredRobots.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                category="humanoid-robots"
                cardSize="large"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#113C5A] mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Более 1000 довольных клиентов по всей России и ЕАЭС
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-[#113C5A] mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готовы начать цифровую трансформацию?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Получите персональную консультацию по выбору оборудования 
            и расчет стоимости под ваши задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white">
                Связаться с экспертом
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#113C5A]">
              +7 967 555 6884
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
