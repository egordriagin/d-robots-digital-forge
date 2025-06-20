
import { SEOData } from "@/types/seo";

export const servicePagesSEO: { [key: string]: SEOData } = {
  about: {
    title: "О компании - 3D Robots | Поставщик промышленного оборудования",
    description: "3D Robots - ведущий поставщик 3D-принтеров, роботизированных систем и лазерного оборудования для промышленности и образования. Официальный дилер Bambu Lab, Unitree, Dobot в России и ЕАЭС.",
    keywords: "о компании 3D Robots, поставщик промышленного оборудования, официальный дилер, Bambu Lab, Unitree, Dobot",
    ogImage: "https://3d-robots.com/images/about-og-image.jpg",
    robots: "index, follow"
  },
  contact: {
    title: "Контакты - 3D Robots",
    description: "Свяжитесь с 3D Robots для получения консультации по выбору оборудования. Телефон: +7 967 555 6884, Email: sales@3d-robots.com. Офис в Санкт-Петербурге, обслуживание по России и ЕАЭС.",
    keywords: "контакты 3D Robots, телефон, email, адрес, консультация, техническая поддержка",
    ogImage: "https://3d-robots.com/images/contact-og-image.jpg",
    robots: "index, follow"
  },
  support: {
    title: "Техническая поддержка - 3D Robots",
    description: "Техническая поддержка 3D Robots: установка, настройка, обучение персонала, сервисное обслуживание оборудования. Телефон поддержки: +7 967 555 6884. Работаем Пн-Пт 9:00-18:00 МСК.",
    keywords: "техническая поддержка, установка оборудования, настройка, обучение, сервис, ремонт 3D принтеров",
    ogImage: "https://3d-robots.com/images/support-og-image.jpg",
    robots: "index, follow"
  }
};
