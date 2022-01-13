import { getAllProducts} from "../../../app/services/productsService"


export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"

// Actions creator
const getAllproductsAction = (products) => ({type: GET_ALL_PRODUCTS, payload: products})
 const filterProducts = (products) => ({type: FILTER_PRODUCTS, payload: products})

// Async actions
export const allProducts = () => {
    return async dispatch => {
        try {
            const products = await getAllProducts()
            dispatch(getAllproductsAction(products))
           } catch(err) {
               console.log(err)
           }
    }
}
 export const filterBycategory = (category) => {
     return (dispatch, getState) => {
         const state = getState()

         const {products} = state.productsReducer
         const filtered = products.filter((product) => product.category === category)
         dispatch(filterProducts(filtered))
     }
 }
 