import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import { getAllProducts } from "../../app/services/productsCartServices";

export const DetailCart = () => {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        getAllProducts()
        .then ((allProductsFroDB) => setProducts(allProductsFroDB) )
    
    },[])
 
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Category</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
 
        {products.length > 0 &&
        products.map((Product, index) =>(
            <tr key={index}>
            <td>{Product.id}</td>
            <td>{Product.title}</td>
            <td>{Product.category}</td>
            <td>{Product.price}</td>
            </tr>

        ) )}
     
    
  </tbody>
</Table>
    )
}
