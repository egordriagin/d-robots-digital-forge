
import { CategoryPage } from "@/components/CategoryPage";

const RoboticArms = () => {
  return (
    <CategoryPage
      category="robotic-arms"
      title="Роботизированные руки"
      description="Промышленные манипуляторы высокой точности для автоматизации производства"
      pageTitle="Роботизированные руки"
      productCardConfig={{
        showPopularBadge: true,
        showTypeBadge: true,
        cardSize: "default"
      }}
    />
  );
};

export default RoboticArms;
