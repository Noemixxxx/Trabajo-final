import React, {useEffect, useState} from 'react'
import { getProductById } from '../app/services/productsCartServices';

export const ProductView = ({match}) =>{
  const [productDetail, setProductDetail] = useState(null);

    useEffect(()=>{
        const{id} = match.params
       getProductById(id)
       .then((productFromDB) =>setProductDetail(productFromDB))
      .catch((err)=> console.log(err))   
    },[match]);

    return(
        <div>
            <h1>
            {productDetail && JSON.stringify(productDetail)}
            </h1>
        </div>
    )
}
