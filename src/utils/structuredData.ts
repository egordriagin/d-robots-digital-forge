import { Product } from '@/types/product';

/**
 * Strips HTML tags from a string, returning an empty string if input is null/undefined.
 * @param {string | null | undefined} html - The string to sanitize.
 * @returns {string} The sanitized string.
 */
const stripHtml = (html: string | null | undefined): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};

/**
 * Generates a meta description for a product page, safely handling undefined product data.
 * @param {Product | null | undefined} product - The product object.
 * @returns {string} The generated meta description.
 */
export const generateMetaDescription = (product: Product | null | undefined): string => {
  // Return a default description if product data is not yet available.
  if (!product) {
    return 'Загрузка информации о продукте...';
  }

  const features = product.features?.slice(0, 3).join(', ') || 'надежность и качество';
  // Safely access the first price option.
  const priceInfo = product.pricing?.[0]?.price ? `Цена от ${product.pricing[0].price}.` : '';

  return `${product.name} от ${product.brand} - ${stripHtml(product.shortDescription)} Основные функции: ${features}. ${priceInfo} Доставка по России.`;
};

/**
 * Generates JSON-LD structured data for a product, safely handling undefined product data.
 * @param {Product | null | undefined} product - The product object.
 * @param {string} category - The product's category name.
 * @param {string} currentUrl - The current page URL.
 * @returns {object} The structured data object for JSON-LD.
 */
export const generateProductStructuredData = (product: Product | null | undefined, category: string, currentUrl: string) => {
  // Return an empty object if product data is not yet available.
  if (!product) {
    return {};
  }

  // Safely get the first image, or return an empty string.
  const firstImage = product.images?.[0] ? `${window.location.origin}${product.images[0]}` : '';
  
  // Safely get the base price, or default to '0'.
  const basePrice = product.pricing?.[0]?.price?.replace(/[^\d.-]/g, '') || '0';

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": firstImage,
    "description": stripHtml(product.shortDescription),
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": "RUB",
      "price": parseFloat(basePrice),
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stockStatus === "in-stock" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "3D Robots",
        "legalName": "ООО «Аддитивные Системы и Робототехника»",
        "url": "https://3d-robots.com",
        "logo": "https://3d-robots.com/images/3d-robots-logo.png"
      }
    },
    // Only include aggregateRating if rating and reviewCount exist.
    ...(product.rating && product.reviewCount && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating.toString(),
          "reviewCount": product.reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
    }),
    // Only include reviews if the reviews array exists and is not empty.
    ...(product.reviews && product.reviews.length > 0 && {
        "review": product.reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": stripHtml(review.comment),
          "datePublished": new Date(review.date).toISOString().split('T')[0] // Format date to YYYY-MM-DD
        }))
    })
  };
};
