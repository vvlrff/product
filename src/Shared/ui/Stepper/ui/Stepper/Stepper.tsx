import { FC, PropsWithChildren, Children, isValidElement, cloneElement } from 'react'
import cn from 'classnames'
import { StepperOrientationType, StepperSizeType, StepperThemeType } from '../../types/StepperSchema'
import { StepProps } from '../Step/Step'

import s from './Stepper.module.scss'

interface StepperProps {
  orientation?: StepperOrientationType
  size?: StepperSizeType
  theme?: StepperThemeType
}

export const Stepper: FC<PropsWithChildren<StepperProps>> = (props) => {
  const { orientation = 'vertical', size = 'm', theme = 'light', children } = props

  const mods: Record<string, boolean> = {
    [s.horizontal]: orientation === 'horizontal',
    [s.vertical]: orientation === 'vertical',
    [s.large]: size === 'l',
    [s.medium]: size === 'm',
    [s.small]: size === 's',
    [s.light]: theme === 'light',
    [s.dark]: theme === 'dark'
  }

  const propsWithChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { size, orientation, theme } as StepProps)
    }
    return child
  })

  return (
      <div className={cn(s.stepper, mods)}>
          {propsWithChildren}
      </div>
  )
}
