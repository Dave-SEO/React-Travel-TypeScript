
import { ActionsProps, PRODUCT } from '../../redux/product/productActions'
export interface ProductState {
    product: any[]
}
export const productDefault:ProductState = {
    product: []
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = productDefault, action: ActionsProps) => {
    switch (action.type) {
        case PRODUCT: 
            return {...state, product: action.payload}
        default:
           return state
    }
}