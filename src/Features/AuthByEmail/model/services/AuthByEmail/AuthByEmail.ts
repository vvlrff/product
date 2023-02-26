import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { UserActions } from 'Entities/User'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'
import i18n from 'Shared/config/i18next/i18next'

interface ILoginByEmailProps {
  email?: string
  password?: string
}

const url = 'http://localhost:5000/login'
const loginPrefix = 'login/authByEmail'

export const LoginByEmail = createAsyncThunk<UserLoginStateSchema, ILoginByEmailProps, { rejectValue: string }>(
  loginPrefix,
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<UserLoginStateSchema>(url, authData)
      const { accessToken, user } = response.data

      if (!response.data) {
        throw new Error(i18n.t('feature_auth_by_email_error_fetch'))
      }

      localStorage.setItem(UserAccessTokenKey, accessToken)
      localStorage.setItem(UserDataKey, JSON.stringify(user))
      thunkAPI.dispatch(UserActions.setUserAuth(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('feature_auth_by_email_incorrect_auth'))
    }
  }
)
