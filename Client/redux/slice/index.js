import { createSlice } from '@reduxjs/toolkit'
import { validateUserAuthentication } from '../../Helpers/authenticationFunctions'

const initialState = {
  modules: '',
  validate: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,module) => {
      state.modules = module.payload
    },
    loadValidate: (state,module) => {
      state.validate = module.payload
    },
    validateTopinc: async (state,module) => {
      let index = module.payload
      console.log(index)
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, loadValidate, validateTopinc } = counterSlice.actions

export default counterSlice.reducer