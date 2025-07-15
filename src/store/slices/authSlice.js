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
        method: 'post',
        body: credentials,
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Ошибка входа')
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
        console.log('pending');
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem(tokenStorageKey, action.payload.token)
        console.log(action.payload.token);
        const userDecode = jwtDecode(action.payload.token)
        state.user = userDecode
        state.accessToken = action.payload.token
        console.log('fulfilled');
        console.log(localStorage.getItem(tokenStorageKey));
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false
        state.error = action.payload
        console.log('rejected', action.payload, action.payload, action);
      })
  },
})

const { logout } = authSlice.actions

export { logout, login }
export default authSlice.reducer