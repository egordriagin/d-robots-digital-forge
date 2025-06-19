
import { Card, CardContent } from './ui/card';
import { ProductSpecifications as ProductSpecsType } from '../types/product';

interface ProductSpecificationsProps {
  specifications: ProductSpecsType;
}

const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
  const renderSpecSection = (title: string, specs: Array<{ label: string; value: string }>) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-[#113C5A] mb-4">{title}</h4>
      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <span className="font-medium text-[#1F669D]">{spec.label}:</span>
            <span className="text-gray-700 text-right max-w-xs">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики</h3>
        <div className="space-y-6">
          {renderSpecSection('Характеристики печати', [
            ...specifications.printingSpecs
          ])}
          {renderSpecSection('Технология и материалы', [
            ...specifications.technologySpecs
          ])}
          {renderSpecSection('Аппаратные характеристики', [
            ...specifications.hardwareSpecs
          ])}
          {renderSpecSection('Требования к среде эксплуатации и питанию', [
            ...specifications.environmentSpecs
          ])}
          {renderSpecSection('Расширенные функции', [
            ...specifications.advancedFeatures
          ])}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSpecifications;
