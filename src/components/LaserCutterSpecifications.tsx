
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
            { label: "Выходная мощность лазера (обычно 50-60 Вт для настольных устройств)", value: specifications.laser.power.outputPower },
            { label: "Тип лазера (стандартная CO2 стеклянная трубка)", value: specifications.laser.power.laserType },
            { label: "Длина волны лазера (10640 нм для CO2 систем)", value: specifications.laser.power.wavelength },
            { label: "Размер лазерного пятна (типично 0,15×0,2 мм)", value: specifications.laser.power.spotSize },
            { label: "Срок службы лазерной трубки (6000-10000 часов)", value: specifications.laser.power.tubeLifetime },
          ]
        },
        {
          subtitle: "Скорость и точность",
          items: [
            { label: "Максимальная скорость гравировки (диапазон 300-900 мм/с)", value: specifications.laser.performance.maxEngravingSpeed },
            { label: "Точность обработки (типично 0,01 мм)", value: specifications.laser.performance.processingAccuracy },
            { label: "Возможности разрешения изображения (1000 DPI)", value: specifications.laser.performance.imageResolution },
            { label: "Характеристики диапазона скорости движения", value: specifications.laser.performance.speedRange },
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
            { label: "Размеры рабочей области (600×305 мм до 730×410 мм)", value: specifications.workArea.processing.workAreaSize },
            { label: "Характеристики размера стола (больше рабочей области)", value: specifications.workArea.processing.tableSize },
            { label: "Максимальная высота заготовки (64-215 мм в зависимости от конфигурации)", value: specifications.workArea.processing.maxWorkpieceHeight },
            { label: "Максимальная толщина резки по типам материалов", value: specifications.workArea.processing.maxCuttingThickness },
          ]
        },
        {
          subtitle: "Физические характеристики",
          items: [
            { label: "Размеры станка (Ш × Г × В)", value: specifications.workArea.physical.machineDimensions },
            { label: "Общий вес (типично 45-48 кг)", value: specifications.workArea.physical.totalWeight },
            { label: "Возможности диаметра ротационной гравировки", value: specifications.workArea.physical.rotaryEngravingDiameter },
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
            { label: "Разрешение камеры (16 МП двойная камера или HD CMOS)", value: specifications.vision.cameras.cameraResolution },
            { label: "Точность зрения (типично 0,3 мм)", value: specifications.vision.cameras.visionAccuracy },
            { label: "Характеристики области предварительного просмотра камеры", value: specifications.vision.cameras.previewArea },
            { label: "Возможности автофокуса с LiDAR дальномером", value: specifications.vision.cameras.autofocusLidar },
          ]
        },
        {
          subtitle: "Расширенные функции",
          items: [
            { label: "Возможности 3D криволинейной гравировки", value: specifications.vision.advanced.curved3DEngraving },
            { label: "Технология AutoPassthrough для продолжительных материалов", value: specifications.vision.advanced.autoPassthrough },
            { label: "Электрическая подъемная платформа для фокусировки", value: specifications.vision.advanced.electricLifting },
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
            { label: "Характеристики сенсорной панели (типично LCD 1024×600)", value: specifications.control.interface.touchPanelSpecs },
            { label: "Методы управления (сенсорный экран, программное обеспечение, мобильное приложение)", value: specifications.control.interface.controlMethods },
            { label: "Опции языка дисплея и интерфейса", value: specifications.control.interface.displayLanguages },
          ]
        },
        {
          subtitle: "Совместимость программного обеспечения",
          items: [
            { label: "Поддерживаемые программные платформы (xTool Creative Space, LightBurn, Beam Studio)", value: specifications.control.software.supportedPlatforms },
            { label: "Совместимость операционных систем (Windows/macOS/Linux/iPadOS)", value: specifications.control.software.osCompatibility },
            { label: "Поддерживаемые форматы файлов (SVG, DXF, JPG, PNG, BMP)", value: specifications.control.software.supportedFormats },
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
            { label: "Возможности подключения Wi-Fi", value: specifications.connectivity.options.wifiCapabilities },
            { label: "Доступность порта Ethernet", value: specifications.connectivity.options.ethernetPort },
            { label: "Опции подключения USB", value: specifications.connectivity.options.usbConnections },
            { label: "Совместимость с мобильными устройствами", value: specifications.connectivity.options.mobileCompatibility },
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
            { label: "Классификация безопасности (FDA класс I/IV)", value: specifications.safety.features.safetyClassification },
            { label: "Конструкция закрытого рабочего пространства", value: specifications.safety.features.enclosedWorkspace },
            { label: "Функциональность экстренной остановки", value: specifications.safety.features.emergencyStop },
            { label: "Автоматические системы блокировки", value: specifications.safety.features.automaticLocks },
            { label: "Множественные системы предупреждения", value: specifications.safety.features.warningSystems },
          ]
        },
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Диапазон рабочих температур (типично 10-30°C)", value: specifications.safety.operating.operatingTemperature },
            { label: "Характеристики температуры хранения", value: specifications.safety.operating.storageTemperature },
            { label: "Требования к питанию (AC 110В/220В)", value: specifications.safety.operating.powerRequirements },
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
            { label: "Емкость системы водяного охлаждения (типично 1,4 л)", value: specifications.cooling.system.coolingCapacity },
            { label: "Характеристики встроенного воздушного ассистента", value: specifications.cooling.system.airAssist },
            { label: "Производительность вытяжного вентилятора (типично 145 куб.фут/мин)", value: specifications.cooling.system.exhaustFan },
            { label: "Опции очистки дыма", value: specifications.cooling.system.smokeFiltering },
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
            { label: "Совместимые материалы для резки (дерево, акрил, кожа, картон, МДФ)", value: specifications.materials.cutting.compatibleCuttingMaterials },
            { label: "Максимальная глубина резки по типам материалов", value: specifications.materials.cutting.cuttingDepthByMaterial },
          ]
        },
        {
          subtitle: "Материалы для гравировки",
          items: [
            { label: "Расширенный список материалов для гравировки (включая стекло, керамику, камень, покрытые металлы)", value: specifications.materials.engraving.engravingMaterials },
            { label: "Рекомендации параметров для конкретных материалов", value: specifications.materials.engraving.materialParameters },
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
