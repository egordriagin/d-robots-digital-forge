
import { CategoryPage } from "@/components/CategoryPage";

const HumanoidRobots = () => {
  return (
    <CategoryPage
      category="humanoid-robots"
      title="Роботы-гуманоиды"
      description="Передовые человекоподобные роботы для исследований и разработки"
      pageTitle="Роботы-гуманоиды"
      gridCols="grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      productCardConfig={{
        showPopularBadge: true,
        showTypeBadge: false,
        cardSize: "large"
      }}
    />
  );
};

export default HumanoidRobots;
