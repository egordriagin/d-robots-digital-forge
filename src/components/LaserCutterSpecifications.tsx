
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LaserCutterSpecifications } from "@/types/laser-cutter-specifications";

interface LaserCutterSpecificationsProps {
  specifications: LaserCutterSpecifications;
}

const LaserCutterSpecificationsComponent: React.FC<LaserCutterSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Мощность и производительность лазера",
      subsections: [
        {
          subtitle: "Характеристики лазера",
          items: [
            { label: "Выходная мощность лазера (обычно 50-60 Вт для настольных устройств)", value: specifications.laser.powerPerformance.laserOutputPower },
            { label: "Тип лазера (стандартная CO2 стеклянная трубка)", value: specifications.laser.powerPerformance.laserType },
            { label: "Длина волны лазера (10640 нм для CO2 систем)", value: specifications.laser.powerPerformance.laserWavelength },
            { label: "Размер лазерного пятна (типично 0,15×0,2 мм)", value: specifications.laser.powerPerformance.laserSpotSize },
            { label: "Срок службы лазерной трубки (6000-10000 часов)", value: specifications.laser.powerPerformance.laserTubeLifespan },
          ]
        },
        {
          subtitle: "Скорость и точность",
          items: [
            { label: "Максимальная скорость гравировки (диапазон 300-900 мм/с)", value: specifications.laser.speedAccuracy.maxEngravingSpeed },
            { label: "Точность обработки (типично 0,01 мм)", value: specifications.laser.speedAccuracy.processingAccuracy },
            { label: "Возможности разрешения изображения (1000 DPI)", value: specifications.laser.speedAccuracy.imageResolutionCapabilities },
            { label: "Характеристики диапазона скорости движения", value: specifications.laser.speedAccuracy.speedRangeCharacteristics },
          ]
        }
      ]
    },
    {
      title: "Рабочая область и размеры",
      subsections: [
        {
          subtitle: "Возможности обработки",
          items: [
            { label: "Размеры рабочей области (600×305 мм до 730×410 мм)", value: specifications.workingArea.processingCapabilities.workingAreaDimensions },
            { label: "Характеристики размера стола (больше рабочей области)", value: specifications.workingArea.processingCapabilities.tableSizeCharacteristics },
            { label: "Максимальная высота заготовки (64-215 мм в зависимости от конфигурации)", value: specifications.workingArea.processingCapabilities.maxWorkpieceHeight },
            { label: "Максимальная толщина резки по типам материалов", value: specifications.workingArea.processingCapabilities.maxCuttingThicknessByMaterial },
          ]
        },
        {
          subtitle: "Физические характеристики",
          items: [
            { label: "Размеры станка (Ш × Г × В)", value: specifications.workingArea.physicalCharacteristics.machineDimensions },
            { label: "Общий вес (типично 45-48 кг)", value: specifications.workingArea.physicalCharacteristics.totalWeight },
            { label: "Возможности диаметра ротационной гравировки", value: specifications.workingArea.physicalCharacteristics.rotaryEngravingDiameter },
          ]
        }
      ]
    },
    {
      title: "Системы зрения и позиционирования",
      subsections: [
        {
          subtitle: "Камерные системы",
          items: [
            { label: "Разрешение камеры (16 МП двойная камера или HD CMOS)", value: specifications.vision.cameraSystems.cameraResolution },
            { label: "Точность зрения (типично 0,3 мм)", value: specifications.vision.cameraSystems.visionAccuracy },
            { label: "Характеристики области предварительного просмотра камеры", value: specifications.vision.cameraSystems.cameraPreviewArea },
            { label: "Возможности автофокуса с LiDAR дальномером", value: specifications.vision.cameraSystems.autofocusLidarCapabilities },
          ]
        },
        {
          subtitle: "Расширенные функции",
          items: [
            { label: "Возможности 3D криволинейной гравировки", value: specifications.vision.advancedFeatures.curved3DEngravingCapabilities },
            { label: "Технология AutoPassthrough для продолжительных материалов", value: specifications.vision.advancedFeatures.autoPassthroughTechnology },
            { label: "Электрическая подъемная платформа для фокусировки", value: specifications.vision.advancedFeatures.electricLiftingPlatform },
          ]
        }
      ]
    },
    {
      title: "Управление и программное обеспечение",
      subsections: [
        {
          subtitle: "Пользовательский интерфейс",
          items: [
            { label: "Характеристики сенсорной панели (типично LCD 1024×600)", value: specifications.control.userInterface.touchPanelSpecs },
            { label: "Методы управления (сенсорный экран, программное обеспечение, мобильное приложение)", value: specifications.control.userInterface.controlMethods },
            { label: "Опции языка дисплея и интерфейса", value: specifications.control.userInterface.displayLanguageOptions },
          ]
        },
        {
          subtitle: "Совместимость программного обеспечения",
          items: [
            { label: "Поддерживаемые программные платформы (xTool Creative Space, LightBurn, Beam Studio)", value: specifications.control.softwareCompatibility.supportedSoftwarePlatforms },
            { label: "Совместимость операционных систем (Windows/macOS/Linux/iPadOS)", value: specifications.control.softwareCompatibility.operatingSystemCompatibility },
            { label: "Поддерживаемые форматы файлов (SVG, DXF, JPG, PNG, BMP)", value: specifications.control.softwareCompatibility.supportedFileFormats },
          ]
        }
      ]
    },
    {
      title: "Подключение и связь",
      subsections: [
        {
          subtitle: "Опции подключения",
          items: [
            { label: "Возможности под

ключения Wi-Fi", value: specifications.connectivity.connectionOptions.wifiConnectivity },
            { label: "Доступность порта Ethernet", value: specifications.connectivity.connectionOptions.ethernetPort },
            { label: "Опции подключения USB", value: specifications.connectivity.connectionOptions.usbConnectivity },
            { label: "Совместимость с мобильными устройствами", value: specifications.connectivity.connectionOptions.mobileDeviceCompatibility },
          ]
        }
      ]
    },
    {
      title: "Безопасность и окружающая среда",
      subsections: [
        {
          subtitle: "Функции безопасности",
          items: [
            { label: "Классификация безопасности (FDA класс I/IV)", value: specifications.safety.safetyFeatures.safetyClassification },
            { label: "Конструкция закрытого рабочего пространства", value: specifications.safety.safetyFeatures.enclosedWorkspace },
            { label: "Функциональность экстренной остановки", value: specifications.safety.safetyFeatures.emergencyStopFunctionality },
            { label: "Автоматические системы блокировки", value: specifications.safety.safetyFeatures.automaticLockingSystems },
            { label: "Множественные системы предупреждения", value: specifications.safety.safetyFeatures.multipleWarningSystems },
          ]
        },
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Диапазон рабочих температур (типично 10-30°C)", value: specifications.safety.operatingConditions.operatingTemperatureRange },
            { label: "Характеристики температуры хранения", value: specifications.safety.operatingConditions.storageTemperatureCharacteristics },
            { label: "Требования к питанию (AC 110В/220В)", value: specifications.safety.operatingConditions.powerRequirements },
          ]
        }
      ]
    },
    {
      title: "Охлаждение и управление воздухом",
      subsections: [
        {
          subtitle: "Система охлаждения",
          items: [
            { label: "Емкость системы водяного охлаждения (типично 1,4 л)", value: specifications.cooling.coolingSystems.waterCoolingCapacity },
            { label: "Характеристики встроенного воздушного ассистента", value: specifications.cooling.coolingSystems.builtInAirAssistCharacteristics },
            { label: "Производительность вытяжного вентилятора (типично 145 куб.фут/мин)", value: specifications.cooling.coolingSystems.exhaustFanPerformance },
            { label: "Опции очистки дыма", value: specifications.cooling.coolingSystems.smokeExtractionOptions },
          ]
        }
      ]
    },
    {
      title: "Совместимость материалов",
      subsections: [
        {
          subtitle: "Материалы для резки",
          items: [
            { label: "Совместимые материалы для резки (дерево, акрил, кожа, картон, МДФ)", value: specifications.materials.cuttingMaterials.compatibleCuttingMaterials },
            { label: "Максимальная глубина резки по типам материалов", value: specifications.materials.cuttingMaterials.maxCuttingDepthByMaterial },
          ]
        },
        {
          subtitle: "Материалы для гравировки",
          items: [
            { label: "Расширенный список материалов для гравировки (включая стекло, керамику, камень, покрытые металлы)", value: specifications.materials.engravingMaterials.extendedEngravingMaterialsList },
            { label: "Рекомендации параметров для конкретных материалов", value: specifications.materials.engravingMaterials.materialSpecificParameterRecommendations },
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

export default LaserCutterSpecificationsComponent;
