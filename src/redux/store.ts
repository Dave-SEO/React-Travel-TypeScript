import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './language/languageReducer'
import { i18nChange } from './middleware/i18nChange'
import productReducer from './product/productReducer'
const rootReducer = combineReducers({
    language: languageReducer,
    productReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk,i18nChange))

// 定义组件中 state的类型
export type RootState = ReturnType<typeof store.getState>
export default store