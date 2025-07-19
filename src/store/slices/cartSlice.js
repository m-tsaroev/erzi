import { api } from '@/services/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const storageTokenKey = 'accessToken'

const token = localStorage.getItem(storageTokenKey)

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
}

const addCard = createAsyncThunk(
  'cart/addCard',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api(`/${credentials}/add_to_cart`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      return rejectWithValue(
        error.message || 'Ошибка запроса на добавление товара в корзину'
      )
    }
  }
)

const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      return await api('/cart/items', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Не авторизованы')
    }
  }
)

const deleteCartItem = createAsyncThunk(
  'cart/deletCartItem',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api(`/cart/items/${credentials}/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      return rejectWithValue(error.message || 'Не удалось удалить товар')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // addCard

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
        console.log(action.payload)
      })

      // getCartItems

      .addCase(getCartItems.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.cartItems = action.payload === null ? [] : action.payload
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.cartItems = []
        console.log(action.payload, 2)
      })

      // deleteCartItem

      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteCartItem.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        console.log(action.payload, 3)
      })
  },
})

export { addCard, getCartItems, deleteCartItem }
export default cartSlice.reducer
