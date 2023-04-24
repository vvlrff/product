import { getUserAuthData } from 'Entities/User'
import { useSelector } from 'react-redux'

export const useAuth = () => {
  const userData = useSelector(getUserAuthData)

  if (userData) {
    return true
  }
  return false
}
