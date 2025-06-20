
import { CategoryPage } from "@/components/CategoryPage";

const Scanners3D = () => {
  const infoSection = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Возможности 3D сканирования
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Создание цифровых копий существующих объектов</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Точная проверка геометрии и размеров изделий</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Перевод физических объектов в цифровой формат</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#3498DB] rounded-full mt-2"></div>
            <span>Интеграция с системами CAD для дальнейшей обработки</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img 
          src="/lovable-uploads/bcba20ee-bb3e-4c91-be0b-e9efe47823df.png"
          alt="3D Scanning"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );

  return (
    <CategoryPage
      category="3d-scanners"
      title="3D Сканеры"
      description="Высокоточные 3D сканеры для реверс-инжиниринга, контроля качества и цифровизации объектов"
      pageTitle="3D Сканеры"
      infoSection={infoSection}
    />
  );
};

export default Scanners3D;
