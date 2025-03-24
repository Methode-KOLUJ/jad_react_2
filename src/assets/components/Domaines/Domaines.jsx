import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "../SEO";

import {
  FaPrayingHands,
  FaUserGraduate,
  FaBusinessTime,
  FaHeartbeat,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaBrain,
} from "react-icons/fa";
import "./Domaines.css";

// Définition des différentes animations
const animationVariants = [
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
];

const Domaines = () => {
  const { t, i18n } = useTranslation();

  const domains = [
    {
      name: ` ${t("Evangile")}`,
      icon: <FaPrayingHands />,
      color: "text-yellow-500",
    },
    { name: ` ${t("DevPerso")}`, icon: <FaBrain />, color: "text-purple-500" },
    {
      name: ` ${t("Entreprenariat")}`,
      icon: <FaBusinessTime />,
      color: "text-green-500",
    },
    {
      name: ` ${t("Education")}`,
      icon: <FaUserGraduate />,
      color: "text-blue-500",
    },
    { name: ` ${t("Santé")}`, icon: <FaHeartbeat />, color: "text-red-500" },
    {
      name: ` ${t("Assistance")}`,
      icon: <FaHandsHelping />,
      color: "text-pink-500",
    },
    {
      name: ` ${t("Coaching")}`,
      icon: <FaChalkboardTeacher />,
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-6 text-center mt-20 bg-white dark:bg-black min-h-screen">
      <SEO
        title="Domaines | ONG JAD"
        description="Les domaines d'activités de l'ONG JAD."
        keywords="Domaines, Interventions, Compétences, ONG JAD"
      />
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-600 dark:text-teal-500 text-center mb-12 uppercase"
      >
        {t("DomainesH1")}
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain, index) => {
          const variant = animationVariants[index % animationVariants.length];

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              variants={variant}
              id="DomainBox"
              className="flex flex-col items-center p-6 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-sm shadow-gray-700 dark:shadow-gray-200 
                w-[90%] sm:w-[80%] md:w-full mx-auto"
            >
              <div className={`text-5xl mb-4 ${domain.color}`}>
                {domain.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {domain.name}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Domaines;
