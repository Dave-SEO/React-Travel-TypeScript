import axios from 'axios'
export const GET_PRODUCT_LIST = 'get_product_list'
export const PRODUCT = 'product'

interface productProps {
    type: typeof PRODUCT;
    payload: any;
}
export const product = (data) : productProps => {
    return {
        type: PRODUCT,
        payload: data
    }
}

export type  ActionsProps = productProps
export const getProductActionCreator = () => async (dispatch) => {
  let {data} = await axios.get('http://123.56.149.216:8080/api/productCollections')
  console.log('result', data)
  dispatch(product(data))
}