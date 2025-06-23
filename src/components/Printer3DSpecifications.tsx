import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PrinterSpecifications } from "@/types/printer-specifications";

interface Printer3DSpecificationsProps {
  specifications: PrinterSpecifications;
}

const Printer3DSpecifications: React.FC<Printer3DSpecificationsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Технология и материалы",
      subsections: [
        {
          subtitle: "Технология печати",
          items: [
            { label: "Основной тип технологии", value: specifications.printingTechnology_type },
            { label: "Детали реализации", value: specifications.printingTechnology_implementation },
          ]
        },
        {
          subtitle: "Совместимость с материалами",
          items: [
            { label: "Поддерживаемые материалы", value: specifications.materials_supportedMaterials },
            { label: "Характеристики катушек", value: specifications.materials_cartridgeSpecs },
            { label: "Рабочий диапазон температур", value: specifications.materials_temperatureRange },
          ]
        }
      ]
    },
    {
      title: "Характеристики печати",
      subsections: [
        {
          subtitle: "Область построения",
          items: [
            { label: "Макс. размеры печати (X × Y × Z)", value: specifications.buildVolume_dimensions },
            { label: "Площадь платформы", value: specifications.buildVolume_area },
            { label: "Макс. длина детали", value: specifications.buildVolume_maxLength },
          ]
        },
        {
          subtitle: "Разрешение и точность",
          items: [
            { label: "Диапазон толщины слоя", value: specifications.resolution_layerHeight },
            { label: "Разрешение по XY", value: specifications.resolution_xyResolution },
            { label: "Точность размеров", value: specifications.resolution_dimensionalAccuracy },
            { label: "Мин. толщина стенки", value: specifications.resolution_minWallThickness },
          ]
        },
        {
          subtitle: "Скорость печати",
          items: [
            { label: "Макс. скорость", value: specifications.speed_maxSpeed },
            { label: "Типичный диапазон скорости", value: specifications.speed_typicalRange },
            { label: "Скорость в зависимости от материала", value: specifications.speed_materialDependent },
          ]
        }
      ]
    },
    {
        title: "Расширенные функции и ПО",
        subsections: [
          {
            subtitle: "Автоматизация и датчики",
            items: [
              { label: "Автовыравнивание платформы", value: specifications.automation_autoLeveling },
              { label: "Сенсорные системы", value: specifications.automation_sensors },
              { label: "Автоподача материала", value: specifications.automation_autoFeed },
            ]
          },
          {
            subtitle: "Контроль качества",
            items: [
              { label: "Определение усилия (Force sensing)", value: specifications.qualityControl_forceSensing },
              { label: "Контроль температуры", value: specifications.qualityControl_temperatureControl },
              { label: "Мониторинг в реальном времени", value: specifications.qualityControl_realTimeMonitoring },
            ]
          },
          {
            subtitle: "Совместимость с ПО",
            items: [
              { label: "Совместимые ОС", value: specifications.software_compatibleOS },
              { label: "Поддерживаемые форматы файлов", value: specifications.software_fileFormats },
              { label: "Системные требования для ПО", value: specifications.software_systemRequirements },
            ]
          }
        ]
      },
    {
      title: "Аппаратные характеристики и эксплуатация",
      subsections: [
        {
          subtitle: "Габариты и вес",
          items: [
            { label: "Габариты принтера (Ш × Г × В)", value: specifications.dimensions_printerSize },
            { label: "Вес принтера", value: specifications.dimensions_weight },
            { label: "Требуемое пространство", value: specifications.dimensions_requiredSpace },
          ]
        },
        {
          subtitle: "Управление и подключение",
          items: [
            { label: "Интерфейс управления", value: specifications.interface_controlType },
            { label: "Дисплей", value: specifications.interface_displaySpecs },
            { label: "Языки интерфейса", value: specifications.interface_languages },
            { label: "Поддержка Wi-Fi", value: specifications.connectivity_wifi },
            { label: "Подключение по Ethernet", value: specifications.connectivity_ethernet },
            { label: "Подключение по USB", value: specifications.connectivity_usb },
          ]
        },
        {
          subtitle: "Условия эксплуатации и питание",
          items: [
            { label: "Диапазон рабочих температур", value: specifications.operating_temperatureRange },
            { label: "Требования к влажности", value: specifications.operating_humidity },
            { label: "Требования к напряжению", value: specifications.power_voltage },
            { label: "Энергопотребление", value: specifications.power_consumption },
            { label: "Частота тока", value: specifications.power_frequency },
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
                          {item.value || '—'}
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

export default Printer3DSpecifications;
