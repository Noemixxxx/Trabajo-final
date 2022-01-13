import {NavDropdown,Nav, Navbar, } from 'react-bootstrap'
import React, {useState, useEffect} from 'react';
import { ShoppingCartitem } from './ShoppingCartitem'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const ShoppingCart = () =>{
const [totalPrice, setTotalPrice] = useState(0);
const list = useSelector((state) => state.cartReducer.list)

    const getTotalPrice = () =>{
        const total = list?.reduce((totalPrice, currentProduct)=>{

           return totalPrice + currentProduct.price 
        },0);
        setTotalPrice(total);
    };

    useEffect(()=>{
        if(list.length > 0){
            getTotalPrice();
        }
    },[list] );

return(
    <>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example" >
        <Nav>
            <NavDropdown
            id="nav-drapdows-dark-example"
            title="Carrito"
            menuVariant='dark'
            >
                {list?.map((Product) => {
                    console.log(Product)
                    return <ShoppingCartitem key={Product.id} item={Product} />
                } )}
                <NavDropdown.Divider/>
                <Link to={"/purchase"}>Total: ${totalPrice}</Link>
            </NavDropdown>
        </Nav>
     </ Navbar.Collapse>
     </>
);
};
