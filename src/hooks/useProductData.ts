import { useMemo } from 'react';
import { Product } from '../types/product';

export const useProductData = (productId: string): Product | null => {
  const product = useMemo(() => {
    console.log('Looking for product with ID:', productId);
    
    // This would normally fetch from an API or database
    // For now, returning mock data for different products
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
    
    if (productId === 'anycubic-photon-m3') {
      return {
        id: 'anycubic-photon-m3',
        name: 'Anycubic Photon M3 Max',
        category: '3d-printers',
        price: 899,
        originalPrice: 1199,
        description: 'Профессиональный SLA 3D-принтер с большой областью печати и высоким разрешением',
        features: [
          'Большая область печати 300×300×350 мм',
          'Высокое разрешение печати 0.01 мм',
          'Монохромный LCD экран 13.3"',
          'Быстрая полимеризация слоев',
          'Автоматическое выравнивание',
          'Wi-Fi подключение и удаленное управление'
        ],
        images: [
          '/lovable-uploads/8c6653a1-f30e-4468-8cd5-4a1ee630f498.png',
          '/lovable-uploads/c39058dc-e6c4-43e6-b8ec-f8ab67679a8b.png'
        ],
        specifications: {
          printingSpecs: [
            { label: 'Максимальные размеры печати (X × Y × Z)', value: '300 × 300 × 350 мм' },
            { label: 'Площадь платформы построения', value: '90,000 мм²' },
            { label: 'Максимальная длина создаваемой детали', value: '300 мм' },
            { label: 'Диапазон толщины слоя', value: '0.01 - 0.3 мм' },
            { label: 'Разрешение по XY', value: '0.05 мм' },
            { label: 'Допуски на точность размеров', value: '±0.05 мм' },
            { label: 'Минимально возможная толщина стенки', value: '0.2 мм' }
          ],
          technologySpecs: [
            { label: 'Основной тип технологии', value: 'SLA (Стереолитография)' },
            { label: 'Детали реализации', value: 'Монохромный LCD экран' },
            { label: 'Поддерживаемые материалы', value: 'Фотополимерные смолы (Standard, Tough, Flexible)' },
            { label: 'Источник света', value: 'LED массив + монохромный LCD' },
            { label: 'Длина волны света', value: '405 нм' },
            { label: 'Время полимеризации слоя', value: '1-3 секунды' }
          ],
          hardwareSpecs: [
            { label: 'Габариты принтера (Ш × Г × В)', value: '570 × 520 × 820 мм' },
            { label: 'Вес принтера', value: '28 кг' },
            { label: 'Минимальное пространство для обслуживания', value: '800 × 700 мм' },
            { label: 'Тип интерфейса управления', value: 'Цветной сенсорный экран 7"' },
            { label: 'Разрешение дисплея', value: '7 дюймов, цветной TFT' },
            { label: 'Поддержка Wi-Fi', value: 'Wi-Fi 802.11 b/g/n' },
            { label: 'Подключение по USB', value: 'USB Type-A' },
            { label: 'Объем бака для смолы', value: '2000 мл' }
          ],
          environmentSpecs: [
            { label: 'Диапазон рабочих температур', value: '15-35°C' },
            { label: 'Требования к влажности', value: '30-70% без конденсации' },
            { label: 'Требования к напряжению', value: '100-240 В, 50/60 Гц' },
            { label: 'Энергопотребление', value: '120 Вт' },
            { label: 'Частота тока', value: '50/60 Гц' }
          ],
          advancedFeatures: [
            { label: 'Автоматическое выравнивание платформы', value: 'Да, механическое' },
            { label: 'Система фильтрации воздуха', value: 'Встроенный угольный фильтр' },
            { label: 'Датчик уровня смолы', value: 'Да' },
            { label: 'Совместимые ОС', value: 'Windows, macOS, Linux' },
            { label: 'Поддерживаемые форматы файлов', value: '.photons, .stl, .obj' },
            { label: 'Функция паузы печати', value: 'Да' },
            { label: 'Подогрев смолы', value: 'Да, до 40°C' },
            { label: 'Защитная крышка', value: 'UV-защитная крышка' }
          ]
        }
      };
    }
    
    // Add more products to match the catalog
    if (productId === 'unitree-go2-pro') {
      return {
        id: 'unitree-go2-pro',
        name: 'Unitree Go2 Pro',
        category: 'robotic-dogs',
        price: 2999,
        description: 'Продвинутый четвероногий робот с возможностями ИИ',
        features: [
          'Продвинутая система навигации',
          'Автономная работа до 2 часов',
          'Камера высокого разрешения',
          'Голосовое управление',
          'Защита от воды и пыли IP67'
        ],
        images: [
          '/lovable-uploads/7a11ebf8-8517-4e5f-a5f5-536dff738aa3.png'
        ],
        specifications: {
          printingSpecs: [],
          technologySpecs: [
            { label: 'Процессор', value: 'ARM Cortex-A78' },
            { label: 'Операционная система', value: 'Linux Ubuntu' },
            { label: 'Связь', value: 'Wi-Fi 6, Bluetooth 5.0, 4G LTE' }
          ],
          hardwareSpecs: [
            { label: 'Размеры (Д × Ш × В)', value: '645 × 280 × 400 мм' },
            { label: 'Вес', value: '15 кг' },
            { label: 'Максимальная скорость', value: '17 км/ч' },
            { label: 'Время работы батареи', value: '2 часа' }
          ],
          environmentSpecs: [
            { label: 'Рабочая температура', value: '-10°C до +40°C' },
            { label: 'Степень защиты', value: 'IP67' }
          ],
          advancedFeatures: [
            { label: 'Автономная навигация', value: 'Да' },
            { label: 'Голосовое управление', value: 'Да' },
            { label: 'Удаленное управление', value: 'Да, через приложение' }
          ]
        }
      };
    }
    
    console.log('Product not found for ID:', productId);
    return null;
  }, [productId]);

  return product;
};
