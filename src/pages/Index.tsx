import { usePageTitle } from "@/hooks/usePageTitle";
import { useMetaData } from "@/hooks/useMetaData";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { MigrationRunner } from "@/components/MigrationRunner";

const Index = () => {
  usePageTitle("Главная | D-Robots Digital Forge");
  useMetaData(
    "D-Robots Digital Forge - Профессиональное 3D оборудование",
    "Широкий выбор 3D принтеров, сканеров, роботов и лазерных граверов. Профессиональные решения для бизнеса и образования."
  );

  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Error loading products:', error);
  }

  // Show migration tool if no products are available
  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">D-Robots Digital Forge</h1>
          <p className="text-gray-600 mb-8">Добро пожаловать! Давайте настроим ваш каталог продуктов.</p>
        </div>
        <MigrationRunner />
      </div>
    );
  }

  const popularProducts = products?.filter(product => product.popular) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          D-Robots Digital Forge
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ваш надежный партнер в мире высокотехнологичного оборудования. 
          Предлагаем широкий выбор 3D принтеров, сканеров, роботизированных систем и лазерных станков 
          для профессионального использования.
        </p>
      </div>

      {popularProducts.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Популярные продукты</h2>
            <a 
              href="/3d-printers" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Смотреть все →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.slice(0, 6).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                category={product.category}
              />
            ))}
          </div>
        </section>
      )}

      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Наши категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "3D Принтеры",
              description: "Профессиональные FDM и SLA принтеры",
              link: "/3d-printers",
              icon: "🖨️"
            },
            {
              title: "3D Сканеры",
              description: "Высокоточные системы 3D сканирования",
              link: "/3d-scanners",
              icon: "📸"
            },
            {
              title: "Роботы-собаки",
              description: "Четвероногие роботы для исследований",
              link: "/robotic-dogs",
              icon: "🐕"
            },
            {
              title: "Гуманоидные роботы",
              description: "Антропоморфные роботы для образования",
              link: "/humanoid-robots",
              icon: "🤖"
            },
            {
              title: "Роботизированные руки",
              description: "Промышленные манипуляторы",
              link: "/robotic-arms",
              icon: "🦾"
            },
            {
              title: "Лазерные граверы",
              description: "Прецизионная лазерная обработка",
              link: "/laser-cutters",
              icon: "⚡"
            }
          ].map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
