import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Récupère le thème depuis le localStorage ou utilise "light" par défaut
    const savedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(savedTheme);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    useEffect(() => {
        // Applique la classe 'dark' ou 'light' au body
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        // Sauvegarde le thème actuel dans le localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, ThemeContext };
