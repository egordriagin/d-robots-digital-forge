
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PrinterSpecifications } from "@/types/printer-specifications";

interface StandardizedSpecificationsProps {
  specifications: PrinterSpecifications;
}

const StandardizedSpecifications: React.FC<StandardizedSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Характеристики печати",
      subsections: [
        {
          subtitle: "Область построения / Объем печати",
          items: [
            { label: "Максимальные размеры печати (оси X × Y × Z)", value: specifications.printing.buildVolume.dimensions },
            { label: "Площадь платформы построения в квадратных единицах", value: specifications.printing.buildVolume.area },
            { label: "Максимальная длина создаваемой детали", value: specifications.printing.buildVolume.maxLength },
          ]
        },
        {
          subtitle: "Разрешение и точность",
          items: [
            { label: "Диапазон толщины слоя (минимальная и максимальная)", value: specifications.printing.resolution.layerHeight },
            { label: "Разрешение по XY (горизонтальная детализация)", value: specifications.printing.resolution.xyResolution },
            { label: "Допуски на точность размеров для различных элементов", value: specifications.printing.resolution.dimensionalAccuracy },
            { label: "Минимально возможная толщина стенки", value: specifications.printing.resolution.minWallThickness },
          ]
        },
        {
          subtitle: "Скорость печати",
          items: [
            { label: "Максимальная скорость печати", value: specifications.printing.speed.maxSpeed },
            { label: "Типичный/средний диапазон скорости печати", value: specifications.printing.speed.typicalRange },
            ...(specifications.printing.speed.materialDependent ? [{ label: "Изменения скорости в зависимости от типа материала", value: specifications.printing.speed.materialDependent }] : []),
          ]
        }
      ]
    },
    {
      title: "Технология и материалы",
      subsections: [
        {
          subtitle: "Технология печати",
          items: [
            { label: "Основной тип технологии (FDM, SLA, SLS и т.д.)", value: specifications.technology.printingTechnology.type },
            { label: "Детали конкретной реализации", value: specifications.technology.printingTechnology.implementation },
          ]
        },
        {
          subtitle: "Совместимость с материалами",
          items: [
            { label: "Поддерживаемые типы материалов", value: specifications.technology.materials.supportedMaterials },
            { label: "Характеристики картриджей/катушек с материалом", value: specifications.technology.materials.cartridgeSpecs },
            { label: "Рабочий диапазон температур для материалов", value: specifications.technology.materials.temperatureRange },
          ]
        }
      ]
    },
    {
      title: "Аппаратные характеристики",
      subsections: [
        {
          subtitle: "Габариты и вес",
          items: [
            { label: "Габариты принтера (Ш × Г × В)", value: specifications.hardware.dimensions.printerSize },
            { label: "Вес принтера", value: specifications.hardware.dimensions.weight },
            { label: "Требования к минимальному пространству для доступа и обслуживания", value: specifications.hardware.dimensions.requiredSpace },
          ]
        },
        {
          subtitle: "Управление и интерфейс",
          items: [
            { label: "Тип и характеристики интерфейса управления", value: specifications.hardware.interface.controlType },
            { label: "Разрешение и размер дисплея", value: specifications.hardware.interface.displaySpecs },
            { label: "Доступные языки интерфейса", value: specifications.hardware.interface.languages },
          ]
        },
        {
          subtitle: "Подключение",
          items: [
            { label: "Поддержка Wi-Fi и соответствующие стандарты", value: specifications.hardware.connectivity.wifi },
            { label: "Подключение по Ethernet", value: specifications.hardware.connectivity.ethernet },
            { label: "Варианты подключения по USB", value: specifications.hardware.connectivity.usb },
          ]
        }
      ]
    },
    {
      title: "Требования к среде эксплуатации и питанию",
      subsections: [
        {
          subtitle: "Условия эксплуатации",
          items: [
            { label: "Диапазон рабочих температур", value: specifications.environment.operating.temperatureRange },
            ...(specifications.environment.operating.humidity ? [{ label: "Требования к влажности", value: specifications.environment.operating.humidity }] : []),
          ]
        },
        {
          subtitle: "Характеристики электропитания",
          items: [
            { label: "Требования к напряжению (В, переменный ток)", value: specifications.environment.power.voltage },
            { label: "Энергопотребление (Ватт)", value: specifications.environment.power.consumption },
            { label: "Требования к частоте тока (Гц)", value: specifications.environment.power.frequency },
          ]
        }
      ]
    },
    {
      title: "Расширенные функции",
      subsections: [
        {
          subtitle: "Автоматизация и датчики",
          items: [
            { label: "Функция автоматического выравнивания платформы", value: specifications.advanced.automation.autoLeveling },
            { label: "Сенсорные системы для мониторинга процесса", value: specifications.advanced.automation.sensors },
            { label: "Функции автоматической подачи/загрузки материала", value: specifications.advanced.automation.autoFeed },
          ]
        },
        {
          subtitle: "Совместимость с ПО",
          items: [
            { label: "Совместимые операционные системы", value: specifications.advanced.software.compatibleOS },
            { label: "Поддерживаемые форматы файлов", value: specifications.advanced.software.fileFormats },
            { label: "Требуемые системные характеристики для ПО", value: specifications.advanced.software.systemRequirements },
          ]
        },
        {
          subtitle: "Контроль качества",
          items: [
            { label: "Функция определения усилия (Force sensing)", value: specifications.advanced.qualityControl.forceSensing },
            { label: "Системы контроля температуры", value: specifications.advanced.qualityControl.temperatureControl },
            { label: "Функции мониторинга печати в реальном времени", value: specifications.advanced.qualityControl.realTimeMonitoring },
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

export default StandardizedSpecifications;
