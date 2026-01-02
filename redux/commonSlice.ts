import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CommonState = {
    menu: {
        active: string
    }
}

const initialState: CommonState = {
    menu: {
        active: 'home',
    },
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setMenuActive: (state, action: PayloadAction<string>) => {
            state.menu.active = action.payload
        },
    },
})

export const { setMenuActive } = commonSlice.actions
export default commonSlice.reducer
