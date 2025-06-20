
interface CategoryPageHeaderProps {
  title: string;
  description: string;
}

export const CategoryPageHeader = ({ title, description }: CategoryPageHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-[#113C5A] mb-4">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};
