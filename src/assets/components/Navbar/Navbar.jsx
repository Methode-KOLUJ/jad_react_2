import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { Sun, Moon, Home, Info, Menu, X } from "lucide-react";
import "./Navbar.css";
import Langues from "../Language";


const Navbar = () => {
  const { t, i18n } = useTranslation();

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center shadow-lg dark:shadow-gray-900 bg-white dark:bg-black font-semibold fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-2">
        <a href="#"><img src="/Logo/JAD.png" alt="Logo" className="h-12 w-12" /></a>
        <span className="text-xl md:text-2xl xl:text-3xl font-extrabold"><a href="#">{t('Logo')}</a></span>
      </div>

      {/* Bouton Thème (centré) */}
      <div className="flex justify-center flex-grow">
        <button onClick={toggleTheme} className="p-2 rounded bg-gray-400 dark:bg-gray-600 font-extrabold">
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
      <div className="flex justify-start flex-grow">
      <Langues/>
      </div>

      <button
        className="block xl:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Menu mobile (visible uniquement sur les petits écrans) */}
      <div className={`mobile-menu bg-white dark:bg-black ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/' ? 'active-link' : ''}`}> <Home /> {t('Accueil')}</Link>
        <Link to="/Domaines" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Domaines' ? 'active-link' : ''}`}>{t('Domaines')}</Link>
        <Link to="/Activites" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Activites' ? 'active-link' : ''}`}>{t('Activités')}</Link>
        <Link to="/Partenaires" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Partenaires' ? 'active-link' : ''}`}>{t('Partenaires')}</Link>
        <Link to="/Adhesion" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Adhesion' ? 'active-link' : ''}`}>{t('Adhésion')}</Link>
        <Link to="https://www.facebook.com/profile.php?id=100089055482614" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/News' ? 'active-link' : ''}`}>{t('Actualités')}</Link>
        <Link to="/Donation" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Donation' ? 'active-link' : ''}`}>{t('Don')}</Link>
        <Link to="/Chatbot" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Chatbot' ? 'active-link' : ''}`}>{t('Assistant')}</Link>
      </div>

      {/* Liens pour les grands écrans (toujours visibles) */}
      <div className="hidden xl:flex xl:gap-4">
        <Link to="/" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/' ? 'active-link' : ''}`}> <Home /> {t('Accueil')}</Link>
        <Link to="/Domaines" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Domaines' ? 'active-link' : ''}`}> {t('Domaines')}</Link>
        <Link to="/Activites" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Activites' ? 'active-link' : ''}`}>{t('Activités')}</Link>
        <Link to="/Partenaires" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Partenaires' ? 'active-link' : ''}`}>{t('Partenaires')}</Link>
        <Link to="/Adhesion" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Adhesion' ? 'active-link' : ''}`}>{t('Adhésion')}</Link>
        <Link to="https://www.facebook.com/profile.php?id=100089055482614" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/News' ? 'active-link' : ''}`}>{t('Actualités')}</Link>
        <Link to="/Donation" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Donation' ? 'active-link' : ''}`}>{t('Don')}</Link>
        <Link to="/Chatbot" className={`flex items-center gap-2 hover:text-blue-500 transition ${location.pathname === '/Chatbot' ? 'active-link' : ''}`}>{t('Assistant')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;