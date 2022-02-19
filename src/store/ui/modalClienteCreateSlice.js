import {createSlice} from '@reduxjs/toolkit'
export const slice = createSlice({
    name: 'modalClienteCreateSlice',
    initialState: {
        modalOpened: false,
    },
    reducers: {
        setModalOpenedState: (state, action) => {
            state.modalOpened = action.payload;
        }
    }
})

export const { setModalOpenedState} = slice.actions;

export default slice.reducer;
