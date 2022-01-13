import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Product } from "./Product";

export const ListProducts = () => {
  const products = useSelector((state) => state.productsReducer.products);

  return (
    <Row xs={4}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos... </p>
        </div>
      ) : (
        products.map((product, index) => <Product key={index} item={product} />)
      )}
    </Row>
  );
};
