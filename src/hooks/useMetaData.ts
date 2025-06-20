
import { useEffect } from 'react';

export const useMetaData = (title: string, description: string) => {
  useEffect(() => {
    // Set page title
    const previousTitle = document.title;
    document.title = `${title} - 3D Robots`;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const previousDescription = metaDescription.getAttribute('content');
    metaDescription.setAttribute('content', description);
    
    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        metaDescription?.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
};
