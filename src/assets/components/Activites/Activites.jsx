import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "../SEO";

const Activites = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null); // Gère quelle carte est active

  const activities = [
    {
      id: 1,
      image: "/images/Bumi.jpeg",
      title: `${t("Bumi")}`,
      description: `${t("BumiDesc")}`,
    },
    {
      id: 2,
      image: "/images/kamanyola.jpeg",
      title: `${t("Kamanyola")}`,
      description: `${t("KamanyolaDesc")}`,
    },
    {
      id: 3,
      image: "/images/Av Lumumba.jpeg",
      title: `${t("Lumumba")}`,
      description: `${t("LumumbaDesc")}`,
    },
    {
      id: 4,
      image: "/images/Poste.jpeg",
      title: `${t("fontaine")}`,
      description: `${t("fontaineDesc")}`,
    },
    {
      id: 5,
      image: "/images/Slider 4.jpeg",
      title: "???",
      description: "???",
    },
    {
      id: 6,
      image: "/images/Slider 2.jpeg",
      title: `${t("Kabila")}`,
      description: `${t("KabilaDesc")}`,
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id); 
  };

  return (
    <section className="py-6 text-center mt-20 min-h-screen bg-white dark:bg-black">
      <SEO
        title="Nos activités | ONG JAD"
        description="Les activités caritatives de l'ONG JAD."
        keywords="Activités, ONG JAD, Partages, Organisation"
      />
      
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-600 dark:text-teal-500 text-center mb-8 uppercase"
      >
        {t("NosActivites")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleCardClick(activity.id)}
            whileHover={{ scale: 1.02 }} // Animation au survol pour tous
            whileTap={{ scale: 0.98 }} // Animation au clic pour tous
          >
            {/* Image */}
            <motion.img
              src={activity.image}
              alt={activity.title}
              loading="lazy"
              className="w-full h-64 object-cover opacity-100 dark:opacity-90 border-2 border-gray-900 dark:border-white"
            />

            {/* Overlay - visible uniquement si la carte est active */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-80 flex items-end p-6"
              initial={{ y: "100%" }}
              animate={{ y: activeCard === activity.id ? 0 : "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-extrabold uppercase text-orange-400 text-justify">
                  {activity.title}
                </h3>
                <p className="text-lg md:text-xl mt-2 text-justify font-semibold">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Activites;
