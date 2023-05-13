import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'

import { ProfileType } from '../../types/ProfileStateSchema'

export const patchProfileData = createAsyncThunk<ProfileType, ProfileType, ThunkApiType<string>>(
  'profile/patchProfileData',
  async (profileData, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.patch('/profile', profileData)

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  })
