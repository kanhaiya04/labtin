import { configureStore } from '@reduxjs/toolkit'
import packageReducer from '../reducer/packageReducer'
import userReducer from '../store/AuthSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    packages: packageReducer,
  },
})
