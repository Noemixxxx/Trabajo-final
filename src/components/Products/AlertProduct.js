import React,{useState, useEffect} from "react";
import {  Alert } from "react-bootstrap";

export const AlertProduct = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState("");
    
useEffect(() =>{
  const lastProduct = sessionStorage.getItem("lastProduct")
    
    if(lastProduct){
        setProduct(lastProduct);
        setShow(true);
    }

    return () => {
      sessionStorage.removeItem("lastProduct");
    }

},[]);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>LIQUIDACION </Alert.Heading>
          <p>
          Descubrí las novedades y descuentos en todas las categorías de {product}productos  ¡Compra hoy!
          </p>
        </Alert>
      );
    }
    else {
        return <></>
}
   }
   