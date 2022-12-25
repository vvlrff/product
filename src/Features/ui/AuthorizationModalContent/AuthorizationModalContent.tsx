import { ChangeEvent, FC, useState } from 'react'
import { Button, IUser, TextInput } from 'Shared'

import s from './AuthorizationModalContent.module.scss'

export const AuthorizationModalContent: FC = (props) => {
  const [user, setUser] = useState<IUser>({
    email: null,
    password: null
  })

  const onChahgeField = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldType = e.target.getAttribute('data-field')
    if (fieldType) {
      setUser({ ...user, [fieldType]: e.target.value })
    }
  }

  return (
      <div className={s.form}>
          <span className={s.title}>Войти</span>
          <div className={s.fields}>
              <TextInput
                  placeholder='email'
                  value={user.email}
                  onChange={onChahgeField}
                  inputProps={{
                    'data-field': 'email'
                  }}
        />
              <TextInput
                  placeholder='password'
                  value={user.email}
                  onChange={onChahgeField}
                  inputProps={{
                    'data-field': 'password'
                  }}
        />
              <Button>Войти</Button>
          </div>
      </div>
  )
}
