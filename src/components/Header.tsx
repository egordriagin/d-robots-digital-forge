
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Главная", path: "/" },
    { name: "3D Принтеры", path: "/3d-printers" },
    { name: "3D Сканеры", path: "/3d-scanners" },
    { name: "Робо-собаки", path: "/robotic-dogs" },
    { name: "Роботы-гуманоиды", path: "/humanoid-robots" },
    { name: "Роботизированные руки", path: "/robotic-arms" },
    { name: "Лазерные станки", path: "/laser-cutters" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contact" },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-[#113C5A] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+7 967 555 6884</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>sales@3d-robots.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Надежные решения цифрового производства с 2025 года</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-[#3498DB] text-white p-2 rounded-lg font-bold text-xl">
              3D
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#113C5A]">3D Robots</h1>
              <p className="text-sm text-[#1F669D]">Цифровое производство</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, 7).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#3498DB] ${
                  isActiveRoute(item.path)
                    ? "text-[#3498DB] border-b-2 border-[#3498DB] pb-1"
                    : "text-[#113C5A]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex space-x-2">
              <Link to="/about">
                <Button variant="outline" size="sm" className="border-[#1F669D] text-[#1F669D] hover:bg-[#1F669D] hover:text-white">
                  О нас
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="sm" className="bg-[#3498DB] hover:bg-[#1F669D] text-white">
                  Связаться
                </Button>
              </Link>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-[#3498DB] ${
                        isActiveRoute(item.path)
                          ? "text-[#3498DB]"
                          : "text-[#113C5A]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
