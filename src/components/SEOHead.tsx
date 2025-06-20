
import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";

interface SEOHeadProps {
  seoData: SEOData;
}

const SEOHead = ({ seoData }: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
      <meta property="og:site_name" content="3D Robots" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.twitterTitle || seoData.ogTitle || seoData.title} />
      <meta name="twitter:description" content={seoData.twitterDescription || seoData.ogDescription || seoData.description} />
      {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
      {!seoData.twitterImage && seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
      
      {/* Additional SEO tags */}
      <meta name="robots" content={seoData.robots || "index, follow"} />
      <meta name="author" content="3D Robots" />
      {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
      {!seoData.canonical && <link rel="canonical" href={window.location.href} />}
    </Helmet>
  );
};

export default SEOHead;
