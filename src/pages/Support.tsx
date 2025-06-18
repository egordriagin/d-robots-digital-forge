
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Техническая поддержка</h1>
          <p className="text-xl text-gray-600">Мы всегда готовы помочь вам с вашим оборудованием</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#113C5A] flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#3498DB]" />
                <span>Телефонная поддержка</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-[#1F669D] mb-2">+7 967 555 6884</p>
              <p className="text-gray-600 mb-4">Понедельник - Пятница: 9:00 - 18:00 (МСК)</p>
              <Button className="bg-[#3498DB] hover:bg-[#1F669D]">Позвонить</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#113C5A] flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#3498DB]" />
                <span>Email поддержка</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-[#1F669D] mb-2">sales@3d-robots.com</p>
              <p className="text-gray-600 mb-4">Ответим в течение 24 часов</p>
              <Button className="bg-[#3498DB] hover:bg-[#1F669D]">Написать</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#113C5A] mb-8 text-center">Услуги поддержки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#113C5A]">Установка и настройка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Профессиональная установка оборудования на вашей площадке</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#113C5A]">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Комплексное обучение работе с оборудованием</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#113C5A]">Сервисное обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Регулярное техническое обслуживание и ремонт</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
