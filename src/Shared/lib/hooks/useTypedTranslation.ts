import { useTranslation } from 'react-i18next'

type IuseTypedTranslation = 'registration' | 'authorization'

const useTypedTranslation = (type?: IuseTypedTranslation) => {
  return useTranslation(type)
}

export { useTypedTranslation }
