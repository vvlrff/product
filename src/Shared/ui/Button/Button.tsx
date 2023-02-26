import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  disabled?: boolean
  children: ReactNode
}

const Button: FC<IButton> = (props) => {
  const { children, className, disabled, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [s.disabled]: disabled
  }

  return (
      <button
          disabled={disabled}
          className={cn(s.button, mods, className)}
          {...otherProps}
      >{children}</button>
  )
}

export default Button
