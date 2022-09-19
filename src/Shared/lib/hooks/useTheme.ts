import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeEnum } from "App/providers/lib/ThemeContext";

interface IuseTheme {
    theme: ThemeEnum,
    toggleTheme: () => void
}

const useTheme = ():IuseTheme => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT;

    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => {
        const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK :ThemeEnum.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme,
        toggleTheme: toggleTheme
    }
}

export default useTheme;