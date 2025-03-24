import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const SEO = ({ title, description, keywords, canonical, children }) => {
  const defaultTitle = "ONG JAD";
  const defaultDescription = "Le site officiel de l'ONG JAD.";
  const defaultKeywords = "ONG, JAD, ASBL, ONGD";

  // Gérer `window.location.href` côté client uniquement
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonical || currentURL} />
      {children}
    </Helmet>
  );
};

export default SEO;
