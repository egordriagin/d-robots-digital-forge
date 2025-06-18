
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#113C5A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#3498DB] text-white p-2 rounded-lg font-bold text-xl">
                3D
              </div>
              <div>
                <h3 className="text-xl font-bold">3D Robots</h3>
                <p className="text-sm text-gray-300">ООО «Аддитивные Системы и Робототехника»</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Надежный поставщик решений для цифрового производства. Более 1000 организаций 
              по всему миру доверяют нашим передовым технологиям.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#3498DB]" />
                <span>+7 967 555 6884</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#3498DB]" />
                <span>sales@3d-robots.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3498DB]">Продукция</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/3d-printers" className="text-gray-300 hover:text-white transition-colors">3D Принтеры</Link></li>
              <li><Link to="/3d-scanners" className="text-gray-300 hover:text-white transition-colors">3D Сканеры</Link></li>
              <li><Link to="/robotic-dogs" className="text-gray-300 hover:text-white transition-colors">Робо-собаки</Link></li>
              <li><Link to="/humanoid-robots" className="text-gray-300 hover:text-white transition-colors">Роботы-гуманоиды</Link></li>
              <li><Link to="/robotic-arms" className="text-gray-300 hover:text-white transition-colors">Роботизированные руки</Link></li>
              <li><Link to="/laser-cutters" className="text-gray-300 hover:text-white transition-colors">Лазерные станки</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3498DB]">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Техподдержка</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2025 ООО «Аддитивные Системы и Робототехника». Все права защищены.</p>
              <p>ИНН: 7840118890 | ОГРН: 1257800036350</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>191014, Санкт-Петербург, Ковенский пер, д. 9</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
