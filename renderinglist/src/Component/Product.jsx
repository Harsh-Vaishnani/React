import React from "react";
import { ProductData } from "./Data";
import FilterCard from "./FilterCard"

function Product() {
  const cardData = ProductData.map((products) => (
    <li key={products.id} style={{border:"2px solid black",margin:"10px",textAlign:"center",borderRadius:"20px",padding:"10px 0px 10px 0px"}}>  
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={products.image}
          style={{ height: "200px", objectFit: "contain",width:"200px" }}
          alt={products.title}
        />
        <div className="card-body">
          <h3 style={{fontFamily:"sans-serif"}}>{products.title.slice(0, 40)}</h3>
          <p style={{fontStyle:"italic"}}>{products.description.slice(0, 40)}</p>
          <h3>
          <a href="#" style={{color:"black",textDecoration:"none"}}>₹
            {products.price}
          </a>
          </h3>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <h1 style={{textAlign:"center",marginTop:"5%"}}><mark style={{padding:"5px 10px 5px 10px"}}>All Products</mark></h1>
      <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
        {cardData}
      </ul>
      <FilterCard/>
    </>
  );
}

export default Product;
