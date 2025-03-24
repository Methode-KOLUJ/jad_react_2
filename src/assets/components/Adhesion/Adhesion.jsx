import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const Adhesion = () => {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    raison: "",
    motivation: "",
  });
  const [notifications, setNotifications] = useState([]);
  const [errors, setErrors] = useState({});

  // Schéma de validation Zod
  const formSchema = z.object({
    fullName: z.string().min(1, { message: t("Le nom est requis") }),
    phone: z
      .string()
      .min(9, { message: t("Le téléphone doit contenir au moins 9 chiffres") })
      .regex(/^\d+$/, { message: t("Le téléphone ne doit contenir que des chiffres") }),
    email: z.string().email({ message: t("Email invalide") }),
    raison: z.string().min(1, { message: t("Veuillez sélectionner une option") }),
    motivation: z
      .string()
      .min(50, { message: t("La motivation doit contenir au moins 50 caractères") }),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const showNotification = (type, message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validatedData = formSchema.safeParse(formData);

      if (!validatedData.success) {
        const fieldErrors = validatedData.error.formErrors.fieldErrors;
        setErrors(fieldErrors);
        showNotification("error", t("AlerteCorrige"));
        return;
      }

      const response = await fetch("http://localhost:3000/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData.data),
      });

      if (!response.ok) {
        throw new Error( t("Echoué"));
      }

      const result = await response.json();
      showNotification("success", t("Réussi"));
      console.log("Succès:", result);

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        raison: "",
        motivation: "",
      });
      setErrors({});
    } catch (error) {
      showNotification("error", t("Echoué"));
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-black dark:text-white mt-14 bg-white dark:bg-black">
      <SEO
        title="Adhésion | ONG JAD"
        description="Postulez pour devenir membres ou partenaires de l'ONG JAD."
        keywords="Adhésion, ONG JAD, Partenaires, Membres"
      />

      {/* Zone des notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-lg shadow-lg ${
              notification.type === "success"
                ? "bg-green-700 text-white"
                : "bg-red-800 text-white"
            }`}
          >
            {notification.message}
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-600 dark:text-teal-500 text-center mb-8 uppercase"
      >
        {t("AdhésionH1")}
      </motion.h2>
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg shadow-gray-600 dark:shadow-gray-600 border-2 border-gray-500 bg-white dark:bg-gray-800">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ Nom */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder={t("Nom")}
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Champs Email et Téléphone (côte à côte sur les grands écrans) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder={t("Téléphone")}
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="email"
                placeholder={t("Email")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Champ Raison */}
          <div>
            <select
              name="raison"
              value={formData.raison}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            >
              <option value="">{t("Qui")}</option>
              <option value="Partenaire">{t("Partenaire")}</option>
              <option value="Membre">{t("Membre")}</option>
              <option value="Donateur">{t("Donateur")}</option>
            </select>
            {errors.raison && <p className="text-red-500 text-sm mt-1">{errors.raison}</p>}
          </div>

          {/* Champ Motivation */}
          <div>
            <textarea
              name="motivation"
              placeholder={t("Motivation")}
              value={formData.motivation}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600 h-40 resize-none"
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 dark:bg-teal-500 text-white rounded hover:bg-blue-600 dark:hover:bg-teal-600 font-bold"
          >
            {t("Soumettre")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adhesion;