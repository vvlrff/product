import { ThunkApiType } from './../../../../../App/providers/StoreProvider/config/StateSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from 'Shared'
import i18n from 'Shared/config/i18next/i18next'

interface IRegisterProps {
  email?: string
  password?: string
}

export const RegisterByEmail = createAsyncThunk<IUser, IRegisterProps, ThunkApiType<string>>(
  'register/registerByEmail',
  async (authData, thunkApi) => {
    const { rejectWithValue } = thunkApi

    try {
      const response = await axios.post<IUser>('/register', authData)
      if (!response.data) {
        throw new Error('Something went wrong')
      }

      return response.data
    } catch {
      return rejectWithValue(i18n.t('feature_register_by_email_incorrect_input'))
    }
  }
)
