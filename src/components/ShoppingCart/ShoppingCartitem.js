import React from 'react';
import { NavDropdown } from 'react-bootstrap';

export const ShoppingCartitem =({item}) => (
    <NavDropdown.Item>{item.title}-${item.price}-{item.category}</NavDropdown.Item>
);
