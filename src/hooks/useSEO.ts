
import { useLocation } from 'react-router-dom';
import { categoryPagesSEO, servicePagesSEO, homePageSEO, productPagesSEO } from '@/data/seoData';
import { SEOData } from '@/types/seo';

export const useSEO = (pageType?: 'category' | 'service' | 'home' | 'product', identifier?: string): SEOData => {
  const location = useLocation();
  
  // If pageType is explicitly provided
  if (pageType === 'home') {
    return homePageSEO;
  }
  
  if (pageType === 'service' && identifier) {
    return servicePagesSEO[identifier] || getDefaultSEO();
  }
  
  if (pageType === 'category' && identifier) {
    const categoryData = categoryPagesSEO.find(cat => cat.categoryId === identifier);
    return categoryData || getDefaultSEO();
  }
  
  if (pageType === 'product' && identifier) {
    return productPagesSEO[identifier] || getDefaultSEO();
  }
  
  // Auto-detect based on current route
  const pathname = location.pathname;
  
  // Home page
  if (pathname === '/') {
    return homePageSEO;
  }
  
  // Product pages
  const productMatch = pathname.match(/^\/product\/[\w-]+\/([\w-]+)$/);
  if (productMatch) {
    const productId = productMatch[1];
    return productPagesSEO[productId] || getDefaultSEO();
  }
  
  // Service pages
  if (pathname === '/about') {
    return servicePagesSEO.about;
  }
  if (pathname === '/contact') {
    return servicePagesSEO.contact;
  }
  if (pathname === '/support') {
    return servicePagesSEO.support;
  }
  
  // Category pages
  const categoryMatch = pathname.match(/^\/([\w-]+)$/);
  if (categoryMatch) {
    const categoryId = categoryMatch[1];
    const categoryData = categoryPagesSEO.find(cat => cat.categoryId === categoryId);
    if (categoryData) {
      return categoryData;
    }
  }
  
  return getDefaultSEO();
};

const getDefaultSEO = (): SEOData => ({
  title: "3D Robots - Поставщик промышленного оборудования",
  description: "Официальный поставщик 3D-принтеров, роботизированных систем и лазерного оборудования.",
  keywords: "3D принтеры, роботы, лазерные станки, промышленное оборудование",
  ogImage: "https://3d-robots.com/images/default-og-image.jpg",
  robots: "index, follow"
});
