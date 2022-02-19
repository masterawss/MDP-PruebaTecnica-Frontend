import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {deleteClienteApi, getAll, storeClienteToApi} from '../../api/ClienteAPI'

export const fetchAllClientes = createAsyncThunk(
    'clientes/fetchAll',
    async (_, __) => {
        const clientes = await getAll()
        return clientes
    })

export const storeCliente = createAsyncThunk(
    'clientes/storeCliente',
    async (data, _) => {
        const cliente = await storeClienteToApi(data)
        return cliente
    })
export const deleteCliente = createAsyncThunk(
    'clientes/deleteCliente',
    async (data, _) => {
        const id = await deleteClienteApi(data)
        return id
    })

export const slice = createSlice({
    name: 'modalClienteCreateSlice',
    initialState: {
        list: [],
        loading: {
            store: false,
            index: false
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllClientes.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading.index = false;
        })
        .addCase(fetchAllClientes.pending, (state) => {
            state.loading.index = true;
        })

        .addCase(storeCliente.pending, (state) => {
            state.loading.store = true;
        })
        .addCase(storeCliente.fulfilled, (state, action) => {
            state.list = [ ...state.list, action.payload ]
            state.loading.store = false;
        })

        .addCase(deleteCliente.pending, (state) => {
            state.loading.index = true;
        })
        .addCase(deleteCliente.fulfilled, (state, action) => {
            state.list = state.list.filter(item => item.id !== +action.payload)
            state.loading.index = false;
        })
    }
})

export const { setList, addToList} = slice.actions;

export default slice.reducer;
