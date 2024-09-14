
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    increment: (state) => {
   
      state.value += 1
    },
nameAdd: (state) => {
    state.value = "bangla"
}
  },
})

// Action creators are generated for each case reducer function
export const { nameAdd } = nameSlice.actions

export default nameSlice.reducer