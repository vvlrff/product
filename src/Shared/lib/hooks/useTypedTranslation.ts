import { useTranslation } from 'react-i18next'

type IuseTypedTranslation = 'translation' | 'header' | 'footer'

const useTypedTranslation = (type?: IuseTypedTranslation) => {
  return useTranslation(type)
}

export { useTypedTranslation }
