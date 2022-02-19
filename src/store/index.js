import { configureStore } from '@reduxjs/toolkit'
import modalClienteCreateSliceReducer from './ui/modalClienteCreateSlice'
import clienteSliceReducer from './cliente/clienteSlice'

export default configureStore({
  reducer: {
    modalClienteCreate: modalClienteCreateSliceReducer,
    clienteSlice: clienteSliceReducer
  },
})