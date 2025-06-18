
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113C5A] mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#113C5A]">Отправить сообщение</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название компании" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-____" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Расскажите о ваших потребностях..." rows={4} />
              </div>
              <Button className="w-full bg-[#3498DB] hover:bg-[#1F669D]">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#113C5A] flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#3498DB]" />
                  <span>Телефон</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-[#1F669D]">+7 967 555 6884</p>
                <p className="text-gray-600">Пн-Пт: 9:00 - 18:00 (МСК)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#113C5A] flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-[#3498DB]" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-[#1F669D]">sales@3d-robots.com</p>
                <p className="text-gray-600">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#113C5A]">Юридический адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  191014, город Санкт-Петербург,<br />
                  Ковенский пер, д. 9 литера А,<br />
                  помещ. 5-н, 6-н офис 10
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
