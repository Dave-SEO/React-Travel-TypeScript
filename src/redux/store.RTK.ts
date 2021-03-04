import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './details/slice'
import languageReducer from './language/languageReducer'
import { i18nChange } from './middleware/i18nChange'
import productReducer from './product/productReducer'
// 合并多个reducer
const rootReducer = combineReducers({
    language: languageReducer,
    productReducer,
    detail: productDetailSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
    // getDefaultMiddleware 获取自身携带的中间件
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), i18nChange],
    devTools: true
})

// 定义组件中 state的类型
export type RootState = ReturnType<typeof store.getState>
export default store