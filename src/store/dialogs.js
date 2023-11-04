import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    freelanceActive: false,
    newsActive: false,
    purchaseActive: false,
    raitingActive: false,
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openFreeelanceDialog: (state) => {
            state.freelanceActive = true
            document.body.style.overflow = 'hidden'
        },
        closeFreeelanceDialog: (state) => {
            state.freelanceActive = false
            document.body.style.overflow = ''
        },
        openNewsDialog: (state) => {
            state.newsActive = true
            document.body.style.overflow = 'hidden'
        },
        closeNewsDialog: (state) => {
            state.newsActive = false
            document.body.style.overflow = ''
        },
        openPurchaseDialog: (state) => {
            state.purchaseActive = true
            document.body.style.overflow = 'hidden'
        },
        closePurchaseDialog: (state) => {
            state.purchaseActive = false
            document.body.style.overflow = ''
        },
        openRaitingDialog: (state) => {
            state.raitingActive = true
            document.body.style.overflow = 'hidden'
        },
        closeRaitingDialog: (state) => {
            state.raitingActive = false
            document.body.style.overflow = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const { openFreeelanceDialog,
    closeFreeelanceDialog,
    openNewsDialog,
    closeNewsDialog,
    openPurchaseDialog,
    closePurchaseDialog,
    openRaitingDialog,
    closeRaitingDialog } = dialogSlice.actions

export default dialogSlice.reducer