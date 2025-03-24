import { useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" }
];

function Langues() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-md bg-gray-400 dark:bg-gray-600"
      >
        <img
          src={LANGUAGES.find((lang) => lang.code === i18n.language)?.flag}
          alt="current flag"
          className="w-6 h-6 rounded-lg"
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-white dark:bg-gray-900 border rounded-md shadow-lg z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <img src={lang.flag} alt={lang.label} className="w-6 h-6 rounded-lg" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Langues;
