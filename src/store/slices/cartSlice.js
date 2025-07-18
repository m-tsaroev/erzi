import { api } from "@/services/api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const storageTokenKey = 'accessToken'

const token = localStorage.getItem(storageTokenKey)

const initialState = {
  loading: false,
  error: null,
}

const addCard = createAsyncThunk(
  'cart/addCard',
  async (credentials, {rejectWithValue}) => {
    try {
      return await api(`/${credentials}/add_to_cart`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Ошибка запроса на добавление товара в корзину')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addCard.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        console.log(action.payload);
      })
  }
})

export { addCard }
export default cartSlice.reducer