
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const RoboticDogs = () => {
  return (
    <>
      <Helmet>
        <title>Роботы-собаки - Мобильные роботы для патрулирования и исследований | 3D Robots</title>
        <meta name="description" content="Купить роботов-собак Unitree: Go2, B2, A1. Мобильные четвероногие роботы для патрулирования, охраны, исследований и образования. Автономная навигация, ИИ, камеры высокого разрешения." />
        <meta name="keywords" content="роботы собаки, Unitree, Go2, B2, A1, мобильные роботы, патрулирование, охрана, четвероногие роботы, автономная навигация" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Роботы-собаки - Мобильные роботы для патрулирования и исследований | 3D Robots" />
        <meta property="og:description" content="Купить роботов-собак Unitree: Go2, B2, A1. Мобильные четвероногие роботы для патрулирования, охраны, исследований и образования." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/robotic-dogs-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Роботы-собаки - Мобильные роботы для патрулирования" />
        <meta name="twitter:description" content="Купить роботов-собак Unitree: Go2, B2, A1. Мобильные четвероногие роботы для патрулирования, охраны, исследований." />
        <meta name="twitter:image" content="https://3d-robots.com/images/robotic-dogs-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="robotic-dogs" />
    </>
  );
};

export default RoboticDogs;
