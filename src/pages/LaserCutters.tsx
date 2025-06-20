
import { CategoryPage } from "@/components/CategoryPage";

const LaserCutters = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Преимущества лазерных станков
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Высокая точность резки и гравировки с минимальными допусками</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Быстрая обработка материалов для серийного производства</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Работа с различными материалами и сложными формами</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Автоматизированные процессы для повышения производительности</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="Laser Cutting"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="laser-cutters"
      title="Лазерные станки"
      description="Высокоточная лазерная резка и гравировка для творчества и производства"
      pageTitle="Лазерные станки"
      infoSection={infoSection}
    />
  );
};

export default LaserCutters;
