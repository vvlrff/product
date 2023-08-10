import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegisterByEmail } from '../../services/RegisterUserByEmail/RegisterByEmail'
import { RegisterUserSchema } from '../../types/RegisterUserSchema'

const initialState: RegisterUserSchema = {
  password: '',
  confirmPassword: '',
  email: '',
  username: '',
  fullname: '',
  isLoading: false,
  error: null
}

const createUserByEmail = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setFullname: (state, action: PayloadAction<string>) => {
      state.fullname = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterByEmail.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(RegisterByEmail.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(RegisterByEmail.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: CreateUserAction } = createUserByEmail
export const { reducer: CreateUserReducer } = createUserByEmail
