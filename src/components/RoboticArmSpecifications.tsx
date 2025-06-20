
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
          subtitle: "Характеристики грузоподъемности",
          items: [
            { label: "Максимальная грузоподъемность (обычно от 0,5 кг до 16+ кг)", value: specifications.loadCapacity.payloadCapacity.maxPayload },
            { label: "Максимальный радиус действия/рабочий радиус (диапазон 320-1713 мм)", value: specifications.loadCapacity.payloadCapacity.maxReach },
            { label: "Номинальная полезная нагрузка при максимальном радиусе действия", value: specifications.loadCapacity.payloadCapacity.nominalPayloadAtMaxReach },
            { label: "Характеристики момента инерции", value: specifications.loadCapacity.payloadCapacity.momentOfInertia },
          ]
        }
      ]
    },
    {
      title: "Точность и прецизионность",
      subsections: [
        {
          subtitle: "Характеристики точности",
          items: [
            { label: "Повторяемость (обычно ±0,02 мм до ±0,1 мм)", value: specifications.accuracy.repeatability },
            { label: "Характеристики точности позиционирования", value: specifications.accuracy.positioningAccuracy },
            { label: "Точность траектории для непрерывного движения", value: specifications.accuracy.pathAccuracy },
            { label: "Измерения абсолютной точности", value: specifications.accuracy.absoluteAccuracy },
          ]
        }
      ]
    },
    {
      title: "Скорость и движение",
      subsections: [
        {
          subtitle: "Характеристики скорости",
          items: [
            { label: "Максимальная скорость инструмента (обычно 1 м/с)", value: specifications.speed.maxToolSpeed },
            { label: "Угловые скорости суставов (180°/с до 480°/с)", value: specifications.speed.jointAngularVelocities },
            { label: "Характеристики ускорения", value: specifications.speed.accelerationCharacteristics },
            { label: "Метрики производительности времени цикла", value: specifications.speed.cycleTimePerformance },
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
            { label: "Количество осей/суставов (конфигурации 4-7 осей)", value: specifications.mechanical.degreesOfFreedom.axesJoints },
            { label: "Характеристики диапазона суставов для каждой оси", value: specifications.mechanical.degreesOfFreedom.jointRangeCharacteristics },
            { label: "Возможности бесконечного вращения на определенных суставах", value: specifications.mechanical.degreesOfFreedom.continuousRotationCapabilities },
          ]
        },
        {
          subtitle: "Физические характеристики",
          items: [
            { label: "Вес манипулятора (3,4-74 кг)", value: specifications.mechanical.physicalCharacteristics.manipulatorWeight },
            { label: "Размеры основания (Ø128 мм до 158×158 мм)", value: specifications.mechanical.physicalCharacteristics.baseDimensions },
            { label: "Варианты ориентации крепления (любой угол, настольный, потолочный)", value: specifications.mechanical.physicalCharacteristics.mountingOptions },
            { label: "Материал конструкции (алюминиевый сплав, углеродное волокно)", value: specifications.mechanical.physicalCharacteristics.constructionMaterial },
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
            { label: "Графические среды программирования", value: specifications.control.programmingInterfaces.graphicalProgramming },
            { label: "Возможности обучения методом ведения/вручную", value: specifications.control.programmingInterfaces.teachByHand },
            { label: "Поддержка языков программирования (Python, ROS/ROS2)", value: specifications.control.programmingInterfaces.programmingLanguageSupport },
            { label: "Опции интерфейса перетаскивания", value: specifications.control.programmingInterfaces.dragDropInterface },
          ]
        },
        {
          subtitle: "Методы управления",
          items: [
            { label: "Программное обеспечение управления ПК", value: specifications.control.controlMethods.pcControlSoftware },
            { label: "Управление через мобильное приложение", value: specifications.control.controlMethods.mobileAppControl },
            { label: "Возможности голосового управления", value: specifications.control.controlMethods.voiceControlCapabilities },
            { label: "Управление жестами и зрением", value: specifications.control.controlMethods.gestureVisionControl },
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
            { label: "Подключение Ethernet (TCP/IP, Modbus TCP)", value: specifications.connectivity.communicationProtocols.ethernetConnectivity },
            { label: "Опции подключения USB", value: specifications.connectivity.communicationProtocols.usbConnectivity },
            { label: "Беспроводные опции (WiFi, Bluetooth)", value: specifications.connectivity.communicationProtocols.wirelessOptions },
            { label: "RS485/Modbus RTU для концевых эффекторов", value: specifications.connectivity.communicationProtocols.endEffectorCommunication },
          ]
        },
        {
          subtitle: "Возможности ввода/вывода",
          items: [
            { label: "Порты цифрового ввода/вывода", value: specifications.connectivity.ioCapabilities.digitalIO },
            { label: "Характеристики аналогового ввода/вывода", value: specifications.connectivity.ioCapabilities.analogIO },
            { label: "Доступность ввода/вывода разъема инструмента", value: specifications.connectivity.ioCapabilities.toolConnectorIO },
            { label: "Протоколы связи концевого эффектора", value: specifications.connectivity.ioCapabilities.endEffectorProtocols },
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
            { label: "Диапазон входного напряжения (12В DC до 100-240В AC)", value: specifications.power.powerRequirements.inputVoltageRange },
            { label: "Энергопотребление (максимум 60-400 Вт)", value: specifications.power.powerRequirements.powerConsumption },
            { label: "Требования к току и рейтинги эффективности", value: specifications.power.powerRequirements.currentEfficiencyRatings },
          ]
        },
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Диапазон температур (-10°C до +60°C)", value: specifications.power.operatingConditions.temperatureRange },
            { label: "Характеристики влажности (где применимо)", value: specifications.power.operatingConditions.humidityCharacteristics },
            { label: "IP-рейтинг для защиты от окружающей среды", value: specifications.power.operatingConditions.ipRating },
            { label: "Классификация чистых помещений (ISO класс 5-6)", value: specifications.power.operatingConditions.cleanroomClassification },
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
            { label: "Системы обнаружения столкновений", value: specifications.safety.safetyFeatures.collisionDetection },
            { label: "Определения границ безопасности", value: specifications.safety.safetyFeatures.safetyBoundaries },
            { label: "Функциональность экстренной остановки", value: specifications.safety.safetyFeatures.emergencyStopFunctionality },
            { label: "Возможности ограничения силы/крутящего момента", value: specifications.safety.safetyFeatures.forceTorqueLimiting },
            { label: "Предотвращение самостолкновения", value: specifications.safety.safetyFeatures.selfCollisionPrevention },
          ]
        },
        {
          subtitle: "Коллаборативные функции",
          items: [
            { label: "Расширенные функции безопасности (15+ для коллаборативной работы)", value: specifications.safety.collaborativeFeatures.advancedSafetyFeatures },
            { label: "Возможности силового восприятия", value: specifications.safety.collaborativeFeatures.forceSensingCapabilities },
            { label: "Мониторинг скорости и разделения", value: specifications.safety.collaborativeFeatures.speedSeparationMonitoring },
            { label: "Безопасные рабочие режимы", value: specifications.safety.collaborativeFeatures.safeOperatingModes },
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
            { label: "Возможности 3D-симуляции", value: specifications.software.developmentEnvironment.simulation3D },
            { label: "Поддержка автономного программирования", value: specifications.software.developmentEnvironment.autonomousProgramming },
            { label: "Запись и воспроизведение траектории", value: specifications.software.developmentEnvironment.pathRecordingPlayback },
            { label: "Совместимость интеграции CAD/CAM", value: specifications.software.developmentEnvironment.cadCamIntegration },
          ]
        },
        {
          subtitle: "Поддержка приложений",
          items: [
            { label: "Совместимые типы концевых эффекторов (захваты, датчики, инструменты)", value: specifications.software.applicationSupport.endEffectorCompatibility },
            { label: "Возможности многоосевой обработки", value: specifications.software.applicationSupport.multiAxisMachining },
            { label: "Оптимизация операций захвата и размещения", value: specifications.software.applicationSupport.pickPlaceOptimization },
            { label: "Приложения сварки и сборки", value: specifications.software.applicationSupport.weldingAssemblyApplications },
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
