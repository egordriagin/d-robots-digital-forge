// src/components/CategoryPage.tsx (FINAL)

import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "@/integrations/supabase/api";

import { usePageTitle } from "@/hooks/usePageTitle";
import { CategoryPageHeader } from "@/components/CategoryPageHeader";
import { CategoryPageFilters } from "@/components/CategoryPageFilters";
import { categoryTranslations } from "@/data/categoryTranslations";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/types/product";

interface CategoryPageProps {
  category: string;
  title?: string;
  description?: string;
  pageTitle?: string;
  infoSection?: React.ReactNode;
}

const categoryImages: Record<string, string> = {
  "3d-scanners": "/lovable-uploads/1de61f53-1ad1-486d-a41a-b07677534eec.png",
  // ... other images
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

  const { data: products, isLoading } = useQuery<Product[]>({
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
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-[450px] w-full" />)}
          </div>
        ) : (
          <CategoryPageFilters
            products={filteredProducts}
            category={category}
          />
        )}
        
        {/* ... rest of the component remains the same ... */}
      </div>
    </div>
  );
};
