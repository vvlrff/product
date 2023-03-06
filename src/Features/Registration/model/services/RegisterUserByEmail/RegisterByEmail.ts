import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from 'Shared'
import i18n from 'Shared/config/i18next/i18next'

interface IRegisterProps {
  email?: string
  password?: string
}

const url = 'http://localhost:5000/register'
const registerPrefix = 'register/registerByEmail'

export const RegisterByEmail = createAsyncThunk<IUser, IRegisterProps, { rejectValue: string }>(
  registerPrefix,
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<IUser>(url, authData)
      if (!response.data) {
        throw new Error('Something went wrong')
      }

      return response.data
    } catch {
      return thunkApi.rejectWithValue(i18n.t('feature_register_by_email_incorrect_input'))
    }
  }
)
