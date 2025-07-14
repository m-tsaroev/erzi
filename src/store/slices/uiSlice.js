import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoginModalOpen: false
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false
    }
  }
})

const { openLoginModal, closeLoginModal } = uiSlice.actions

export { openLoginModal, closeLoginModal }
export default uiSlice.reducer