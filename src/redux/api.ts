import axios from 'axios'

export const fetchRestaurants = async () => {
  const response = await axios.get('http://localhost:3001/restaurants')
  return response.data
}
