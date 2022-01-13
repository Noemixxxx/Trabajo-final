import React from 'react';
import { Container } from "react-bootstrap";
import { FilterListProdcts } from '../components/Products/FilterLisProducts';
import { ProductFilter } from '../components/Products/ProductFilter';

export const ProductsView =({history, match}) => {
const { category } = match.params;

    return(
        <Container>
<div className="App">
    <ProductFilter history={history}/>
   <FilterListProdcts category={category}/>
    </div>
    </Container>
    )
}
