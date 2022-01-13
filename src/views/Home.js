import React, { useEffect } from 'react';
import { ListProducts } from "../components/Products/ListProducts";
import { AlertProduct } from "../components/Products/AlertProduct";
import { Container } from "react-bootstrap";
import { ProductFilter } from '../components/Products/ProductFilter';
import { useDispatch } from 'react-redux';
import { allProducts } from '../redux/actions/products/productsActions';

export const Home =({history}) => {
   const dispatcher = useDispatch();

   useEffect (() => {
      dispatcher(allProducts())
    },[])

   return (
    <Container>
    <div className="App">
        <ProductFilter history={history} />
      <AlertProduct />
       <ListProducts  />
        </div>
        </Container>
   )
};
