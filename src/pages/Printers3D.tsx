
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const Printers3D = () => {
  return (
    <>
      <Helmet>
        <title>3D Принтеры - Профессиональное оборудование для 3D печати | 3D Robots</title>
        <meta name="description" content="Купить 3D принтеры от ведущих производителей: Bambu Lab, Creality, Ultimaker. Профессиональные FDM и SLA принтеры для промышленности и образования. Доставка по России и ЕАЭС." />
        <meta name="keywords" content="3D принтеры, FDM принтеры, SLA принтеры, Bambu Lab, Creality, профессиональная 3D печать, промышленные принтеры" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="3D Принтеры - Профессиональное оборудование для 3D печати | 3D Robots" />
        <meta property="og:description" content="Купить 3D принтеры от ведущих производителей: Bambu Lab, Creality, Ultimaker. Профессиональные FDM и SLA принтеры для промышленности и образования." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/3d-printers-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Принтеры - Профессиональное оборудование для 3D печати" />
        <meta name="twitter:description" content="Купить 3D принтеры от ведущих производителей: Bambu Lab, Creality, Ultimaker. Профессиональные FDM и SLA принтеры." />
        <meta name="twitter:image" content="https://3d-robots.com/images/3d-printers-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="3d-printers" />
    </>
  );
};

export default Printers3D;
