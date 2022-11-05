import { FC } from 'react'
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material'
import { IOption } from './types'
import cn from 'classnames'

import s from './Autocomplete.module.scss'

interface IAutocomplete {
  id: string
  options: IOption[]
  className?: string
  placeholder?: string
};

const Autocomplete: FC<IAutocomplete> = (props) => {
  const { id, options, className = '', placeholder = '' } = props
  return (
      <MuiAutocomplete
          id={id}
          options={options.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} placeholder={placeholder} className={s.input}/>}
          className={cn(s.autocomplete, className)}
        />
  )
}

export default Autocomplete
