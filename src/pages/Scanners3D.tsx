
import { CategoryPage } from "@/components/CategoryPage";

const Scanners3D = () => {
  return (
    <CategoryPage
      category="3d-scanners"
      title="3D Сканеры"
      description="Высокоточные 3D сканеры для реверс-инжиниринга, контроля качества и цифровизации объектов"
      pageTitle="3D Сканеры"
      productCardConfig={{
        showPopularBadge: true,
        showTypeBadge: true,
        cardSize: "default"
      }}
    />
  );
};

export default Scanners3D;
