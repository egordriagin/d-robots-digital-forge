
import { CategoryPage } from "@/components/CategoryPage";

const LaserCutters = () => {
  return (
    <CategoryPage
      category="laser-cutters"
      title="Лазерные станки"
      description="Высокоточная лазерная резка и гравировка для творчества и производства"
      pageTitle="Лазерные станки"
      productCardConfig={{
        showPopularBadge: true,
        showPowerBadge: true,
        cardSize: "default"
      }}
    />
  );
};

export default LaserCutters;
