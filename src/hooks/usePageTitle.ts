
import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} - 3D Robots`;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
