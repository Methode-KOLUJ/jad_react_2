import React, { useState } from "react";
import SEO from "../SEO";
import { useTranslation } from "react-i18next";

const Donation = () => {
  const { t, i18n } = useTranslation();


  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici des validations supplémentaires si nécessaire
    event.target.submit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <SEO
        title="Faire un don | ONG JAD"
        description="Faites un don à l'ONG JAD, pour soutenir nos actions humanitaires."
        keywords="Don, ONG JAD, Partage, Contribution"
      />
      <form
        action="https://marchand.maishapay.online/payment/vers1.0/merchant/checkout"
        method="POST"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-950 shadow-lg rounded-lg border border-gray-400 dark:border-gray-400 p-10 transition-all duration-300 hover:shadow-xl"
      >
        <input type="hidden" name="gatewayMode" value={1} />
        <input type="hidden" name="publicApiKey" value="MP-LIVEPK-XTtCScYeBrhZ7xu4Cf7rMZ8R4Yne$N1tsyiIpKl$$7V0AbF$H0ucT6.1VEIZSwyGbdJQv8ePy7vY2Yf5hLt0$hPl3J379MrKjNP7ywdO21HhJn268$CHr1/e" />
        <input type="hidden" name="secretApiKey" value="MP-LIVESK-8zicT02YyOgTR.3EIrJ$ZTZ.APafq9a$Gy4mKvDgAtCPEo0aUajy26Fls$$shLA0Na211g5s4MQkTibZrJoL$7Gn.mDCDpiQya$RAQupZ/2oXi1o.r8L.zGU" />
        <input type="hidden" name="montant" value={amount} />
        <input type="hidden" name="devise" value="USD" />
        <input type="hidden" name="callbackUrl" value="" />

        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-xl lg:text-2xl font-extrabold text-gray-700 text-center dark:text-gray-200 uppercase mb-6"
          >
            {t("DonH1")}
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-center mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-all duration-200 dark:text-gray-900"
            placeholder={t("Montant")}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-6 bg-teal-600 hover:bg-teal-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
        >
          {t("Valider")}
        </button>
      </form>
    </div>
  );
};

export default Donation;
