
import { CategoryPage } from "@/components/CategoryPage";

const Scanners3D = () => {
  const infoSection = (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Возможности 3D сканирования
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🔄</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Реверс-инжиниринг</h3>
            <p className="text-gray-600 text-sm">Создание цифровых копий существующих объектов</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">✅</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Контроль качества</h3>
            <p className="text-gray-600 text-sm">Точная проверка геометрии и размеров изделий</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">💾</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Цифровизация</h3>
            <p className="text-gray-600 text-sm">Перевод физических объектов в цифровой формат</p>
          </div>
        </div>
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
