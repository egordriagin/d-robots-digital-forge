
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Страница не найдена (404) - 3D Robots</title>
        <meta name="description" content="Запрашиваемая страница не найдена. Возможно, она была перемещена или удалена. Вернитесь на главную страницу 3D Robots для поиска нужного оборудования." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Страница не найдена (404) - 3D Robots" />
        <meta property="og:description" content="Запрашиваемая страница не найдена. Возможно, она была перемещена или удалена. Вернитесь на главную страницу 3D Robots." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="3D Robots" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Страница не найдена (404) - 3D Robots" />
        <meta name="twitter:description" content="Запрашиваемая страница не найдена. Вернитесь на главную страницу 3D Robots." />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="3D Robots" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
