import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoginModalOpen: false,
    isErrorShow: false,
    isSuccessShow: false,
    messageText: '',
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true
      document.documentElement.classList.add('is-lock')
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false
      document.documentElement.classList.remove('is-lock')
    },
    showErrorMessage: (state) => {
      state.isErrorShow = true
    },
    hideErrorMessage: (state) => {
      state.isErrorShow = false
    },
    showSuccessMessage: (state) => {
      state.isSuccessShow = true
    },
    hideSuccessMessage: (state) => {
      state.isSuccessShow = false
    },
    addMessageText: (state, action) => {
      state.messageText = action.payload
    }
  },
})

const {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
  addMessageText
} = uiSlice.actions

export {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
  addMessageText
}
export default uiSlice.reducer
