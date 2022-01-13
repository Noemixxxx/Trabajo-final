import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../app/services/productsService";
import { filterBycategory } from "../../redux/actions/products/productsActions";

export const ProductFilter = ({history}) => {
const[filters, setFilters] = useState([]);

const dispatcher = useDispatch(); 

   useEffect(() => {
  getAllCategories().then((data) => setFilters(data));
},[]);

const handleClickFilter = (filter) =>{
// history.push(`/products/${filter}`);
dispatcher(filterBycategory(filter))
};
    return(
    <Dropdown style={{marginBottom: 10}} >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Categorias
  </Dropdown.Toggle>

  <Dropdown.Menu>
      {filters.length > 0 && 
          filters.map((filter, index) => (
          <Dropdown.Item 
          onClick={() => handleClickFilter(filter)}
           key={index}
           >
               {filter}
               </Dropdown.Item> 
               ))}
  </Dropdown.Menu>
</Dropdown>
    )
}
