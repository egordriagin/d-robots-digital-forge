
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RoboticDogSpecifications } from "@/types/robotic-dog-specifications";

interface RoboticDogSpecificationsProps {
  specifications: RoboticDogSpecifications;
}

const RoboticDogSpecificationsComponent: React.FC<RoboticDogSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Габариты и форм-фактор",
      subsections: [
        {
          subtitle: "Общие размеры в рабочем положении",
          items: [
            { label: "Общие размеры в рабочем положении (Длина × Ширина × Высота)", value: specifications.dimensions.formFactor.workingDimensions },
            { label: "Размеры в сложенном/компактном состоянии для транспортировки и хранения", value: specifications.dimensions.formFactor.foldedDimensions },
            { label: "Общий вес включая аккумулятор", value: specifications.dimensions.formFactor.totalWeight },
            { label: "Дорожный просвет и минимальный радиус поворота", value: `${specifications.dimensions.formFactor.groundClearance} / ${specifications.dimensions.formFactor.minTurningRadius}` },
          ]
        },
        {
          subtitle: "Грузоподъемность",
          items: [
            { label: "Максимальная полезная нагрузка при статическом стоянии", value: specifications.dimensions.loadCapacity.staticPayload },
            { label: "Максимальная грузоподъемность во время передвижения", value: specifications.dimensions.loadCapacity.movingPayload },
            ...(specifications.dimensions.loadCapacity.armPayload ? [{ label: "Грузоподъемность руки/манипулятора (при наличии)", value: specifications.dimensions.loadCapacity.armPayload }] : []),
          ]
        }
      ]
    },
    {
      title: "Мобильность и производительность",
      subsections: [
        {
          subtitle: "Скорость и движение",
          items: [
            { label: "Максимальная скорость передвижения в различных режимах", value: specifications.mobility.speedMovement.maxSpeed },
            { label: "Типичный диапазон рабочих скоростей для различных типов местности", value: specifications.mobility.speedMovement.typicalSpeedRange },
            { label: "Доступные режимы движения (ходьба, бег, колесный режим и т.д.)", value: specifications.mobility.speedMovement.movementModes },
          ]
        },
        {
          subtitle: "Возможности по пересеченной местности",
          items: [
            { label: "Максимальный угол подъема/градиент", value: specifications.mobility.terrainCapabilities.maxClimbAngle },
            { label: "Максимальная высота преодолеваемых ступеней/препятствий", value: specifications.mobility.terrainCapabilities.maxStepHeight },
            { label: "Характеристики для подъема по лестнице (диапазон высоты ступеней)", value: specifications.mobility.terrainCapabilities.stairClimbingSpecs },
            { label: "Совместимость с типами поверхностей и ограничения", value: specifications.mobility.terrainCapabilities.surfaceCompatibility },
          ]
        },
        {
          subtitle: "Условия эксплуатации окружающей среды",
          items: [
            { label: "Диапазон рабочих температур", value: specifications.mobility.operatingConditions.temperatureRange },
            { label: "Допустимая влажность", value: specifications.mobility.operatingConditions.humidity },
            { label: "Степень защиты от воздействия погодных условий (рейтинги IP, если применимо)", value: specifications.mobility.operatingConditions.weatherResistance },
          ]
        }
      ]
    },
    {
      title: "Питание и выносливость",
      subsections: [
        {
          subtitle: "Система аккумуляторов",
          items: [
            { label: "Напряжение и емкость аккумулятора (Вт·ч/А·ч)", value: specifications.power.batterySystem.batterySpecs },
            { label: "Тип и химия аккумулятора", value: specifications.power.batterySystem.batteryType },
            { label: "Время работы от одного цикла зарядки", value: specifications.power.batterySystem.operatingTime },
            { label: "Возможность горячей замены для непрерывной работы", value: specifications.power.batterySystem.hotSwappable },
          ]
        },
        {
          subtitle: "Энергопотребление",
          items: [
            { label: "Среднее энергопотребление во время работы", value: specifications.power.energyConsumption.averageConsumption },
            { label: "Пиковые требования к мощности", value: specifications.power.energyConsumption.peakPowerRequirements },
            { label: "Характеристики зарядки и время требуемой зарядки", value: specifications.power.energyConsumption.chargingSpecs },
          ]
        }
      ]
    },
    {
      title: "Управление и автономность",
      subsections: [
        {
          subtitle: "Степени свободы",
          items: [
            { label: "Общее количество приводных суставов", value: specifications.control.degreesOfFreedom.totalJoints },
            { label: "Характеристики крутящего момента суставов (номинальный и пиковый)", value: specifications.control.degreesOfFreedom.jointTorqueSpecs },
            { label: "Диапазон движения для ключевых суставов", value: specifications.control.degreesOfFreedom.movementRange },
          ]
        },
        {
          subtitle: "Сенсорика и восприятие",
          items: [
            { label: "Характеристики камер (глубина, RGB, стерео)", value: specifications.control.sensorsPerception.cameraSpecs },
            { label: "Возможности LiDAR и дальность", value: specifications.control.sensorsPerception.lidarCapabilities },
            { label: "IMU и проприоцептивные датчики", value: specifications.control.sensorsPerception.imuSensors },
            { label: "Дополнительные опции интеграции датчиков", value: specifications.control.sensorsPerception.additionalSensors },
          ]
        },
        {
          subtitle: "Вычислительная платформа",
          items: [
            { label: "Характеристики бортового процессора", value: specifications.control.computingPlatform.processorSpecs },
            { label: "Объем ОЗУ и накопителя", value: specifications.control.computingPlatform.memoryStorage },
            { label: "Дополнительные высокопроизводительные вычислительные модули", value: specifications.control.computingPlatform.additionalModules },
          ]
        }
      ]
    },
    {
      title: "Подключение и интерфейс",
      subsections: [
        {
          subtitle: "Связь",
          items: [
            { label: "Стандарты и возможности WiFi", value: specifications.connectivity.communication.wifiStandards },
            { label: "Характеристики Bluetooth", value: specifications.connectivity.communication.bluetoothSpecs },
            { label: "Опции подключения Ethernet", value: specifications.connectivity.communication.ethernetOptions },
            { label: "Дальность дистанционного управления и протоколы связи", value: specifications.connectivity.communication.remoteControlRange },
          ]
        },
        {
          subtitle: "Расширение и интеграция",
          items: [
            { label: "Доступные порты расширения (USB, питание, данные)", value: specifications.connectivity.expansion.expansionPorts },
            { label: "Точки крепления для дополнительного оборудования", value: specifications.connectivity.expansion.mountingPoints },
            { label: "Характеристики питания периферийных устройств", value: specifications.connectivity.expansion.peripheralPower },
            { label: "Поддержка SDK и платформы разработки", value: specifications.connectivity.expansion.sdkSupport },
          ]
        }
      ]
    },
    {
      title: "Безопасность и функции управления",
      subsections: [
        {
          subtitle: "Аварийные системы",
          items: [
            { label: "Функциональность экстренной остановки", value: specifications.safety.emergencySystems.emergencyStop },
            { label: "Возможности дистанционной экстренной остановки", value: specifications.safety.emergencySystems.remoteEmergencyStop },
            { label: "Поведение отказоустойчивости и протоколы", value: specifications.safety.emergencySystems.failsafeBehavior },
          ]
        },
        {
          subtitle: "Режимы работы",
          items: [
            { label: "Возможности ручного управления", value: specifications.safety.operatingModes.manualControl },
            { label: "Режимы полуавтономной работы", value: specifications.safety.operatingModes.semiAutonomous },
            { label: "Функции полностью автономной навигации", value: specifications.safety.operatingModes.fullyAutonomous },
            { label: "Совместимость с платформой симуляции", value: specifications.safety.operatingModes.simulationCompatibility },
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

export default RoboticDogSpecificationsComponent;
