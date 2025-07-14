import { api } from '@/services/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const toeknStorageKey = toeknStorageKey

const initialState = {
  user: null,
  accessToken: localStorage.getItem(toeknStorageKey),
  loading: false,
  error: null,
}

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return api('/user/login', {
        body: credentials,
      })
    } catch (error) {
      return rejectWithValue(error || 'Ошибка входа')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      localStorage.setItem(toeknStorageKey, '')
      state.accessToken = localStorage.getItem(toeknStorageKey)
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
        localStorage.setItem(toeknStorageKey, action.payload.token)
        const userDecode = jwtDecode(localStorage.getItem(toeknStorageKey))
        state.user = userDecode
        state.token = localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

const { logout } = authSlice.actions

export { logout }
export default authSlice.reducer