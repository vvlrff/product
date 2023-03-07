import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserActions } from 'Entities/User'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'
import i18n from 'Shared/config/i18next/i18next'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'

interface ILoginByEmailProps {
  email?: string
  password?: string
}

export const LoginByEmail = createAsyncThunk<UserLoginStateSchema, ILoginByEmailProps, ThunkApiType<string>>(
  'login/authByEmail',
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.post<UserLoginStateSchema>('/login', authData)
      const { accessToken, user } = response.data

      if (!response.data) {
        throw new Error(i18n.t('feature_auth_by_email_error_fetch'))
      }

      localStorage.setItem(UserAccessTokenKey, accessToken)
      localStorage.setItem(UserDataKey, JSON.stringify(user))
      dispatch(UserActions.setUserAuth(response.data))

      return response.data
    } catch (e) {
      return rejectWithValue(i18n.t('feature_auth_by_email_incorrect_auth'))
    }
  }
)
