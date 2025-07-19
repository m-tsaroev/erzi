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

const incrementCartItem = createAsyncThunk(
  'cart/incrementCartItem',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api(`/cart/items/${credentials}/increment`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      return rejectWithValue(
        error.message || 'Не удалось увеличить количество товаров в корзине'
      )
    }
  }
)

const decrementCartItem = createAsyncThunk(
  'cart/decrementCartItem',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api(`/cart/items/${credentials}/decrement`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      return rejectWithValue(
        error.message || 'Не удалось уменьшить количество товаров в корзине'
      )
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

      // incrementCartItem

      .addCase(incrementCartItem.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(incrementCartItem.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(incrementCartItem.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // decrementCartItem

      .addCase(decrementCartItem.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(decrementCartItem.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(decrementCartItem.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload

        console.log(action);
      })
  },
})

export {
  addCard,
  getCartItems,
  deleteCartItem,
  incrementCartItem,
  decrementCartItem,
}
export default cartSlice.reducer
