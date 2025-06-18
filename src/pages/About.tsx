
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Star, Phone, Mail } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "1000+", label: "Довольных клиентов" },
    { number: "5+", label: "Стран присутствия" },
    { number: "100+", label: "Моделей оборудования" },
    { number: "2025", label: "Год основания" }
  ];

  const keyClients = [
    "МГТУ «СТАНКИН»", "X5 Group", "Аквафор", "Университет ИТМО",
    "МГУ имени М.В.Ломоносова", "Казанский Завод СК", "Татнефть",
    "ГУАП", "Политех", "МИСиС", "КАИ", "SUZUKI", "LG Electronics"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#3498DB] text-white px-4 py-2 mb-4">
            О компании
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#113C5A] mb-6">
            ООО «Аддитивные Системы и Робототехника»
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Мы — ведущий поставщик решений для цифрового производства, специализирующийся 
            на 3D-печати, робототехнике и автоматизации производственных процессов.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl lg:text-4xl font-bold text-[#3498DB] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#113C5A] mb-6">Наша история</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Компания 3D Robots была основана в 2025 году в Санкт-Петербурге с целью 
                предоставить российскому рынку доступ к передовым технологиям цифрового производства.
              </p>
              <p>
                За короткое время мы стали надежным партнером для более чем 1000 организаций, 
                включая ведущие университеты, исследовательские центры и промышленные предприятия.
              </p>
              <p>
                Мы активно участвуем в федеральных контрактах на территории Российской Федерации, 
                Армении, Республики Беларусь, Республики Казахстан и Кыргызской Республики.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=500&fit=crop"
              alt="Our office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#113C5A] mb-8 text-center">Наша миссия и ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#113C5A]">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Мы предлагаем только проверенное оборудование от ведущих мировых производителей 
                  с полной технической поддержкой.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1F669D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#113C5A]">Партнерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Мы строим долгосрочные отношения с клиентами, обеспечивая комплексную 
                  поддержку на всех этапах сотрудничества.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#113C5A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#113C5A]">Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Мы следим за новейшими технологиями и предлагаем самые современные 
                  решения для цифрового производства.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Clients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#113C5A] mb-8 text-center">Наши ключевые клиенты</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyClients.map((client, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-[#3498DB] transition-colors">
                <div className="text-[#1F669D] font-medium text-sm">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#113C5A]">Реквизиты компании</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-[#1F669D]">Полное наименование:</div>
                  <div className="text-gray-700">ООО «Аддитивные Системы и Робототехника»</div>
                </div>
                <div>
                  <div className="font-semibold text-[#1F669D]">ОГРН:</div>
                  <div className="text-gray-700">1257800036350</div>
                </div>
                <div>
                  <div className="font-semibold text-[#1F669D]">ИНН/КПП:</div>
                  <div className="text-gray-700">7840118890 / 784001001</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-[#1F669D]">Генеральный директор:</div>
                  <div className="text-gray-700">Макин Владислав Валерьевич</div>
                </div>
                <div>
                  <div className="font-semibold text-[#1F669D]">Юридический адрес:</div>
                  <div className="text-gray-700">191014, Санкт-Петербург, Ковенский пер, д. 9 литера А, помещ. 5-н, 6-н офис 10</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-[#113C5A] to-[#1F669D] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Свяжитесь с нами для получения персональной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+7 967 555 6884</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>sales@3d-robots.com</span>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/contact">
              <Button size="lg" className="bg-[#3498DB] hover:bg-white hover:text-[#113C5A] text-white">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
