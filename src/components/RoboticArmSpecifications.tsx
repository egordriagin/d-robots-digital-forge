
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RoboticArmSpecifications } from "@/types/robotic-arm-specifications";

interface RoboticArmSpecificationsProps {
  specifications: RoboticArmSpecifications;
}

const RoboticArmSpecificationsComponent: React.FC<RoboticArmSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Грузоподъемность и радиус действия",
      subsections: [
        {
          subtitle: "Грузоподъемность",
          items: [
            { label: "Максимальная грузоподъемность (обычно от 0,5 кг до 16+ кг)", value: specifications.capacity.payload.maxPayload },
            { label: "Максимальный радиус действия/рабочий радиус (диапазон 320-1713 мм)", value: specifications.capacity.payload.maxReach },
            { label: "Номинальная полезная нагрузка при максимальном радиусе действия", value: specifications.capacity.payload.nominalPayload },
            { label: "Характеристики момента инерции", value: specifications.capacity.payload.momentInertia },
          ]
        },
        {
          subtitle: "Точность и прецизионность",
          items: [
            { label: "Повторяемость (обычно ±0,02 мм до ±0,1 мм)", value: specifications.capacity.accuracy.repeatability },
            { label: "Характеристики точности позиционирования", value: specifications.capacity.accuracy.positioningAccuracy },
            { label: "Точность траектории для непрерывного движения", value: specifications.capacity.accuracy.pathAccuracy },
            { label: "Измерения абсолютной точности", value: specifications.capacity.accuracy.absoluteAccuracy },
          ]
        },
        {
          subtitle: "Скорость и движение",
          items: [
            { label: "Максимальная скорость инструмента (обычно 1 м/с)", value: specifications.capacity.speed.maxToolSpeed },
            { label: "Угловые скорости суставов (180°/с до 480°/с)", value: specifications.capacity.speed.jointAngularSpeed },
            { label: "Характеристики ускорения", value: specifications.capacity.speed.acceleration },
            { label: "Метрики производительности времени цикла", value: specifications.capacity.speed.cycleTime },
          ]
        }
      ]
    },
    {
      title: "Механические характеристики",
      subsections: [
        {
          subtitle: "Степени свободы",
          items: [
            { label: "Количество осей/суставов (конфигурации 4-7 осей)", value: specifications.mechanical.degreesOfFreedom.axesCount },
            { label: "Характеристики диапазона суставов для каждой оси", value: specifications.mechanical.degreesOfFreedom.jointRange },
            { label: "Возможности бесконечного вращения на определенных суставах", value: specifications.mechanical.degreesOfFreedom.infiniteRotation },
          ]
        },
        {
          subtitle: "Физические характеристики",
          items: [
            { label: "Вес манипулятора (3,4-74 кг)", value: specifications.mechanical.physical.manipulatorWeight },
            { label: "Размеры основания (Ø128 мм до 158×158 мм)", value: specifications.mechanical.physical.baseDimensions },
            { label: "Варианты ориентации крепления (любой угол, настольный, потолочный)", value: specifications.mechanical.physical.mountingOptions },
            { label: "Материал конструкции (алюминиевый сплав, углеродное волокно)", value: specifications.mechanical.physical.constructionMaterial },
          ]
        }
      ]
    },
    {
      title: "Управление и программирование",
      subsections: [
        {
          subtitle: "Интерфейсы программирования",
          items: [
            { label: "Графические среды программирования", value: specifications.control.programming.graphicalEnvironments },
            { label: "Возможности обучения методом ведения/вручную", value: specifications.control.programming.teachByDemonstration },
            { label: "Поддержка языков программирования (Python, ROS/ROS2)", value: specifications.control.programming.programmingLanguages },
            { label: "Опции интерфейса перетаскивания", value: specifications.control.programming.dragDropInterface },
          ]
        },
        {
          subtitle: "Методы управления",
          items: [
            { label: "Программное обеспечение управления ПК", value: specifications.control.methods.pcSoftware },
            { label: "Управление через мобильное приложение", value: specifications.control.methods.mobileApp },
            { label: "Возможности голосового управления", value: specifications.control.methods.voiceControl },
            { label: "Управление жестами и зрением", value: specifications.control.methods.gestureVision },
          ]
        }
      ]
    },
    {
      title: "Подключение и интеграция",
      subsections: [
        {
          subtitle: "Протоколы связи",
          items: [
            { label: "Подключение Ethernet (TCP/IP, Modbus TCP)", value: specifications.connectivity.communication.ethernet },
            { label: "Опции подключения USB", value: specifications.connectivity.communication.usb },
            { label: "Беспроводные опции (WiFi, Bluetooth)", value: specifications.connectivity.communication.wireless },
            { label: "RS485/Modbus RTU для концевых эффекторов", value: specifications.connectivity.communication.endEffectorComm },
          ]
        },
        {
          subtitle: "Возможности ввода/вывода",
          items: [
            { label: "Порты цифрового ввода/вывода", value: specifications.connectivity.io.digitalIO },
            { label: "Характеристики аналогового ввода/вывода", value: specifications.connectivity.io.analogIO },
            { label: "Доступность ввода/вывода разъема инструмента", value: specifications.connectivity.io.toolConnectorIO },
            { label: "Протоколы связи концевого эффектора", value: specifications.connectivity.io.endEffectorProtocols },
          ]
        }
      ]
    },
    {
      title: "Питание и окружающая среда",
      subsections: [
        {
          subtitle: "Требования к питанию",
          items: [
            { label: "Диапазон входного напряжения (12В DC до 100-240В AC)", value: specifications.power.requirements.inputVoltage },
            { label: "Энергопотребление (максимум 60-400 Вт)", value: specifications.power.requirements.powerConsumption },
            { label: "Требования к току и рейтинги эффективности", value: specifications.power.requirements.currentRequirements },
          ]
        },
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Диапазон температур (-10°C до +60°C)", value: specifications.power.operating.temperatureRange },
            ...(specifications.power.operating.humidity ? [{ label: "Характеристики влажности (где применимо)", value: specifications.power.operating.humidity }] : []),
            { label: "IP-рейтинг для защиты от окружающей среды", value: specifications.power.operating.ipRating },
            { label: "Классификация чистых помещений (ISO класс 5-6)", value: specifications.power.operating.cleanroomClass },
          ]
        }
      ]
    },
    {
      title: "Безопасность и соответствие",
      subsections: [
        {
          subtitle: "Функции безопасности",
          items: [
            { label: "Системы обнаружения столкновений", value: specifications.safety.functions.collisionDetection },
            { label: "Определения границ безопасности", value: specifications.safety.functions.safetyBoundaries },
            { label: "Функциональность экстренной остановки", value: specifications.safety.functions.emergencyStop },
            { label: "Возможности ограничения силы/крутящего момента", value: specifications.safety.functions.forceTorqueLimiting },
            { label: "Предотвращение самостолкновения", value: specifications.safety.functions.selfCollisionPrevention },
          ]
        },
        {
          subtitle: "Коллаборативные функции",
          items: [
            { label: "Расширенные функции безопасности (15+ для коллаборативной работы)", value: specifications.safety.collaborative.advancedSafetyFeatures },
            { label: "Возможности силового восприятия", value: specifications.safety.collaborative.forceSensing },
            { label: "Мониторинг скорости и разделения", value: specifications.safety.collaborative.speedSeparation },
            { label: "Безопасные рабочие режимы", value: specifications.safety.collaborative.safeOperatingModes },
          ]
        }
      ]
    },
    {
      title: "Программное обеспечение и симуляция",
      subsections: [
        {
          subtitle: "Среда разработки",
          items: [
            { label: "Возможности 3D-симуляции", value: specifications.software.development.simulation3D },
            { label: "Поддержка автономного программирования", value: specifications.software.development.autonomousProgramming },
            { label: "Запись и воспроизведение траектории", value: specifications.software.development.trajectoryRecording },
            { label: "Совместимость интеграции CAD/CAM", value: specifications.software.development.cadCamIntegration },
          ]
        },
        {
          subtitle: "Поддержка приложений",
          items: [
            { label: "Совместимые типы концевых эффекторов (захваты, датчики, инструменты)", value: specifications.software.applications.endEffectorTypes },
            { label: "Возможности многоосевой обработки", value: specifications.software.applications.multiAxisMachining },
            { label: "Оптимизация операций захвата и размещения", value: specifications.software.applications.pickPlaceOptimization },
            { label: "Приложения сварки и сборки", value: specifications.software.applications.weldingAssembly },
          ]
        }
      ]
    }
  ];

  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики</h3>
        <div className="space-y-8">
          {specSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h4 className="text-xl font-bold text-[#1F669D] border-b-2 border-[#3498DB] pb-2">
                {section.title}
              </h4>
              {section.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#113C5A] mb-3">
                    {subsection.subtitle}
                  </h5>
                  <div className="grid grid-cols-1 gap-3">
                    {subsection.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-[#1F669D] flex-1 pr-4">
                          {item.label}:
                        </span>
                        <span className="text-gray-700 text-right flex-1">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoboticArmSpecificationsComponent;
