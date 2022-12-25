import useTheme from 'Shared/lib/hooks/useTheme'
import AppRouter from './providers/routes/ui/AppRouter'

export const App = () => {
  const { theme } = useTheme()

  document.body.className = theme

  return (
      <AppRouter/>
  )
}
