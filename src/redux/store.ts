import { configureStore } from '@reduxjs/toolkit'
import restaurantsSlice from './restaurantsSlice'

let store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
  },
})

export default store
