
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScannerSpecifications } from "@/types/scanner-specifications";

interface ScannerSpecificationsProps {
  specifications: ScannerSpecifications;
}

const ScannerSpecificationsComponent: React.FC<ScannerSpecificationsProps> = ({ specifications }) => {
  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-[#113C5A] mb-6">Технические характеристики 3D сканера</h3>
        
        <Tabs defaultValue="accuracy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="accuracy">Точность</TabsTrigger>
            <TabsTrigger value="speed">Скорость</TabsTrigger>
            <TabsTrigger value="range">Диапазон</TabsTrigger>
            <TabsTrigger value="technology">Технология</TabsTrigger>
            <TabsTrigger value="compatibility">Совместимость</TabsTrigger>
            <TabsTrigger value="software">ПО</TabsTrigger>
            <TabsTrigger value="hardware">Оборудование</TabsTrigger>
            <TabsTrigger value="advanced">Дополнительно</TabsTrigger>
          </TabsList>

          <TabsContent value="accuracy" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Точность точки</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Диапазон:</span>
                    <span className="font-medium">{specifications.accuracy.pointAccuracy.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Типичная:</span>
                    <span className="font-medium">{specifications.accuracy.pointAccuracy.typical}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Измерение:</span>
                    <span className="font-medium">{specifications.accuracy.pointAccuracy.measurement}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Объемная точность</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Базовая:</span>
                    <span className="font-medium">{specifications.accuracy.volumetricAccuracy.baseAccuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Коэффициент:</span>
                    <span className="font-medium">{specifications.accuracy.volumetricAccuracy.distanceCoefficient}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {specifications.accuracy.volumetricAccuracy.formula}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Разрешение</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Измерительное:</span>
                    <span className="font-medium">{specifications.accuracy.resolution.measurementResolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Расстояние точек:</span>
                    <span className="font-medium">{specifications.accuracy.resolution.pointDistance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сетка вывода:</span>
                    <span className="font-medium">{specifications.accuracy.resolution.outputMeshResolution}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="speed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Частота кадров</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">FPS:</span>
                    <span className="font-medium">{specifications.speed.frameRate.fps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Диапазон:</span>
                    <span className="font-medium">{specifications.speed.frameRate.range}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {specifications.speed.frameRate.conditions}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Скорость измерения</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Точки/сек:</span>
                    <span className="font-medium">{specifications.speed.measurementSpeed.pointsPerSecond}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Измерений/сек:</span>
                    <span className="font-medium">{specifications.speed.measurementSpeed.measurementsPerSecond}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сбор данных:</span>
                    <span className="font-medium">{specifications.speed.measurementSpeed.dataAcquisition}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Режимы сканирования</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Быстрый:</span>
                    <span className="font-medium">{specifications.speed.scanningModes.fastMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Точный:</span>
                    <span className="font-medium">{specifications.speed.scanningModes.precisionMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стандартный:</span>
                    <span className="font-medium">{specifications.speed.scanningModes.standardMode}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="range" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Поле зрения (FOV)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Одно сканирование:</span>
                    <span className="font-medium">{specifications.captureRange.fieldOfView.singleScan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ширина:</span>
                    <span className="font-medium">{specifications.captureRange.fieldOfView.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Высота:</span>
                    <span className="font-medium">{specifications.captureRange.fieldOfView.height}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Глубина резкости (DOF)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Диапазон:</span>
                    <span className="font-medium">{specifications.captureRange.depthOfField.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Оптимальная:</span>
                    <span className="font-medium">{specifications.captureRange.depthOfField.optimal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Минимальная:</span>
                    <span className="font-medium">{specifications.captureRange.depthOfField.minimum}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Рабочее расстояние</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Диапазон:</span>
                    <span className="font-medium">{specifications.captureRange.workingDistance.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Оптимальное:</span>
                    <span className="font-medium">{specifications.captureRange.workingDistance.optimal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">До объекта:</span>
                    <span className="font-medium">{specifications.captureRange.workingDistance.objectDistance}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Размер объекта</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Минимальный:</span>
                    <span className="font-medium">{specifications.captureRange.objectSize.minimum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Максимальный:</span>
                    <span className="font-medium">{specifications.captureRange.objectSize.maximum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Рекомендуемый:</span>
                    <span className="font-medium">{specifications.captureRange.objectSize.recommended}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technology" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Технология сканирования</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Тип:</span>
                    <Badge variant="outline">{specifications.technology.scanningTechnology.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Реализация:</span>
                    <span className="font-medium">{specifications.technology.scanningTechnology.implementation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Источник света:</span>
                    <span className="font-medium">{specifications.technology.scanningTechnology.lightSource}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Оборудование</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Камеры:</span>
                    <span className="font-medium">{specifications.technology.hardware.cameras}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Проекторы:</span>
                    <span className="font-medium">{specifications.technology.hardware.projectors}</span>
                  </div>
                  {specifications.technology.hardware.laserClass && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Класс лазера:</span>
                      <Badge variant="outline">{specifications.technology.hardware.laserClass}</Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h4 className="font-semibold text-[#113C5A] text-lg">Отслеживание и позиционирование</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-gray-600 block mb-2">Методы выравнивания:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.technology.tracking.alignmentMethods.map((method, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{method}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Режим отслеживания:</span>
                    <Badge>{specifications.technology.tracking.trackingMode}</Badge>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Поддержка маркеров:</span>
                    <Badge variant="outline">{specifications.technology.tracking.markerSupport}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Размер объекта</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Рекомендуемый диапазон:</span>
                    <span className="font-medium">{specifications.compatibility.objectSize.recommendedRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Типичные характеристики:</span>
                    <span className="font-medium">{specifications.compatibility.objectSize.typicalCharacteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Максимальный размер:</span>
                    <span className="font-medium">{specifications.compatibility.objectSize.maximumSize}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Требования к поверхности</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-2">Совместимые поверхности:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.compatibility.surfaceRequirements.compatibleSurfaces.map((surface, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{surface}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-1">Обработка поверхности:</span>
                    <span className="text-sm">{specifications.compatibility.surfaceRequirements.surfaceTreatment}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Ограничения:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.compatibility.surfaceRequirements.limitations.map((limitation, index) => (
                        <Badge key={index} variant="destructive" className="text-xs">{limitation}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h4 className="font-semibold text-[#113C5A] text-lg">Материалы</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-gray-600 block mb-2">Поддерживаемые:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.compatibility.materials.supported.map((material, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{material}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Сложные:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.compatibility.materials.challenging.map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{material}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-1">Предобработка:</span>
                    <span className="text-sm">{specifications.compatibility.materials.preprocessing}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Форматы вывода</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-2">Форматы файлов:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.software.outputFormats.fileFormats.map((format, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{format}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Форматы сетки:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.software.outputFormats.meshFormats.map((format, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{format}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Облако точек:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.software.outputFormats.cloudFormats.map((format, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{format}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Совместимость системы</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-2">ОС:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.software.systemCompatibility.operatingSystems.map((os, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{os}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Мобильная поддержка:</span>
                    <span className="font-medium">{specifications.software.systemCompatibility.mobileSupport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Облачная обработка:</span>
                    <span className="font-medium">{specifications.software.systemCompatibility.cloudProcessing}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h4 className="font-semibold text-[#113C5A] text-lg">Системные требования</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-[#1F669D] mb-3">Минимальные требования</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">ОЗУ:</span>
                        <span>{specifications.software.requirements.minimumSpecs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Процессор:</span>
                        <span>{specifications.software.requirements.minimumSpecs.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Графика:</span>
                        <span>{specifications.software.requirements.minimumSpecs.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Хранилище:</span>
                        <span>{specifications.software.requirements.minimumSpecs.storage}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#1F669D] mb-3">Рекомендуемые требования</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">ОЗУ:</span>
                        <span>{specifications.software.requirements.recommendedSpecs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Процессор:</span>
                        <span>{specifications.software.requirements.recommendedSpecs.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Графика:</span>
                        <span>{specifications.software.requirements.recommendedSpecs.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Хранилище:</span>
                        <span>{specifications.software.requirements.recommendedSpecs.storage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hardware" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Физические характеристики</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Вес сканера:</span>
                    <span className="font-medium">{specifications.hardware.physicalSpecs.scannerWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Размеры:</span>
                    <span className="font-medium">{specifications.hardware.physicalSpecs.scannerDimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Портативность:</span>
                    <Badge variant="outline">{specifications.hardware.physicalSpecs.portability}</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Подключение</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Кабели:</span>
                    <span className="font-medium">{specifications.hardware.connectivity.cableSpecs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Тип соединения:</span>
                    <span className="font-medium">{specifications.hardware.connectivity.connectionType}</span>
                  </div>
                  {specifications.hardware.connectivity.wirelessOptions && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Беспроводные:</span>
                      <span className="font-medium">{specifications.hardware.connectivity.wirelessOptions}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Классификация</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Тип:</span>
                    <Badge>{specifications.hardware.classification.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Мобильность:</span>
                    <span className="font-medium">{specifications.hardware.classification.mobility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Время настройки:</span>
                    <span className="font-medium">{specifications.hardware.classification.setupTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Условия эксплуатации</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Помещение/улица:</span>
                    <span className="font-medium">{specifications.advanced.operatingConditions.indoorOutdoor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Освещение:</span>
                    <span className="font-medium">{specifications.advanced.operatingConditions.lightingRequirements}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-2">Ограничения среды:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.advanced.operatingConditions.environmentalLimitations.map((limitation, index) => (
                        <Badge key={index} variant="destructive" className="text-xs">{limitation}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#113C5A] text-lg">Режимы сканирования</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-2">Доступные режимы:</span>
                    <div className="flex flex-wrap gap-1">
                      {specifications.advanced.scanningModes.availableModes.map((mode, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{mode}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Захват текстуры:</span>
                    <span className="font-medium">{specifications.advanced.scanningModes.textureCapture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Захват цвета:</span>
                    <span className="font-medium">{specifications.advanced.scanningModes.colorCapture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Обработка в реальном времени:</span>
                    <span className="font-medium">{specifications.advanced.scanningModes.realTimeProcessing}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h4 className="font-semibold text-[#113C5A] text-lg">Контроль качества</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Автокалибровка:</span>
                      <span className="font-medium">{specifications.advanced.qualityControl.autoCalibration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Обнаружение ошибок:</span>
                      <span className="font-medium">{specifications.advanced.qualityControl.errorDetection}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Оценка качества:</span>
                      <span className="font-medium">{specifications.advanced.qualityControl.qualityAssessment}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block mb-2">Инструменты ПО:</span>
                      <div className="flex flex-wrap gap-1">
                        {specifications.advanced.qualityControl.softwareTools.map((tool, index) => (
                          <Badge key={index} variant="outline" className="text-xs">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScannerSpecificationsComponent;
