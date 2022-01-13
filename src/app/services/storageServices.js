export const saveLastInterestProduct = (ProductName) =>{
    //API LocalStorage 
sessionStorage.setItem("lastProduct", ProductName)
}
