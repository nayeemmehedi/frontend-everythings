import { configureStore } from '@reduxjs/toolkit'
import counter from './Reducer'
import  name from './NameReducer'
import { apiSlice } from '../toolkit_api/reducer/CompanyReducer'


export const store = configureStore({
  reducer: {
    counter: counter,
    name: name,
    [apiSlice.reducerPath]: apiSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

