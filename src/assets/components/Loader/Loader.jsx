import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "react-i18next";


const Loader = () => {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [ ` ${t('Education')}`,
   ` ${t('Evangile')}`,
` ${t('DevPerso')}`, 
` ${t('Entreprenariat')}`,
` ${t('Santé')}`,
` ${t('Assistance')}`,
` ${t('Coaching')}`,];

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  useEffect(() => {
    if (textIndex < texts.length - 1) {
      const textInterval = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 1400);

      return () => clearTimeout(textInterval);
    } else {
      // Attendre 1s avant de masquer le loader après le dernier message
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2300);

      return () => clearTimeout(hideTimeout);
    }
  }, [textIndex]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="absolute" width="250" height="250" viewBox="0 0 100 100">
              {/* Demi-cercle animé avec rotation */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradientColors)"
                strokeWidth="6"
                fill="none"
                strokeDasharray="125.6" // Demi-cercle (251.2 / 2)
                strokeDashoffset="0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <defs>
              <linearGradient id="gradientColors" x1="0" y1="0" x2="1" y2="1">
  {/* Rouge (1/3) */}
  <stop offset="0%" stopColor="#EF4444" />
  <stop offset="33.33%" stopColor="#EF4444" />
  {/* Jaune (1/3) */}
  <stop offset="33.34%" stopColor="#F59E0B" />
  <stop offset="66.66%" stopColor="#F59E0B" />
  {/* Bleu (1/3) */}
  <stop offset="66.67%" stopColor="#3B82F6" />
  <stop offset="100%" stopColor="#3B82F6" />
</linearGradient>

              </defs>
            </svg>
            <div className="absolute flex items-center justify-center">
              <span className="text-5xl lg:text-6xl font-extrabold text-gray-950 dark:text-white">JAD</span>
            </div>
          </div>
          <div className="fixed bottom-8 text-lg text-gray-500">
            {texts[textIndex]}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;