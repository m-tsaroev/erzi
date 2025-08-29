import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '@/services/api'

const storageTokenKey = 'accessToken'

const initialState = {
  loading: false,
  error: null,
  productsList: [],
  selectedProduct: null,
}

const getProduct = createAsyncThunk(
  'products/getProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem(storageTokenKey)
      return await api(`/products/${credentials}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      if (error.response) {
        return rejectWithValue({
          message: error.response.data.message || 'Не удалось получить товар',
          status: error.response.status, // Код ошибки
        })
      }

      return rejectWithValue({
        message: error.message || 'Не удалось получить товар',
        status: null,
      })
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // getProduct

      .addCase(getProduct.pending, (state) => {
        state.loading = true
        state.error = null
        state.selectedProduct = null
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.selectedProduct = action.payload
        console.log(action.payload)
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.selectedProduct = null
        console.log(action.payload)
      })
  },
})

export { getProduct }

export default productsSlice.reducer
