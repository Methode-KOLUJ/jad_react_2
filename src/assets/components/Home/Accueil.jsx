import React from "react";
import Slider from "./Slider";
import AboutH from "./AboutH";
import PartenaireH from "./PartenairesH";
import Footer from "../Footer/Footer";
import SEO from "../SEO"

const Accueil = () => {
  return (
    <>
      <div className="mt-20 bg-white dark:bg-black">
        <SEO
          title="Accueil | ONG JAD"
          description="Bienvenue sur le site officiel de l'ONG JAD, engagée pour un avenir meilleur."
          keywords="ONG, aide humanitaire, développement durable"
        />
        <div>
          <Slider />
        </div>
        <div>
          <AboutH />
        </div>
        <div>
          <PartenaireH />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Accueil;
