
import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    if (!title) return;
    
    const previousTitle = document.title;
    document.title = `${title} - 3D Robots`;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
