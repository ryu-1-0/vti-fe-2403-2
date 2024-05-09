import { configureStore } from "@reduxjs/toolkit";
import useSlice from './useSlice'
export default configureStore({
  reducer: {
    users: useSlice,
  },

})