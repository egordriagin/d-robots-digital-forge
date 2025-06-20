
import { CategoryPage } from "@/components/CategoryPage";

const RoboticArms = () => {
  const infoSection = (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Применение роботизированных рук
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🏭</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Производство</h3>
            <p className="text-gray-600 text-sm">Автоматизация сборочных линий и производственных процессов</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🔬</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Лаборатории</h3>
            <p className="text-gray-600 text-sm">Точные манипуляции в научных исследованиях</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">📦</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Логистика</h3>
            <p className="text-gray-600 text-sm">Автоматизированная сортировка и упаковка</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="robotic-arms"
      title="Роботизированные руки"
      description="Промышленные манипуляторы высокой точности для автоматизации производства"
      pageTitle="Роботизированные руки"
      infoSection={infoSection}
    />
  );
};

export default RoboticArms;
