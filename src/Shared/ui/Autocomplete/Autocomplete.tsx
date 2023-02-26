import { FC } from 'react'

interface IAutocomplete {
  className?: string
  placeholder?: string
};

export const Autocomplete: FC<IAutocomplete> = (props) => {
  return (
      <input {...props} />
  )
}
