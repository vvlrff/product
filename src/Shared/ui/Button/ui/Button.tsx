import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface IButton {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Button: FC<IButton> = (props) => {
  const {
    children,
    className = '',
    onClick
  } = props

  return (
      <button
          className={cn(s.button, className)}
          onClick={onClick}
        >{children}</button>
  )
}

export default Button
