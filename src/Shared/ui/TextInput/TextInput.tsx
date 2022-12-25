import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEventHandler, FC } from 'react'

import s from './TextInput.module.scss'

type ITextInput = TextFieldProps & {
  value: string
  onChange: ChangeEventHandler
}

export const TextInput: FC<ITextInput> = (props) => {
  const {
    value,
    onChange
  } = props

  return (
      <TextField
          variant='outlined'
          value={value}
          onChange={onChange}
          className={s.input}
          {...props}
    />
  )
}
