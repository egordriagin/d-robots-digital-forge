
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScannerSpecifications } from "@/types/scanner-specifications";

interface ScannerSpecificationsProps {
  specifications: ScannerSpecifications;
}

const ScannerSpecificationsComponent: React.FC<ScannerSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Точность и прецизионность",
      subsections: [
        {
          subtitle: "Точность точки",
          items: [
            { label: "Диапазон точности (от минимальной до максимальной)", value: specifications.accuracy.pointAccuracy.range },
            { label: "Типичная точность точки", value: specifications.accuracy.pointAccuracy.typical },
            { label: "Метод измерения точности", value: specifications.accuracy.pointAccuracy.measurement },
          ]
        },
        {
          subtitle: "Объемная точность",
          items: [
            { label: "Базовая точность", value: specifications.accuracy.volumetricAccuracy.baseAccuracy },
            { label: "Коэффициент расстояния", value: specifications.accuracy.volumetricAccuracy.distanceCoefficient },
            { label: "Формула расчета", value: specifications.accuracy.volumetricAccuracy.formula },
          ]
        },
        {
          subtitle: "Разрешение",
          items: [
            { label: "Разрешение измерения", value: specifications.accuracy.resolution.measurementResolution },
            { label: "Расстояние между точками", value: specifications.accuracy.resolution.pointDistance },
            { label: "Разрешение выходной сетки", value: specifications.accuracy.resolution.outputMeshResolution },
          ]
        }
      ]
    },
    {
      title: "Скорость и эффективность сканирования",
      subsections: [
        {
          subtitle: "Параметры скорости",
          items: [
            { label: "Частота кадров (кадр/сек)", value: specifications.speed.frameRate },
            { label: "Скорость измерения (точек/сек)", value: specifications.speed.measurementSpeed },
            { label: "Скорость сбора данных", value: specifications.speed.dataCollectionSpeed },
          ]
        }
      ]
    },
    {
      title: "Диапазон захвата и рабочее расстояние",
      subsections: [
        {
          subtitle: "Область захвата",
          items: [
            { label: "Диапазон одного сканирования", value: specifications.captureRange.singleScanRange },
            { label: "Поле зрения (FOV)", value: specifications.captureRange.fieldOfView },
            { label: "Глубина резкости (DOF)", value: specifications.captureRange.depthOfField },
            { label: "Рабочее расстояние", value: specifications.captureRange.workingDistance },
          ]
        },
        {
          subtitle: "Возможности размера объекта",
          items: [
            { label: "Минимальный размер объекта", value: specifications.captureRange.objectSizeCapabilities.minimum },
            { label: "Максимальный размер объекта", value: specifications.captureRange.objectSizeCapabilities.maximum },
            { label: "Рекомендуемый размер объекта", value: specifications.captureRange.objectSizeCapabilities.recommended },
          ]
        }
      ]
    },
    {
      title: "Технология и методология",
      subsections: [
        {
          subtitle: "Технология сканирования",
          items: [
            { label: "Тип технологии сканирования", value: specifications.technology.scanningTechnology.type },
            { label: "Характеристики источника света", value: specifications.technology.scanningTechnology.lightSourceCharacteristics },
            { label: "Количество камер и проекторов", value: specifications.technology.scanningTechnology.camerasAndProjectors },
          ]
        },
        {
          subtitle: "Отслеживание и позиционирование",
          items: [
            { label: "Методы выравнивания/позиционирования", value: specifications.technology.trackingAndPositioning.alignmentMethods },
            { label: "Возможности режима отслеживания", value: specifications.technology.trackingAndPositioning.trackingCapabilities },
            { label: "Поддержка маркеров", value: specifications.technology.trackingAndPositioning.markerSupport },
          ]
        }
      ]
    },
    {
      title: "Совместимость объектов и поверхностей",
      subsections: [
        {
          subtitle: "Ограничения по размеру",
          items: [
            { label: "Рекомендуемый диапазон размеров деталей", value: specifications.compatibility.sizeConstraints.recommendedRange },
            { label: "Типичные характеристики размера объекта", value: specifications.compatibility.sizeConstraints.typicalCharacteristics },
            { label: "Максимальные сканируемые размеры", value: specifications.compatibility.sizeConstraints.maximumScannable },
          ]
        },
        {
          subtitle: "Требования к поверхности",
          items: [
            { label: "Совместимые типы поверхностей и материалов", value: specifications.compatibility.surfaceRequirements.compatibleSurfaces },
            { label: "Рекомендации по обработке поверхности", value: specifications.compatibility.surfaceRequirements.processingRecommendations },
            { label: "Ограничения для сложных поверхностей", value: specifications.compatibility.surfaceRequirements.limitations },
          ]
        }
      ]
    },
    {
      title: "Программное обеспечение и характеристики данных",
      subsections: [
        {
          subtitle: "Вывод и совместимость",
          items: [
            { label: "Поддерживаемые форматы файлов", value: specifications.software.outputCompatibility.supportedFileFormats },
            { label: "Совместимые операционные системы", value: specifications.software.outputCompatibility.operatingSystems },
            { label: "Совместимость с мобильными устройствами", value: specifications.software.outputCompatibility.mobileCompatibility },
          ]
        },
        {
          subtitle: "Системные требования",
          items: [
            { label: "Минимальные характеристики компьютера", value: specifications.software.systemRequirements.minimumSpecs },
            { label: "Рекомендуемые аппаратные требования", value: specifications.software.systemRequirements.recommendedSpecs },
            { label: "Требования к ОЗУ, GPU и процессору", value: specifications.software.systemRequirements.ramGpuCpuRequirements },
          ]
        }
      ]
    },
    {
      title: "Физические и экологические характеристики",
      subsections: [
        {
          subtitle: "Характеристики оборудования",
          items: [
            { label: "Вес и размеры головки сканера", value: specifications.hardware.equipmentCharacteristics.weightAndDimensions },
            { label: "Характеристики кабелей и подключения", value: specifications.hardware.equipmentCharacteristics.cableAndConnectivity },
            { label: "Классификация портативности", value: specifications.hardware.equipmentCharacteristics.portabilityClassification },
          ]
        },
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Возможности работы в помещении/на улице", value: specifications.hardware.operatingConditions.indoorOutdoorCapabilities },
            { label: "Требования к освещению", value: specifications.hardware.operatingConditions.lightingRequirements },
            { label: "Экологические ограничения и рекомендации", value: specifications.hardware.operatingConditions.environmentalConstraints },
          ]
        }
      ]
    },
    {
      title: "Расширенные функции",
      subsections: [
        {
          subtitle: "Режимы сканирования",
          items: [
            { label: "Множественные опции режимов сканирования", value: specifications.advanced.scanningModes.multipleOptions },
            { label: "Возможности захвата текстуры/цвета", value: specifications.advanced.scanningModes.textureColorCapture },
            { label: "Сканирование в реальном времени vs пост-обработка", value: specifications.advanced.scanningModes.realtimeVsPostprocessing },
          ]
        },
        {
          subtitle: "Контроль качества",
          items: [
            { label: "Функции автоматической калибровки", value: specifications.advanced.qualityControl.autoCalibration },
            { label: "Возможности обнаружения и исправления ошибок", value: specifications.advanced.qualityControl.errorDetectionCorrection },
            { label: "Инструменты оценки качества", value: specifications.advanced.qualityControl.qualityAssessmentTools },
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

export default ScannerSpecificationsComponent;
