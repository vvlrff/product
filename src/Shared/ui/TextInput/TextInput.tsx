import { ChangeEvent, HTMLAttributes, memo } from 'react'

import s from './TextInput.module.scss'

interface ITextInput extends Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'> {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'password' | 'email'
}

export const TextInput = memo((props: ITextInput) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    ...otherProps
  } = props

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
      <input
          type={type}
          className={s.input}
          value={value}
          onChange={changeEventHandler}
          placeholder={placeholder}
          {...otherProps}
    />
  )
})
