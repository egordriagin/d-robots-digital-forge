
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HumanoidRobotSpecifications } from "@/types/humanoid-robot-specifications";

interface HumanoidRobotSpecificationsProps {
  specifications: HumanoidRobotSpecifications;
}

const HumanoidRobotSpecificationsComponent: React.FC<HumanoidRobotSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Габариты и форм-фактор",
      subsections: [
        {
          subtitle: "Общие размеры",
          items: [
            { label: "Общая высота в положении стоя", value: specifications.dimensions.formFactor.standingHeight },
            { label: "Вес включая аккумулятор и стандартное оборудование", value: specifications.dimensions.formFactor.totalWeight },
            { label: "Размеры в сложенном/компактном состоянии для транспортировки и хранения", value: specifications.dimensions.formFactor.foldedDimensions },
            { label: "Размах рук и рабочая зона досягаемости", value: specifications.dimensions.formFactor.armSpan },
          ]
        },
        {
          subtitle: "Антропоморфные измерения",
          items: [
            { label: "Характеристики длины бедра и голени", value: specifications.dimensions.anthropomorphicMeasurements.thighShinLength },
            { label: "Общая длина рук", value: specifications.dimensions.anthropomorphicMeasurements.totalArmLength },
            { label: "Человекоподобные пропорциональные соотношения для интеграции в человеческой среде", value: specifications.dimensions.anthropomorphicMeasurements.humanProportions },
          ]
        }
      ]
    },
    {
      title: "Мобильность и передвижение",
      subsections: [
        {
          subtitle: "Скорость и возможности движения",
          items: [
            { label: "Максимальная скорость ходьбы (обычно 3-7 км/ч)", value: specifications.mobility.speedCapabilities.maxWalkingSpeed },
            { label: "Возможности скорости бега (где применимо)", value: specifications.mobility.speedCapabilities.runningCapabilities },
            { label: "Режимы движения (ходьба вперед/назад, повороты, подъем)", value: specifications.mobility.speedCapabilities.movementModes },
          ]
        },
        {
          subtitle: "Местность и навигация",
          items: [
            { label: "Возможности подъема по лестнице", value: specifications.mobility.terrainNavigation.stairClimbing },
            { label: "Высота преодоления препятствий при навигации", value: specifications.mobility.terrainNavigation.obstacleHeight },
            { label: "Функции адаптации к местности (различные поверхности, склоны)", value: specifications.mobility.terrainNavigation.terrainAdaptation },
            { label: "Системы равновесия и восстановления устойчивости", value: specifications.mobility.terrainNavigation.balanceRecovery },
          ]
        }
      ]
    },
    {
      title: "Степени свободы (DoF)",
      subsections: [
        {
          subtitle: "Общие DoF системы",
          items: [
            { label: "Общие степени свободы (обычно 22-53 DoF)", value: specifications.degreesOfFreedom.totalDOF.totalSystemDOF },
            { label: "Распределение по сегментам тела", value: specifications.degreesOfFreedom.totalDOF.bodySegmentDistribution },
          ]
        },
        {
          subtitle: "DoF конечностей",
          items: [
            { label: "DoF одной ноги (обычно 4-6 на ногу)", value: specifications.degreesOfFreedom.limbDOF.legDOF },
            { label: "DoF одной руки (обычно 4-7 на руку)", value: specifications.degreesOfFreedom.limbDOF.armDOF },
            { label: "DoF талии/торса", value: specifications.degreesOfFreedom.limbDOF.waistTorsoDOF },
            { label: "DoF головы/шеи для восприятия и взаимодействия", value: specifications.degreesOfFreedom.limbDOF.headNeckDOF },
          ]
        },
        {
          subtitle: "Ловкость рук",
          items: [
            { label: "Характеристики DoF рук (12+ DoF для ловких рук)", value: specifications.degreesOfFreedom.handDexterity.handDOF },
            { label: "Возможности датчиков кончиков пальцев и тактильная обратная связь", value: specifications.degreesOfFreedom.handDexterity.fingertipSensors },
          ]
        }
      ]
    },
    {
      title: "Питание и производительность",
      subsections: [
        {
          subtitle: "Характеристики приводов",
          items: [
            { label: "Максимальные номинальные крутящие моменты суставов (колено, бедро, лодыжка, суставы рук)", value: specifications.power.actuatorCharacteristics.maxJointTorques },
            { label: "Возможности пикового крутящего момента (200-380+ Н⋅м)", value: specifications.power.actuatorCharacteristics.peakTorqueCapabilities },
            { label: "Тип привода и интеграция (FSA, серводвигатели и т.д.)", value: specifications.power.actuatorCharacteristics.actuatorType },
          ]
        },
        {
          subtitle: "Грузоподъемность",
          items: [
            { label: "Максимальная полезная нагрузка во время работы", value: specifications.power.loadCapacity.maxOperatingPayload },
            { label: "Максимальные характеристики нагрузки руки", value: specifications.power.loadCapacity.maxArmLoad },
            { label: "Рейтинги прочности для задач манипулирования", value: specifications.power.loadCapacity.manipulationStrength },
          ]
        },
        {
          subtitle: "Аккумулятор и управление питанием",
          items: [
            { label: "Емкость аккумулятора (характеристики Вт⋅ч/А⋅ч)", value: specifications.power.batteryPowerManagement.batteryCapacity },
            { label: "Время работы от одного цикла зарядки", value: specifications.power.batteryPowerManagement.operatingTime },
            { label: "Характеристики и требования к зарядке", value: specifications.power.batteryPowerManagement.chargingSpecs },
            { label: "Профили энергопотребления", value: specifications.power.batteryPowerManagement.powerConsumptionProfiles },
          ]
        }
      ]
    },
    {
      title: "Сенсорика и восприятие",
      subsections: [
        {
          subtitle: "Системы зрения",
          items: [
            { label: "Характеристики камер (RGB, глубина, стерео конфигурации)", value: specifications.sensors.visionSystems.cameraSpecs },
            { label: "Возможности 3D LiDAR и дальность", value: specifications.sensors.visionSystems.lidarCapabilities },
            { label: "Возможности 360° восприятия", value: specifications.sensors.visionSystems.perception360 },
          ]
        },
        {
          subtitle: "Аудио и связь",
          items: [
            { label: "Характеристики микрофонного массива", value: specifications.sensors.audioCommunication.microphoneArray },
            { label: "Акустические системы и аудиовыход", value: specifications.sensors.audioCommunication.audioSystems },
            { label: "Точность распознавания речи", value: specifications.sensors.audioCommunication.speechRecognitionAccuracy },
          ]
        },
        {
          subtitle: "Датчики окружающей среды",
          items: [
            { label: "Системы IMU и датчики равновесия", value: specifications.sensors.environmentalSensors.imuBalanceSensors },
            { label: "Возможности тактильного и силового восприятия", value: specifications.sensors.environmentalSensors.tactileForceSensing },
            { label: "Мониторинг температуры и окружающей среды", value: specifications.sensors.environmentalSensors.temperatureEnvironmentalMonitoring },
          ]
        }
      ]
    },
    {
      title: "Вычисления и ИИ",
      subsections: [
        {
          subtitle: "Вычислительная мощность",
          items: [
            { label: "Характеристики бортовых вычислений (типы и производительность CPU)", value: specifications.computing.computationalPower.onboardComputing },
            { label: "Возможности ИИ-вычислений (рейтинги TOPS)", value: specifications.computing.computationalPower.aiComputingCapabilities },
            { label: "Объем памяти и накопителя", value: specifications.computing.computationalPower.memoryStorage },
          ]
        },
        {
          subtitle: "Системы ИИ и управления",
          items: [
            { label: "Мультимодальные возможности ИИ (текст, аудио, визуальный)", value: specifications.computing.aiControlSystems.multimodalAI },
            { label: "Системы обработки и реагирования в реальном времени", value: specifications.computing.aiControlSystems.realtimeProcessing },
            { label: "Возможности обучения и адаптации (обучение с подкреплением, имитация)", value: specifications.computing.aiControlSystems.learningAdaptation },
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
            { label: "Опции беспроводного подключения (WiFi, сотовая связь)", value: specifications.connectivity.communication.wirelessConnectivity },
            { label: "Возможности дистанционного управления и дальность", value: specifications.connectivity.communication.remoteControlCapabilities },
            { label: "Сетевая интеграция для управления парком", value: specifications.connectivity.communication.networkIntegration },
          ]
        },
        {
          subtitle: "Режимы управления",
          items: [
            { label: "Поддержка голосовых команд и языковые опции", value: specifications.connectivity.controlModes.voiceCommands },
            { label: "Возможности VR дистанционного управления", value: specifications.connectivity.controlModes.vrRemoteControl },
            { label: "Поддержка программирования методом ведения", value: specifications.connectivity.controlModes.teachingByDemonstration },
            { label: "Режимы автономной работы", value: specifications.connectivity.controlModes.autonomousModes },
          ]
        }
      ]
    },
    {
      title: "Безопасность и надежность",
      subsections: [
        {
          subtitle: "Системы безопасности",
          items: [
            { label: "Многоуровневая архитектура безопасности (бизнес, система, аппаратное обеспечение)", value: specifications.safety.safetySystems.multilayerSafety },
            { label: "Протоколы экстренной остановки и отказоустойчивости", value: specifications.safety.safetySystems.emergencyStopProtocols },
            { label: "Рейтинги уровня защиты (уровень PLd)", value: specifications.safety.safetySystems.protectionLevel },
          ]
        },
        {
          subtitle: "Условия эксплуатации окружающей среды",
          items: [
            { label: "Диапазоны рабочих температур и влажности", value: specifications.safety.operatingConditions.temperatureHumidityRanges },
            { label: "Возможности работы в помещении/на улице", value: specifications.safety.operatingConditions.indoorOutdoorCapabilities },
            { label: "Характеристики устойчивости к погодным условиям", value: specifications.safety.operatingConditions.weatherResistance },
          ]
        }
      ]
    },
    {
      title: "Программное обеспечение и разработка",
      subsections: [
        {
          subtitle: "Платформа разработки",
          items: [
            { label: "Поддержка SDK и инструментов разработки", value: specifications.software.developmentPlatform.sdkDevelopmentTools },
            { label: "Совместимость с фреймворками (ROS, NVIDIA Isaac Lab, Mujoco)", value: specifications.software.developmentPlatform.frameworkCompatibility },
            { label: "Интеграция с платформой симуляции", value: specifications.software.developmentPlatform.simulationIntegration },
          ]
        },
        {
          subtitle: "Режимы применения",
          items: [
            { label: "Возможности обслуживания и взаимодействия с клиентами", value: specifications.software.applicationModes.serviceInteraction },
            { label: "Поддержка производственных и промышленных задач", value: specifications.software.applicationModes.industrialProduction },
            { label: "Исследовательские и образовательные применения", value: specifications.software.applicationModes.researchEducational },
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

export default HumanoidRobotSpecificationsComponent;
