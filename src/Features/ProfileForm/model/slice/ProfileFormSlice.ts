import { fetchProfileData } from './../services/fetchProfileData/fetchProfileData'
import { createSlice } from '@reduxjs/toolkit'

import { ProfileStateSchema } from '../types/ProfileStateSchema'

const initialState: ProfileStateSchema = {
  isEdit: false,
  isLoading: true,
  error: undefined,
  data: undefined
}

export const ProfileFormSlice = createSlice({
  name: 'profileForm',
  initialState,
  reducers: {
    setEditableMode: (state) => {
      state.isEdit = true
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: ProfileFormActions } = ProfileFormSlice
export const { reducer: ProfileFormReducer } = ProfileFormSlice
