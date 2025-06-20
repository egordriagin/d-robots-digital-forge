
import { CategoryPage } from "@/components/CategoryPage";

const HumanoidRobots = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Будущее робототехники
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Передовые алгоритмы машинного обучения</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Естественное общение и сотрудничество с людьми</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Платформа для изучения робототехники и ИИ</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Автономное выполнение сложных задач</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="Humanoid Robots"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="humanoid-robots"
      title="Роботы-гуманоиды"
      description="Передовые человекоподобные роботы для исследований и разработки"
      pageTitle="Роботы-гуманоиды"
      infoSection={infoSection}
    />
  );
};

export default HumanoidRobots;
