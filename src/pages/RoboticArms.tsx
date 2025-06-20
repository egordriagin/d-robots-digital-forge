
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const RoboticArms = () => {
  return (
    <>
      <Helmet>
        <title>Роботизированные руки - Промышленные манипуляторы для автоматизации | 3D Robots</title>
        <meta name="description" content="Купить роботизированные руки и манипуляторы Dobot: MG400, CR3, Nova2, M1Pro. Промышленные роботы для автоматизации производства, сборки, паллетирования и точных операций." />
        <meta name="keywords" content="роботизированные руки, манипуляторы, Dobot, MG400, CR3, Nova2, промышленные роботы, автоматизация, кобот, коллаборативные роботы" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Роботизированные руки - Промышленные манипуляторы для автоматизации | 3D Robots" />
        <meta property="og:description" content="Купить роботизированные руки и манипуляторы Dobot: MG400, CR3, Nova2, M1Pro. Промышленные роботы для автоматизации производства." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/robotic-arms-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Роботизированные руки - Промышленные манипуляторы для автоматизации" />
        <meta name="twitter:description" content="Купить роботизированные руки и манипуляторы Dobot: MG400, CR3, Nova2, M1Pro. Промышленные роботы для автоматизации производства." />
        <meta name="twitter:image" content="https://3d-robots.com/images/robotic-arms-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="robotic-arms" />
    </>
  );
};

export default RoboticArms;
