import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoginModalOpen: false,
    isErrorShow: false,
    isSuccessShow: false,
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
  },
})

const {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
} = uiSlice.actions

export {
  openLoginModal,
  closeLoginModal,
  showErrorMessage,
  hideErrorMessage,
  showSuccessMessage,
  hideSuccessMessage,
}
export default uiSlice.reducer
