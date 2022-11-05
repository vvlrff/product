import { FC } from 'react'
import { Button as ButtonMui, ButtonProps } from '@mui/material'

import cn from 'classnames'

import s from './Button.module.scss'

interface IButton extends ButtonProps {}

const Button: FC<IButton> = ({ children, className, variant = 'contained', ...otherProps }) => {
  return (
      <ButtonMui
          className={cn(s.button, className)}
          variant={variant}
          {...otherProps}
      >
          {children}
      </ButtonMui>
  )
}

export default Button
