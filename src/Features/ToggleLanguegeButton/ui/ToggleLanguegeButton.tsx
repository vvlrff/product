import { FC, ReactNode } from 'react'

import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'
import Button from 'Shared/ui/Button'

import s from './ToggleLanguegeButton.module.scss'

interface IToggleLanguegeButton {
  children: ReactNode
}

const ToggleLanguegeButton: FC<IToggleLanguegeButton> = ({ children }, otherProps) => {
  const { i18n } = useTypedTranslation()

  const toggleLanguege = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
          className={s.button}
          onClick={toggleLanguege}
          {...otherProps}
        >{children}</Button>
  )
}

export default ToggleLanguegeButton
