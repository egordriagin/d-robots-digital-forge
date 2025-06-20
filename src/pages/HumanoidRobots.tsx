
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const HumanoidRobots = () => {
  return (
    <>
      <Helmet>
        <title>Человекоподобные роботы - Гуманоидные роботы для исследований | 3D Robots</title>
        <meta name="description" content="Купить человекоподобных роботов Unitree H1, H1_2. Гуманоидные роботы для исследований, образования и разработки ИИ. Полноразмерные роботы с развитой моторикой и системами ИИ." />
        <meta name="keywords" content="человекоподобные роботы, гуманоидные роботы, Unitree H1, исследования, ИИ, образование, андроиды, антропоморфные роботы" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Человекоподобные роботы - Гуманоидные роботы для исследований | 3D Robots" />
        <meta property="og:description" content="Купить человекоподобных роботов Unitree H1, H1_2. Гуманоидные роботы для исследований, образования и разработки ИИ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/humanoid-robots-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Человекоподобные роботы - Гуманоидные роботы для исследований" />
        <meta name="twitter:description" content="Купить человекоподобных роботов Unitree H1, H1_2. Гуманоидные роботы для исследований, образования и разработки ИИ." />
        <meta name="twitter:image" content="https://3d-robots.com/images/humanoid-robots-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="humanoid-robots" />
    </>
  );
};

export default HumanoidRobots;
