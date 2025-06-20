
import { Product } from "@/types/product";

export const generateProductStructuredData = (
  product: Product, 
  category: string, 
  currentUrl: string
) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.shortDescription,
    "sku": product.id,
    "mpn": product.id,
    
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": ["RU", "BY", "KZ", "KG", "AM"],
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14,
      "returnMethod": "https://schema.org/ReturnBySpecialArrangement",
      "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility"
    },
    
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": "14",
        "maxValue": "21",
        "unitCode": "DAY"
      }
    },
    
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": parseFloat(product.shipping.cost.replace(/[^\d.-]/g, '')) || 0,
        "currency": "RUB"
      },
      "deliveryTime": product.leadTime
    },
    
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": "RUB",
      "price": parseFloat(product.pricing.base.replace(/[^\d.-]/g, '')) || 0,
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
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    
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
      "reviewBody": review.comment,
      "datePublished": review.date
    }))
  };
};

export const generateMetaDescription = (product: Product): string => {
  const features = product.features.slice(0, 3).join(', ');
  return `${product.name} от ${product.brand} - ${product.shortDescription} Основные функции: ${features}. Цена от ${product.pricing.base}. Доставка по России.`;
};
