import { FC, ReactNode } from 'react'

import cn from 'classnames'
import useTheme from 'Shared/lib/hooks/useTheme'
import Button from 'Shared/ui/Button'

import s from './ToggleThemeButton.module.scss'

interface IToggleThemeButton {
  children: ReactNode
  className?: string
}

const ToggleThemeButton: FC<IToggleThemeButton> = (props) => {
  const {
    children,
    className
  } = props
  const { toggleTheme } = useTheme()

  return (
      <Button
          className={cn(s.button, className)}
          onClick={toggleTheme}
          {...props}
        >{children}</Button>
  )
}

export default ToggleThemeButton
