
import { CategoryPage } from "@/components/CategoryPage";

const RoboticDogs = () => {
  const infoSection = (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#113C5A] mb-4">
          Применение робо-собак
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🔬</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Исследования</h3>
            <p className="text-gray-600 text-sm">Научные исследования в области робототехники и ИИ</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🎓</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Образование</h3>
            <p className="text-gray-600 text-sm">Обучение студентов основам робототехники</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🏭</span>
            </div>
            <h3 className="font-semibold text-[#113C5A] mb-2">Промышленность</h3>
            <p className="text-gray-600 text-sm">Инспекция и мониторинг производственных объектов</p>
          </div>
        </div>
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
