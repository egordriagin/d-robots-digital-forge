
import { CategoryPage } from "@/components/CategoryPage";

const LaserCutters = () => {
  const infoSection = (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Преимущества лазерных станков
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Высокая точность</h3>
            <p className="text-gray-600 text-sm">Прецизионная резка и гравировка с минимальными допусками</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Высокая скорость</h3>
            <p className="text-gray-600 text-sm">Быстрая обработка материалов для серийного производства</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🎯</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Универсальность</h3>
            <p className="text-gray-600 text-sm">Работа с различными материалами и сложными формами</p>
          </div>
        </div>
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
