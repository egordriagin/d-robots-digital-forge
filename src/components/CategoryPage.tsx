
import React from "react";
import { useSearchParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { CategoryPageHeader } from "@/components/CategoryPageHeader";
import { CategoryPageFilters } from "@/components/CategoryPageFilters";
import { products as productList } from "@/data/products";
import { categoryTranslations } from "@/data/categoryTranslations";

interface CategoryPageProps {
  category: string;
  title?: string;
  description?: string;
  pageTitle?: string;
  infoSection?: React.ReactNode;
}

// Category image mapping
const categoryImages: Record<string, string> = {
  "3d-scanners": "/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png",
  "robotic-dogs": "/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png",
  "humanoid-robots": "/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png",
  "robotic-arms": "/lovable-uploads/0d3b1654-814f-455b-a2b3-0d3f3432c2c9.png",
  "laser-cutters": "/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png",
  "3d-printers": "/lovable-uploads/6e6dfb31-5bb2-47de-ac80-62b214a5108c.png"
};

export const CategoryPage = ({ 
  category, 
  title, 
  description, 
  pageTitle, 
  infoSection 
}: CategoryPageProps) => {
  const [searchParams] = useSearchParams();
  const brandFilter = searchParams.get("brand");

  const products = productList.filter((product) => {
    if (product.category !== category) {
      return false;
    }

    if (brandFilter && product.brand !== brandFilter) {
      return false;
    }

    return true;
  });

  // Get translations for the category, with fallbacks to props
  const translations = categoryTranslations[category as keyof typeof categoryTranslations];
  const displayTitle = title || translations?.title || category;
  const displayDescription = description || translations?.description || "";
  const displayPageTitle = pageTitle || translations?.pageTitle || displayTitle;

  usePageTitle(displayPageTitle);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <CategoryPageHeader 
            title={displayTitle}
            description={displayDescription}
          />
        </div>
        
        <CategoryPageFilters
          products={products}
          category={category}
        />
        
        {/* Info section */}
        <div className="mt-16">
          {infoSection || (
            /* Default info section using translations */
            translations && (
              <div className="bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
                      {translations.infoTitle}
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                      {translations.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <img 
                      src={categoryImages[category] || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"}
                      alt={displayTitle}
                      className="rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
