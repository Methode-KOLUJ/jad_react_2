import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutH = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full py-10 px-6 rounded-lg shadow-lg dark:shadow-gray-900 mx-auto mb-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-500 dark:text-teal-600 text-center mb-8 uppercase"
      >
        {t("PrésentationTitle")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-800 dark:text-gray-100 text-center text-xl xl:text-2xl leading-relaxed"
      >
        {t("PrésentationP1")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-gray-800 dark:text-gray-100 text-center text-xl xl:text-2xl leading-relaxed mt-4"
      >
        {t("PrésentationP2")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-gray-800 dark:text-gray-100 text-center text-xl xl:text-2xl leading-relaxed mt-4"
      >
        {t("PrésentationP3")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mt-6"
      >
        <button className="px-6 py-4 mt-4 mb-6 text-lg font-semibold text-white bg-red-700 hover:bg-red-800 dark:bg-yellow-500 dark:hover:bg-yellow-600 rounded-lg shadow-md transition-transform mt-4">
          <Link to="/Activites">{t('PrésentationBtn')}</Link>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default AboutH;
