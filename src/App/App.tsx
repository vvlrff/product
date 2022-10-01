import useTheme from 'Shared/lib/hooks/useTheme'
import AppRouter from './providers/routes/ui/AppRouter'

export const App = () => {
  const { theme } = useTheme()

  return (
      <div className={`app ${theme}`}>
          <AppRouter/>
      </div>
  )
}
