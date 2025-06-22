// src/components/CategoryPage.tsx (UPDATED)

import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "@/integrations/supabase/api";

import { usePageTitle } from "@/hooks/usePageTitle";
import { CategoryPageHeader } from "@/components/CategoryPageHeader";
import { CategoryPageFilters } from "@/components/CategoryPageFilters";
import { categoryTranslations } from "@/data/categoryTranslations";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryPageProps {
  category: string;
  title?: string;
  description?: string;
  pageTitle?: string;
  infoSection?: React.ReactNode;
}

const categoryImages: Record<string, string> = {
  "3d-scanners": "/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png",
  "robotic-dogs": "/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png",
  "humanoid-robots": "/lovable-uploads/41ac80d3-ba89-4629-a422-78b19d9dad72.png",
  "robotic-arms": "/lovable-uploads/0d3b1654-814f-455b-a2b3-0d3f3432c2c9.png",
  "laser-cutters": "/lovable-uploads/c085e403-6e29-4db3-a0b2-026f5b51ed38.png",
  "3d-printers": "/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
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

  // --- NEW: Fetch products list from Supabase ---
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProductsByCategory(category),
  });

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];
    if (brandFilter) {
      return products.filter(product => product.brand === brandFilter);
    }
    return products;
  }, [products, brandFilter]);

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
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-96 w-full" />)}
          </div>
        ) : (
          <CategoryPageFilters
            products={filteredProducts}
            category={category}
          />
        )}
        
        <div className="mt-16">
          {infoSection || (
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
                      src={categoryImages[category]}
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
