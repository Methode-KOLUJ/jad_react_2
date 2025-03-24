import React, { useState, useRef, useEffect } from "react";
import { MdSend, MdChat } from "react-icons/md"; // Changement d'icônes
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi"; 
import SEO from "../SEO";
import { useTranslation } from "react-i18next";


const Card = ({ children, className = "" }) => (
  <div
    className={`bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg rounded-xl border-2 border-purple-300 dark:border-blue-700 dark:from-gray-800 dark:to-gray-900 ${className}`}
  >
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-blue-700 dark:bg-gray-800 dark:text-white ${className}`}
  />
);

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-5 py-3 rounded-xl text-white bg-purple-600 hover:bg-purple-700 dark:bg-blue-700 dark:hover:bg-blue-800 ${className}`}
  >
    {children}
  </button>
);

const Chatbot = () => {
  const { t, i18n } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: `${t("BotQuestion")}`,
      displayedText: "",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (
      lastMessage.type === "bot" &&
      lastMessage.displayedText.length < lastMessage.text.length
    ) {
      const timer = setTimeout(() => {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          lastMsg.displayedText = lastMessage.text.substring(
            0,
            lastMsg.displayedText.length + 1
          );
          return newMessages;
        });
      }, 60); // Ajustez la vitesse de frappe ici

      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input, displayedText: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: data.reply, displayedText: "" },
      ]);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'API", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Une erreur s'est produite. Veuillez réessayer.",
          displayedText: "",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full relative p-4 bg-white dark:bg-black">
      <SEO
        title="Assistant | ONG JAD"
        description="Consultez notre assistant virtuel pour en savoir plus sur notre ONG."
        keywords="IA, ONG JAD, Chatbot, Assistant"
      />
      <button onClick={toggleTheme} className="fixed bottom-2 left-2 p-3 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white shadow-lg">
        {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
      </button>
      <Link
        to="/"
        className="fixed top-4 right-4 px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg z-50"
      >
        X
      </Link>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <Card className="w-full max-w-6xl h-[90vh] max-h-[650px] flex flex-col shadow-2xl rounded-2xl dark:bg-gray-900 dark:text-white overflow-hidden self-center">
          <div className="flex items-center justify-between border-b-2 border-purple-300 dark:border-blue-700 p-4">
            <div className="flex items-center space-x-2">
              <MdChat
                className="text-purple-600 dark:text-blue-500"
                size={28}
              />
              <h1 className="text-2xl font-bold text-purple-800 dark:text-white">{t('BotName')}</h1>
            </div>
          </div>

          <div className="flex-1 space-y-3 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex ${message.type === "bot" ? "justify-start select-text" : "justify-end"
                  }`}
              >
                <div
                  className={`${message.type === "bot"
                      ? "bg-purple-100 text-purple-800 dark:bg-gray-800 dark:text-white"
                      : "bg-purple-600 text-white"
                    } p-3 rounded-2xl max-w-[75%] shadow-md break-words`}
                >
                  {message.type === "bot"
                    ? message.displayedText
                    : message.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center space-x-2 p-4 dark:text-black">
            <Input
              className="flex-1"
              placeholder={t("BotPlaceholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-purple-600 hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "..." : <MdSend className="w-6 h-6" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;