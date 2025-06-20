
import { CategoryPage } from "@/components/CategoryPage";

const Printers3D = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Почему выбирают наши 3D принтеры?
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Официальная гарантия от производителя</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Бесплатная техническая поддержка и обучение</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Поставка расходных материалов и запчастей</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Сервисное обслуживание по всей России</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="3D Printing"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="3d-printers"
      title="3D Принтеры"
      description="Профессиональные 3D принтеры для промышленности, образования и исследований. Выберите из широкого ассортимента FDM и SLA технологий."
      pageTitle="3D Принтеры"
      infoSection={infoSection}
    />
  );
};

export default Printers3D;
