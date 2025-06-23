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
 * Parses a date string in Russian format "DD MMMM YYYY" (e.g., "12 марта 2024") 
 * into a standard 'YYYY-MM-DD' format that new Date() can reliably handle.
 * @param {string} dateString - The date string in Russian format.
 * @returns {string} A date string in 'YYYY-MM-DD' format, or an empty string if parsing fails.
 */
const parseRussianDate = (dateString: string): string => {
    if (!dateString) return '';
    const months: { [key: string]: string } = {
        'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04', 'мая': '05', 'июня': '06',
        'июля': '07', 'августа': '08', 'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
    };
    const parts = dateString.split(' ');
    if (parts.length !== 3) return ''; 

    const day = parts[0].padStart(2, '0');
    const month = months[parts[1].toLowerCase()];
    const year = parts[2];

    if (!day || !month || !year) return ''; 

    return `${year}-${month}-${day}`;
};

/**
 * Generates a meta description for a product page, safely handling undefined product data.
 * @param {Product | null | undefined} product - The product object.
 * @returns {string} The generated meta description.
 */
export const generateMetaDescription = (product: Product | null | undefined): string => {
  if (!product) {
    return 'Загрузка информации о продукте...';
  }

  const features = product.features?.slice(0, 3).join(', ') || 'надежность и качество';
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
  if (!product) {
    return {};
  }

  const firstImage = product.images?.[0] ? `${window.location.origin}${product.images[0]}` : '';
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
    ...(product.rating && product.reviewCount && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating.toString(),
          "reviewCount": product.reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
    }),
    ...(product.reviews && product.reviews.length > 0 && {
        "review": product.reviews.map(review => {
            const formattedDate = parseRussianDate(review.date);
            if (!formattedDate) return null; // Don't render review if date is invalid

            return {
                "@type": "Review",
                "author": { "@type": "Person", "name": review.author },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": review.rating.toString(),
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "reviewBody": stripHtml(review.comment),
                "datePublished": new Date(formattedDate).toISOString().split('T')[0]
            };
        }).filter(Boolean) // Remove any null reviews
    })
  };
};
