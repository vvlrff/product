import { FC } from 'react'
import cn from 'classnames'
import { PrimarySideContentProps, StepperOrientationType, StepperSizeType, StepperThemeType } from '../../types/StepperSchema'

import './Step.scss'

export interface StepProps {
  children?: string
  size?: StepperSizeType
  orientation?: StepperOrientationType
  primarySideContent?: PrimarySideContentProps
  secondarySideContent?: PrimarySideContentProps
  className?: string
  theme?: StepperThemeType
}

export const Step: FC<StepProps> = (props) => {
  const { size, theme, primarySideContent, secondarySideContent, children, orientation } = props

  const mods: Record<string, boolean> = {
    step__orientation_horizontal: orientation === 'horizontal',
    step__orientation_vertical: orientation === 'vertical',
    step__large: size === 'l',
    step__medium: size === 'm',
    step__small: size === 's',
    step__light: theme === 'light',
    step__dark: theme === 'dark'
  }

  if (primarySideContent && secondarySideContent) {
    const contentLeft = Object.entries(primarySideContent)
    const contentRight = Object.entries(secondarySideContent)
    return (
        <div className={cn('step', mods)}>
            <div className='step__content step__content_left'>
                {contentLeft.map(([key, value]) => (
                    <span key={key} className={`step__${key}`}>{value}</span>
                ))}
            </div>
            <div className='step__bullet'>{children}</div>
            <div className='step__content step__content_right'>
                {contentRight.map(([key, value]) => (
                    <span key={key} className={`step__${key}`}>{value}</span>
                ))}
            </div>
        </div>
    )
  }

  if (primarySideContent) {
    const content = Object.entries(primarySideContent)
    return (
        <div className={cn('step', mods)}>
            <div className='step__content step__content_left'>
                {content.map(([key, value]) => (
                    <span key={key} className={`step__${key}`}>{value}</span>
                ))}
            </div>
            <div className='step__bullet'>{children}</div>
        </div>
    )
  }

  if (secondarySideContent) {
    const content = Object.entries(secondarySideContent)
    return (
        <div className={cn('step', mods)}>
            <div className='step__bullet'>{children}</div>
            <div className='step__content step__content_right'>
                {content.map(([key, value]) => (
                    <span key={key} className={`step__${key}`}>{value}</span>
                ))}
            </div>
        </div>
    )
  }

  return (
      <div className={cn('step', mods)}>

      </div>
  )
}
