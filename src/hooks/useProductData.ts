
import { useMemo } from 'react';
import { Product } from '../types/product';

export const useProductData = (productId: string): Product | null => {
  const product = useMemo(() => {
    // This would normally fetch from an API or database
    // For now, returning mock data for the Bambu X1E
    if (productId === 'bambu-x1e') {
      return {
        id: 'bambu-x1e',
        name: 'Bambu Lab X1E',
        category: '3d-printers',
        price: 1299,
        originalPrice: 1599,
        description: 'Профессиональный 3D-принтер с автоматической калибровкой и высокой скоростью печати',
        features: [
          'Автоматическая калибровка платформы',
          'Система автоматической смены цветов AMS',
          'Закрытая камера печати',
          'Wi-Fi подключение и удаленное управление',
          'Высокая скорость печати до 500 мм/с',
          'Поддержка широкого спектра материалов'
        ],
        images: [
          '/lovable-uploads/8c6653a1-f30e-4468-8cd5-4a1ee630f498.png',
          '/lovable-uploads/c39058dc-e6c4-43e6-b8ec-f8ab67679a8b.png'
        ],
        specifications: {
          printingSpecs: [
            { label: 'Максимальные размеры печати (X × Y × Z)', value: '256 × 256 × 256 мм' },
            { label: 'Площадь платформы построения', value: '65,536 мм²' },
            { label: 'Максимальная длина создаваемой детали', value: '256 мм' },
            { label: 'Диапазон толщины слоя', value: '0.08 - 0.35 мм' },
            { label: 'Разрешение по XY', value: '0.1 мм' },
            { label: 'Допуски на точность размеров', value: '±0.1 мм' },
            { label: 'Минимально возможная толщина стенки', value: '0.4 мм' }
          ],
          technologySpecs: [
            { label: 'Основной тип технологии', value: 'FDM' },
            { label: 'Детали реализации', value: 'Закрытая камера с подогревом' },
            { label: 'Поддерживаемые материалы', value: 'PLA, PETG, ABS, ASA, PC, PA, PET-CF, PA-CF' },
            { label: 'Диаметр филамента', value: '1.75 мм' },
            { label: 'Рабочий диапазон температур экструдера', value: 'до 300°C' },
            { label: 'Рабочий диапазон температур платформы', value: 'до 120°C' }
          ],
          hardwareSpecs: [
            { label: 'Габариты принтера (Ш × Г × В)', value: '389 × 389 × 457 мм' },
            { label: 'Вес принтера', value: '14.5 кг' },
            { label: 'Минимальное пространство для обслуживания', value: '600 × 600 мм' },
            { label: 'Тип интерфейса управления', value: 'Цветной сенсорный экран 5"' },
            { label: 'Разрешение дисплея', value: '5 дюймов, цветной TFT' },
            { label: 'Поддержка Wi-Fi', value: 'Wi-Fi 802.11 b/g/n' },
            { label: 'Подключение по Ethernet', value: 'Да' },
            { label: 'Варианты USB подключения', value: 'USB Type-A, micro SD' }
          ],
          environmentSpecs: [
            { label: 'Диапазон рабочих температур', value: '16-30°C' },
            { label: 'Требования к влажности', value: '20-90% без конденсации' },
            { label: 'Требования к напряжению', value: '100-240 В, 50/60 Гц' },
            { label: 'Энергопотребление', value: '350 Вт' },
            { label: 'Частота тока', value: '50/60 Гц' }
          ],
          advancedFeatures: [
            { label: 'Автоматическое выравнивание платформы', value: 'Да, с помощью лидара' },
            { label: 'Сенсорные системы мониторинга', value: 'AI камера, датчик вибрации' },
            { label: 'Автоматическая подача материала', value: 'AMS система на 4 катушки' },
            { label: 'Совместимые ОС', value: 'Windows, macOS, Linux' },
            { label: 'Поддерживаемые форматы файлов', value: '.gcode, .3mf, .stl' },
            { label: 'Функция определения усилия', value: 'Да' },
            { label: 'Контроль температуры', value: 'Автоматический PID контроль' },
            { label: 'Мониторинг в реальном времени', value: 'Да, через AI камеру' }
          ]
        }
      };
    }
    return null;
  }, [productId]);

  return product;
};
