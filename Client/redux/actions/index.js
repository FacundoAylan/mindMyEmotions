import { createSlice } from "@reduxjs/toolkit";
import { validateUserAuthentication } from "../../Helpers/authenticationFunctions";

const initialState = {
  // En esta variable se guarda toda la informacion
  json: "",

  // Son los modulos principales
  modules: [
    "Reconocimiento emocional",
    "Habilidades socioemocionales",
    "Salud mental",
  ],

  Reconocimientoemocional:true,
  Habilidadessocioemocionales:false,
  Saludmental:false,
  // Estas variables son los modulos principales
  Reconocimientoemocional: true,
  Habilidadessocioemocionales: false,
  Saludmental: true,

  // Mini modulos de Reconocimiento emocional
  Testdeinteligenciaemocional: true,
  Testinicial: false,
  Identificar: false,
  Nombrar: false,
  Entender: false,
  Actuar: false,

  // Mini modulos de Habilidades socioemocionales
  Testinicialsocioemocional: true,
  Empatia: false,
  Asertividad: false,
  Resiliencia: false,

  // Mini modulos Salut mental
  Diario: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loadInfo: (state, module) => {
      state.json = module.payload;
    },
    validateTopinc: (state, module) => {
      return {
        ...state,
        [module.payload.name]: module.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadInfo, validateTopinc } = counterSlice.actions;

export default counterSlice.reducer;
