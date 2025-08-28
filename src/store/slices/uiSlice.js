import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoginModalOpen: false,
    isErrorShow: false,
    isSuccessShow: false,
    isShowRestoreCartButton: false,
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
    },
    resetMessageText: (state) => {
      state.messageText = ''
    },
    showRestoreCartButton: (state) => {
      console.log(201)

      state.isShowRestoreCartButton = true

      console.log(state.isShowRestoreCartButton)
    },
    hideRestoreCartButton: (state) => {
      state.isShowRestoreCartButton = false
    },
  },
})

const {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
  addMessageText,
  resetMessageText,
  showRestoreCartButton,
  hideRestoreCartButton
} = uiSlice.actions

export {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
  addMessageText,
  resetMessageText,
  showRestoreCartButton,
  hideRestoreCartButton
}
export default uiSlice.reducer
