import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeEnum, ThemeContext } from 'App/providers/lib/ThemeContext'

interface IuseTheme {
  theme: ThemeEnum
  toggleTheme: () => void
}

const useTheme = (): IuseTheme => {
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

export default useTheme
