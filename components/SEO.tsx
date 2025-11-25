import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Handle JSON-LD Schema
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }

  }, [title, description, schema, location]);

  return null;
};