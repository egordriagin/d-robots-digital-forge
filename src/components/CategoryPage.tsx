
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { CategoryPageFilters } from "./CategoryPageFilters";
import { CategoryPageHeader } from "./CategoryPageHeader";

interface CategoryPageProps {
  category: string;
  title: string;
  description: string;
  pageTitle: string;
  infoSection?: React.ReactNode;
}

export const CategoryPage = ({
  category,
  title,
  description,
  pageTitle,
  infoSection
}: CategoryPageProps) => {
  usePageTitle(pageTitle);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const products = getProductsByCategory(category);

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "brand") return a.brand.localeCompare(b.brand);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <CategoryPageHeader title={title} description={description} />
          
          {/* Filters */}
          <CategoryPageFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Products Grid - Standardized layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
              showPopularBadge={true}
              showTypeBadge={true}
              showPowerBadge={false}
              cardSize="default"
            />
          ))}
        </div>

        {/* Info Section - Now included for all categories */}
        {infoSection && (
          <div className="mt-16">
            {infoSection}
          </div>
        )}

        {/* CTA - Now included for all categories */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-[#113C5A] mb-4">
            Нужна помощь в выборе?
          </h3>
          <p className="text-gray-600 mb-6">
            Наши эксперты помогут подобрать оптимальное решение для ваших задач
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#3498DB] hover:bg-[#1F669D] text-white px-8 py-3">
              Получить консультацию
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
