import React from "react";
import { ProductData } from "./Data";

function Product() {
  // Filter the products to only include men's clothing
  const mensClothing = ProductData.filter(product => product.category === "men's clothing");

  // Filter the products to only include women's clothing
  const womensClothing = ProductData.filter(product => product.category === "women's clothing");

  // Filter the products to only include jewelry
  const jewelry = ProductData.filter(product => product.category === "jewelery");

  // Filter the products to only include electronics
  const electronics = ProductData.filter(product => product.category === "electronics");

  const renderCard = (product) => (
    <li key={product.id} style={{border:"2px solid black",margin:"10px",textAlign:"center",borderRadius:"20px",padding:"10px 0px 10px 0px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>  
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          style={{ height: "200px", objectFit: "contain",width:"200px" }}
          alt={product.title}
        />
        <div className="card-body">
          <h3 style={{fontFamily:"sans-serif"}}>{product.title.slice(0, 40)}</h3>
          <p style={{fontStyle:"italic"}}>{product.description.slice(0, 40)}</p>
          <h3>
            <a href="#" style={{color:"black",textDecoration:"none"}}>₹
              {product.price}
            </a>
          </h3>
        </div>
      </div>
    </li>
  );

  return (
    <div>
      
      <section style={{marginTop:"10%"}}>
        <h2 style={{textAlign:"center", color: "#333", margin: "20px 0"}}><mark style={{padding:"5px 10px 5px 10px"}}>Men's Clothing</mark></h2>
        <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
          {mensClothing.map(renderCard)}
        </ul>
      </section>

      <section style={{marginTop:"10%"}}>
        <h2 style={{textAlign:"center", color: "#333", margin: "20px 0"}}><mark style={{padding:"5px 10px 5px 10px"}}>Women's Clothing</mark></h2>
        <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
          {womensClothing.map(renderCard)}
        </ul>
      </section>

      <section style={{marginTop:"10%"}}>
        <h2 style={{textAlign:"center", color: "#333", margin: "20px 0"}}><mark style={{padding:"5px 10px 5px 10px"}}>Jewelry</mark></h2>
        <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
          {jewelry.map(renderCard)}
        </ul>
      </section>

      <section style={{marginTop:"10%"}}>
        <h2 style={{textAlign:"center", color: "#333", margin: "20px 0"}}><mark style={{padding:"5px 10px 5px 10px"}}>Electronics</mark></h2>
        <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
          {electronics.map(renderCard)}
        </ul>
      </section>
    </div>
  );
}

export default Product;
