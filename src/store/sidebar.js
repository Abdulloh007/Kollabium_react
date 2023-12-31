import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    opened: false,
    userName: atob(localStorage.getItem(btoa('name'))),
    avatar: atob(localStorage.getItem(btoa('avatar')))
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.opened == false) {
                state.opened = true
                document.body.classList.add('_open')
            }
            else {
                state.opened = false
                document.body.classList.remove('_open')
            }
        },
        setName: (state, action) => {
            state.userName = action.payload
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle, setName, setAvatar } = sidebarSlice.actions

export default sidebarSlice.reducer