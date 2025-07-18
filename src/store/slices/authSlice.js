import { api } from '@/services/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const tokenStorageKey = 'accessToken'

const initialState = {
  user: null,
  accessToken: localStorage.getItem(tokenStorageKey),
  loading: false,
  error: null,
}

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api('/user/login', {
        method: 'POST',
        body: credentials,
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Ошибка входа')
    }
  }
)

const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api('/user/create', {
        method: 'POST',
        body: credentials,
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Ошибка регистрации')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      localStorage.setItem(tokenStorageKey, '')
      state.accessToken = localStorage.getItem(tokenStorageKey)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem(tokenStorageKey, action.payload.token)
        const userDecode = jwtDecode(action.payload.token)
        state.user = userDecode
        state.accessToken = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(registration.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registration.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false
        state.error = JSON.parse(action.payload).error
      })
  },
})

const { logout } = authSlice.actions

export { logout, login, registration }
export default authSlice.reducer
