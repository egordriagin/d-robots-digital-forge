
import { CategoryPage } from "@/components/CategoryPage";

const RoboticArms = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Применение роботизированных рук
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Автоматизация сборочных линий и производственных процессов</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Точные манипуляции в научных исследованиях</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Автоматизированная сортировка и упаковка</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Высокопrecизионные операции в медицине и электронике</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="Robotic Arms"
          className="rounded-lg shadow-lg mx-auto"
        />
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
