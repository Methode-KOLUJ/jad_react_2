import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-950 dark:text-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left text-xl md:text-2xl">
        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-blue-600 dark:text-teal-600 text-2xl font-extrabold mb-6 uppercase">
        {t("Contactez-nous")}

          </h3>
          <p className="text-lg font-semibold">
            N° xxx, Avenue xxxxxx, Lubumbashi, RDC
          </p>
          <p className="text-lg">
            Email :{" "}
            <a
              href="mailto:ongjad@gmail.com"
              className="text-blue-400 hover:underline font-bold"
            >
              ongjad@gmail.com
            </a>
          </p>
          <p className="text-lg">
          {t("Téléphone")} :{" "}
            <a
              href="tel:+243976080083"
              className="text-blue-400 hover:underline font-bold"
            >
              +243 97 60 800 83
            </a>
          </p>
        </div>

        {/* Horaires */}
        <div className="flex flex-col items-center">
          <h3 className="text-blue-600 dark:text-teal-600 text-center text-2xl font-extrabold mb-6 uppercase">
          {t("Horaires")}

          </h3>
          <p className="text-lg font-semibold">{t("Lundi")}</p>
          <p className="text-lg font-semibold">{t("Samedi")}</p>
          <p className="text-lg font-semibold">{t("Dimanche")}</p>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-blue-600 dark:text-teal-600 text-2xl font-extrabold mb-6 uppercase">
        {t("Réseaux")}

          </h3>
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100089055482614"
              className="text-blue-600 hover:text-blue-800 transition text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/ong_jad"
              className="text-blue-400 hover:text-blue-600 transition text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 transition text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-lokombe-15a681356?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fj1zNNqyRu2MZURZ2EEBpw%3D%3D"
              className="text-blue-700 hover:text-blue-900 transition text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center border-t border-gray-500 dark:border-gray-600 pt-4 mt-8">
        <p className="sm:text-xs lg:text-sm xl:text-base">
          &copy; {currentYear} {t("Copyright")} || {t("Developpeur")} {" "}
          <span className="font-bold">
            <a href="https://wa.me/243812539000"> KOLUJ_DEV</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
