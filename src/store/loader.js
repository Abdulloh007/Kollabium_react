import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: false,
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        ternOn: (state) => {
            state.active = true
            document.body.style.overflow = 'hidden'
        },
        ternOff: (state) => {
            state.active = false
            document.body.style.overflow = ''
        }
    },
})

// Action creators are generated for each case reducer function
export const { ternOn, ternOff } = loaderSlice.actions

export default loaderSlice.reducer