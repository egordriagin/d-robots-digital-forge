
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const Scanners3D = () => {
  return (
    <>
      <Helmet>
        <title>3D Сканеры - Высокоточное оборудование для 3D сканирования | 3D Robots</title>
        <meta name="description" content="Купить 3D сканеры для реверс-инжиниринга и контроля качества: SHINING 3D, Artec, Creality. Профессиональные настольные и ручные 3D сканеры. Доставка по России и ЕАЭС." />
        <meta name="keywords" content="3D сканеры, SHINING 3D, Artec, Creality, реверс инжиниринг, контроль качества, 3D сканирование, профессиональные сканеры" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="3D Сканеры - Высокоточное оборудование для 3D сканирования | 3D Robots" />
        <meta property="og:description" content="Купить 3D сканеры для реверс-инжиниринга и контроля качества: SHINING 3D, Artec, Creality. Профессиональные настольные и ручные 3D сканеры." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/3d-scanners-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Сканеры - Высокоточное оборудование для 3D сканирования" />
        <meta name="twitter:description" content="Купить 3D сканеры для реверс-инжиниринга и контроля качества: SHINING 3D, Artec, Creality." />
        <meta name="twitter:image" content="https://3d-robots.com/images/3d-scanners-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="3d-scanners" />
    </>
  );
};

export default Scanners3D;
