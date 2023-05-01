import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileType } from '../../types/ProfileStateSchema'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'

export const fetchProfileData = createAsyncThunk<ProfileType, undefined, ThunkApiType<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get('/profile')

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  })
