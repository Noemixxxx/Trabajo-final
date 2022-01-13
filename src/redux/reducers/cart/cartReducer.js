const initialState = {
    list: []
}
 export const cartReducer = (state = initialState, action) => {
     switch(action.type){
         case ADD_ITEM:
             return { ...state, list: action.payload }
             default:
                 return state;
     }
 }
 