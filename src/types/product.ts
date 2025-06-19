
export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductSpecifications {
  printingSpecs: ProductSpecification[];
  technologySpecs: ProductSpecification[];
  hardwareSpecs: ProductSpecification[];
  environmentSpecs: ProductSpecification[];
  advancedFeatures: ProductSpecification[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  images: string[];
  specifications: ProductSpecifications;
}
