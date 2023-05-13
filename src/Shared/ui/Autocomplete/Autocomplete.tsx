import { memo } from 'react'

interface IAutocomplete {
  className?: string
  placeholder?: string
};

export const Autocomplete = memo((props: IAutocomplete) => {
  return (
      <input {...props} />
  )
})
