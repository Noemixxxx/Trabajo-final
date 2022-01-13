export const getAllProducts = async () =>{
    return api.get(routes.getAllProducts())
}

export const getProductById = async (idProduct) =>{
    return api.get(routes.getProductById(idProduct))
}

export const addNewProduct = async (Product) => {
    return api.post(routes.addProduct(),Product )
}

export const getAllCategories = async () =>{
    return api.get(routes.getAllCategories())
}

 export const getProductsByCategories = async (category) => {
    return api.get(routes.getProductsByCategories(category))
 }
 