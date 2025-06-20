
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  isPopular?: boolean;
  stockStatus: "in-stock" | "out-of-stock" | "backorder" | "discontinued" | "pre-order";
}

const ProductImageGallery = ({ images, productName, isPopular, stockStatus }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={images[selectedImage]} 
          alt={productName}
          className="w-full h-96 object-cover"
        />
        {isPopular && (
          <Badge className="absolute top-4 left-4 bg-[#3498DB] text-white">
            Популярный
          </Badge>
        )}
        {stockStatus === "in-stock" && (
          <Badge className="absolute top-4 right-4 bg-green-500 text-white">
            В наличии
          </Badge>
        )}
      </div>
      
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-[#3498DB]' : 'border-gray-200'
            }`}
          >
            <img src={image} alt={`${productName} ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
