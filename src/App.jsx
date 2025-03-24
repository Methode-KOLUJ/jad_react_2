// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import { useTheme } from "./assets/components/ThemeContext";

import Accueil from "./assets/components/Home/Accueil";
import ScrollTop from "./assets/components/TopScroll/TopScroll";
import Chatbot from "./assets/components/bot/Chatbot";
import Domaines from "./assets/components/Domaines/Domaines";
import Partenaires from "./assets/components/Partenaires/Partenaires";
import Adhesion from "./assets/components/Adhesion/Adhesion";
import Donation from "./assets/components/Donation/Donation";
import Activites from "./assets/components/Activites/Activites";
import Loader from "./assets/components/Loader/Loader";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const showNavbar = location.pathname !== "/Chatbot";

  return (
    <div>
      <ScrollTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Domaines" element={<Domaines />} />
        <Route path="/Partenaires" element={<Partenaires />} />
        <Route path="/Adhesion" element={<Adhesion />} />
        <Route path="/Adhesion" element={<Adhesion />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Activites" element={<Activites />} />
      </Routes>
      <Loader/>
    </div>
  );
};

export default App;