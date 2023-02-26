import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from 'App/Providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface IuseTheme {
  theme: ThemeEnum
  toggleTheme: () => void
}

export const useTheme = (): IuseTheme => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
