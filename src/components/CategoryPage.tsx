import React from "react";
import { useSearchParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ProductCard } from "@/components/ProductCard";
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

export const CategoryPage = ({ 
  category, 
  title, 
  description, 
  pageTitle, 
  infoSection 
}: CategoryPageProps) => {
  usePageTitle(pageTitle || title || category);

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
      <CategoryPageHeader 
        title={displayTitle}
        description={displayDescription}
      />
      
      <main className="container mx-auto px-4 py-8">
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
                      src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
                      alt={displayTitle}
                      className="rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};
