import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'

const initialState: UserLoginStateSchema = {
  accessToken: null,
  user: null,
  _inited: false
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, actions: PayloadAction<UserLoginStateSchema>) => {
      state.accessToken = actions.payload.accessToken
      state.user = actions.payload.user
    },
    initUserAuth: (state) => {
      const accessToken = localStorage.getItem(UserAccessTokenKey)
      const user = localStorage.getItem(UserDataKey)

      if (user) {
        state.accessToken = accessToken
        state.user = JSON.parse(user)
      }
      state._inited = true
    },
    logoutUser: (state) => {
      state.accessToken = null
      state.user = null

      localStorage.removeItem(UserAccessTokenKey)
      localStorage.removeItem(UserDataKey)
    }
  }
})

export const { reducer: UserReducer } = UserSlice
export const { actions: UserActions } = UserSlice
