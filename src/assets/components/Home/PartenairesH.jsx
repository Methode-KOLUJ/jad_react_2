import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const partners = [
  { name: "Aqua Pischon", img: "/Partenaires/Aqua.jpeg" },
  { name: "Atlantic Traiteur", img: "/Partenaires/Atlantic.jpeg" },
  { name: "Bora", img: "/Partenaires/Bora.jpeg" },
  { name: "Jésus Christ au Centre", img: "/Partenaires/Christ.jpeg" },
  { name: "Focus Empire", img: "/Partenaires/Empire.jpeg" },
  { name: "MEG", img: "/Partenaires/MEG.jpeg" },
  { name: "MLS", img: "/Partenaires/MLS.jpeg" },
  { name: "Muzuri Realty", img: "/Partenaires/Muzuri.jpeg" },
  { name: "Travel Booking", img: "/Partenaires/Travel.jpeg" },
  { name: "HDesign Creative", img: "/Partenaires/Creative.jpeg" },
];

const PartenaireH = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-8 mb-2 shadow-lg dark:shadow-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-600 dark:text-teal-600 text-center mb-16 mt-6 uppercase"
      >
        {t("PartenaireTitle")}
      </motion.h2>
      <Marquee direction="left" speed={50} pauseOnHover>
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <img
              src={partner.img}
              alt={partner.name}
              className="dark:opacity-90 w-24 h-24 xl:w-40 xl:h-40 rounded-full border-2 border-gray-400 dark:border-gray-200 shadow-lg"
            />
            <p className="mt-2 text-sm lg/xl:text-lg font-semibold text-gray-600 dark:text-gray-300">
              {partner.name}
            </p>
          </div>
        ))}
      </Marquee>
      {/* Ajoutez le bouton "En savoir plus" ici */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mt-6"
      >
        <Link
          to="/Partenaires"
          className="px-6 py-4 mt-4 mb-6 bg-red-700 hover:bg-red-800 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-transform transition-colors"
        >
          {t("PartenaireBtn")}
        </Link>  
      </motion.div>
    </div>
  );
};

export default PartenaireH;
