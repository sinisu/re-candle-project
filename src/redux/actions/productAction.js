function getProducts (searchQuery) {
    return async(dispatch,getState) => {
        let url = `https://my-json-server.typicode.com/sinisu/shop-project/product?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
        // if (categoryId==="") {
        //   setProductList(data);
        // } else {
        //   getCategory(data,categoryId);
        // }
    };
}

export const productAction={getProducts};