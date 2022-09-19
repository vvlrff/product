import { FC, ReactNode, useState, useMemo } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from "../lib/ThemeContext";  
import useTheme from "Shared/lib/hooks/useTheme"

interface IThemeProvider {
    children: ReactNode,
}

const ThemeProvider: FC<IThemeProvider> = ({children}) => {
    const { theme, toggleTheme } = useTheme()

    const themeProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: toggleTheme
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;