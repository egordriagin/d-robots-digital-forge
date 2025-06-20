
import { CategoryPage } from "@/components/CategoryPage";

const RoboticDogs = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Применение робо-собак
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Научные исследования в области робототехники и ИИ</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Обучение студентов основам робототехники</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Инспекция и мониторинг производственных объектов</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Патрулирование и охрана территорий</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="Robotic Dogs"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="robotic-dogs"
      title="Робо-собаки"
      description="Четвероногие роботы нового поколения для исследований, образования и промышленного применения"
      pageTitle="Робо-собаки"
      infoSection={infoSection}
    />
  );
};

export default RoboticDogs;
