import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(function() {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products 🥺", error);
      }
    }
  
    fetchProducts();
  }, []);
  
  

  // Using Ternary Operator 
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <nav>
        <button onClick={() => setSelectedCategory("All")}>Home</button>
        <button onClick={() => setSelectedCategory("fragrances")}>Fragrances</button>
        <button onClick={() => setSelectedCategory("beauty")}>Beauty</button>
        <button onClick={() => setSelectedCategory("furniture")}>Furniture</button>
        <button onClick={() => setSelectedCategory("groceries")}>Groceries</button>
      </nav>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Rating :- {product.rating}</p>
            <p>Stoke :- { product.stock}</p>
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
