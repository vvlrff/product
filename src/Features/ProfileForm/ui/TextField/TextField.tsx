import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TextInput } from 'Shared'

import s from './TextField.module.scss'

interface ITextField {
  name: string
  placeholder: string
  className?: string
  disabled?: boolean
};

export const TextField: FC<ITextField> = (props) => {
  const { name, placeholder, className, disabled = false } = props

  const { control } = useFormContext()
  const { t } = useTranslation('profileForm')

  return (
      <Controller
          name={name}
          control={control}
          render={({ field }) => disabled
            ? (
                <span className={s.value}>{field.value || t(placeholder)}</span>
              )
            : (
                <TextInput
                    onChange={field.onChange}
                    value={field.value}
                    placeholder={placeholder}
                    className={className}
              />
              )}
        />
  )
}
