import { createSlice } from '@reduxjs/toolkit'
import { validateUserAuthentication } from '../../Helpers/authenticationFunctions'

const initialState = {
  "modules": '',
  "habilidades": false,
  "Test": true,
  "Identificar": false,
  "Nombrar": false,
  "Entender": false,
  "Actuar": false
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
    validateTopinc: (state,module) => {
      return{
        ...state,
        [module.payload.name]: module.payload.value
      }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, loadValidate, validateTopinc } = counterSlice.actions

export default counterSlice.reducer