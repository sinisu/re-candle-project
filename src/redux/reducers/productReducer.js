let initialState = {
    productList:[],
    singleProduct:[],
    productOption:[],
}

function productReducer (state = initialState,action) {
    let {type,payload} = action
    switch (type) {
        case "GET_PRODUCT_SUCCESS" :
            return{...state,productList:payload.data};
        case "GET_PRODUCT_INFO" :
            return{...state,singleProduct:payload.data,productOption:payload.data.size}
        default :
            return {...state};
    }
}

export default productReducer;