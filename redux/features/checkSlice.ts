import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


const initialState = {
    data: [],
    status: "idle",//'idle' | 'loading' | 'succeeded' | 'failed',
    message: "",
    type: ""
}

export const checkSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
})

export default checkSlice.reducer

export const selectAllCheck = (state:RootState) => state.check

