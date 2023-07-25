import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import RestaurantInterface from '../interfaces/restaurant.interface'
import { fetchRestaurants } from './api'

export const fetchRestaurantsAsync = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const restaurants = await fetchRestaurants()
    return restaurants
  }
)

export interface RestaurantStateInterface {
  restaurants: RestaurantInterface[]
  loading: boolean
  error: null | string | undefined
}

const initialState: RestaurantStateInterface = {
  restaurants: [],
  loading: false,
  error: null,
}

const restaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsAsync.fulfilled, (state, action) => {
      state.loading = false
      state.restaurants = action.payload as RestaurantInterface[]
    })

    builder.addCase(fetchRestaurantsAsync.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchRestaurantsAsync.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

// export const { getRestaurants } = restaurantsSlice.actions
export default restaurantsSlice.reducer
