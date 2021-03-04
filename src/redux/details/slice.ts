import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductStateProType {
    loading:boolean;
    error: string | null;
    data: any;
}
const initialState: ProductStateProType = {
    loading: true,
    error: '',
    data: []
}
// 创建异步thunk
export const getProductDetail = createAsyncThunk(
    'productDetail/getProductDetail',
    async (id:string, thunkAPI) => {
        const { data } = await axios.get(
            `http://123.56.149.216:8080/api/touristRoutes/${id}`
          );
        return data;
    }
)

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getProductDetail.pending.type]: (state, action) => {
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = ''
        },
        [getProductDetail.rejected.type]: (state, action:PayloadAction<string | null>) => {
            state.error = action.payload
            state.loading = false
        }
    }
})