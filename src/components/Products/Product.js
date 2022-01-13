import React from "react";
import { Col, Row, Button, Badge, Card  } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/storageServices";
import "../../css/styles.css";
import { getProductById } from "../../app/services/productsService";
import { addItemToCart } from "../../redux/actions/cart/cartActions";
import { useDispatch } from "react-redux";

export const Product = ({ item }) => {
const { title, image, price, description, category, id } = item;
const dispatcher = useDispatch();

const addProductToCart = (item) =>{
 dispatcher(addItemToCart(item))
}
const handleClickProductCard = (idProduct) => {
  getProductById(idProduct)
    .then((data) => console.log(data))
}
return (
  <div className="col-lg-4 d-flex align-items-stretch">
    <Card  onClick={() => handleClickProductCard(id)} style={{marginBottom: "25px", padding: 6}}>
      <Row>
        <Col xs={15}>
          <Card.Img 
          className="mx-auto"
          variant="top"
          src={image}
          style={{height: 135, width: 135}}
          />
         </Col>
         <Col xs={15}>
           <Badge pill bg="info">
             {category} 
             </Badge> {" "}
         </Col>
      </Row>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Row>
        <Col>
        <Button onClick = {() =>addProductToCart(item) } variant ="warning">Agregar al carrito </Button>
        </Col>
        <Col>
        <Button onClick={()=> saveLastInterestProduct(title)} variant="primary">
          Precio <Badge bg="secondary">${price}</Badge>
        </Button>
        </Col>
      </Row>
    </Card>
  </div>
);
};
