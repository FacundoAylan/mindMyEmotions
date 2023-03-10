import { createSlice } from '@reduxjs/toolkit'

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
    validateTopinc: (state,module) => {
      const info = module.payload;
      console.log(info)
      for( let i = 0;i<state.validate.length; i++){
        // console.log(state.validate[i].module)
        // console.log(info)
        // state.validate[i].topics[0]
      }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, loadValidate, validateTopinc } = counterSlice.actions

export default counterSlice.reducer