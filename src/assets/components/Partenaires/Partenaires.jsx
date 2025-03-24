import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import SEO from "../SEO";
import { useTranslation } from "react-i18next";

const Partenaires = () => {
  const { t, i18n } = useTranslation();

  const images = [
    {
      id: 1,
      src: "/Partenaires/Aqua.jpeg",
      title: "Aqua Pischon",
      description: "Description des activités du partenaires",
    },
    {
      id: 2,
      src: "/Partenaires/Atlantic.jpeg",
      title: "Atlantic traiteur",
      description: (
        <>
          {t("AtlanticP1")}
          <br />
          <br />
          <strong>{t("AtlanticTitle")}</strong>
          <br />
          <br />
          {t("AtlanticP2")}
          <br />
          <br />
          Contact :{" "}
          <a href="tel:+243891730781" class="font-medium text-yellow-700 hover:text-yellow-500 dark:text-teal-500 hover:underline dark:hover:text-teal-700">
            +243 891 730 781
          </a>
          <span> - Gmail : </span>{" "}
          <a href="mailto:info@atlantictraiteur.com" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            info@atlantictraiteur.com
          </a>
          <br />
          <br />
        </>
      ),
    },
    {
      id: 3,
      src: "/Partenaires/Bora.jpeg",
      title: "Bora SARL",
      description: "Description des activités du partenaires",
    },
    {
      id: 4,
      src: "/Partenaires/Christ.jpeg",
      title: "Jésus-Christ au Centre",
      description: (
        <>
          {t("JCCP1")}
          <br />
          <br />
          <strong>{t("JCCredo")} :</strong> {t("JCCP2")}
          <br />
          <br />
          Contacts :{" "}
          <a href="tel:+243970888035" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            +243 970 888 035{" "}
          </a>
          |{" "}
          <a href="tel:+243993847869" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            +243 993 847 869
          </a>
        </>
      ),
    },
    {
      id: 9,
      src: "/Partenaires/Travel.jpeg",
      title: "Travel Booking",
      description: (
        <>
          {t("TravelP1")}
          <br />
          <br />
          Contacts :{" "} 
          <a
            href="https://wa.me/243992228340"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-yellow-700 hover:text-yellow-500 dark:text-teal-500 hover:underline dark:hover:text-teal-700"
          >
            +243 99 222 83 40 {" "}
          </a>
          (DG) -{" "}
          <a
            href="https://wa.me/243999998716"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-yellow-700 hover:text-yellow-500 dark:text-teal-500 hover:underline dark:hover:text-teal-700"
          >
            (+243) 99 999 87 16 {" "}
          </a>
          (Sec) {" "}
          - Gmail :{" "}
          <a href="mailto:travelbooking.drc@gmail.com" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            travelbooking.drc@gmail.com
          </a>
          <br />
          <br />
          {t("TravelAdresse")}
        </>
      ),
    },
    {
      id: 5,
      src: "/Partenaires/Empire.jpeg",
      title: "Focus Empire",
      description: (
        <>
          <p>
            {t("Focus")}
          </p>
        </>
      ),
    },
    {
      id: 6,
      src: "/Partenaires/MEG.jpeg",
      title: "Mission Evangélique de la Gloire",
      description: (
        <>
         <p>
          {t("MEG")}
         </p>
        </>
      ),
    },
    {
      id: 7,
      src: "/Partenaires/MLS.jpeg",
      title: "MLS SARL Construction",
      description: (
        <>
          {t("MLSP1")}
          <br />
          <br />
          Contact :{" "} 
          <a href="tel:+243975361498827" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            +243 975 361 498{" "}
          </a>
          |
          <a href="tel:+243853384827" class="font-medium text-yellow-700 hover:text-yellow-500 hover:underline dark:text-teal-500 dark:hover:text-teal-700">
            +243 853 384 827
          </a>{" "}
          - Gmail :{" "}
          <a href="mailto:maisonluabeyasolution@gmail.com" class="font-medium text-yellow-700 hover:text-yellow-500 dark:text-teal-500 dark:hover:text-teal-700 hover:underline">
            maisonluabeyasolution@gmail.com
          </a>
        </>
      ),
    },
    {
      id: 8,
      src: "/Partenaires/Muzuri.jpeg",
      title: "Muzuri Realty",
      description: (
        <>
          <p>
            {t("Muzuri")}
          </p>
        </>
      ),
    },
    {
      id: 10,
      src: "/Partenaires/Creative.jpeg",
      title: "HDesign Creative",
      description: (
        <>
          {t("HDesign")}
          <br />
          <br />
          {t("HDesignReseaux")} {" "}
          <strong>
            <a
              href="https://www.facebook.com/share/18y5z1NGEV/?mibextid=wwXIfr"
              class="font-bold text-yellow-700 hover:text-yellow-500 dark:text-teal-500 dark:hover:text-teal-700 hover:underline"
            >
              {t("HDLink")}
            </a>
          </strong>
        </>
      ),
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4 mt-20 min-h-screen bg-white dark:bg-black">
      <SEO
        title="Nos partenaires | ONG JAD"
        description="Les partenaires qui font avancer la mission de l'ONG JAD."
        keywords="Partenaires, ONG JAD, Contributeurs, Bienfaiteurs"
      />
      {/* Titre centré en haut */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-500 dark:text-teal-600 text-center mb-10 uppercase"
      >
        {t("PartenaireH1")}
      </motion.h2>

      {/* Grille d'images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="w-[100%] object-cover rounded-xl opacity-100 dark:opacity-80 border-2 border-gray-300 transition-opacity duration-300"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                onClick={() => setSelectedImage(image)}
                className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
              >
                En savoir plus
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Utilisation du composant ImageModal */}
      <ImageModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Partenaires;
