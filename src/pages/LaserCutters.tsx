
import { Helmet } from "react-helmet-async";
import { CategoryPage } from "@/components/CategoryPage";

const LaserCutters = () => {
  return (
    <>
      <Helmet>
        <title>Лазерные граверы - Прецизионные лазерные станки для обработки | 3D Robots</title>
        <meta name="description" content="Купить лазерные граверы и станки AtomStack: X7, X20, S10, A5. Прецизионная лазерная резка и гравировка металла, дерева, пластика, кожи. Промышленные и настольные лазерные станки." />
        <meta name="keywords" content="лазерные граверы, лазерные станки, AtomStack, X7, X20, S10, лазерная резка, гравировка, лазерная обработка, промышленные лазеры" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Лазерные граверы - Прецизионные лазерные станки для обработки | 3D Robots" />
        <meta property="og:description" content="Купить лазерные граверы и станки AtomStack: X7, X20, S10, A5. Прецизионная лазерная резка и гравировка металла, дерева, пластика, кожи." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://3d-robots.com/images/laser-cutters-og-image.jpg" />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Лазерные граверы - Прецизионные лазерные станки для обработки" />
        <meta name="twitter:description" content="Купить лазерные граверы и станки AtomStack: X7, X20, S10, A5. Прецизионная лазерная резка и гравировка." />
        <meta name="twitter:image" content="https://3d-robots.com/images/laser-cutters-og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3D Robots" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <CategoryPage category="laser-cutters" />
    </>
  );
};

export default LaserCutters;
