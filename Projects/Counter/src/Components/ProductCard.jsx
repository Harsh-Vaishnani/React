import React from "react";
import "./CSS/Card.css";

function ProductCard({ product }) {
  return (
    <>
      <div className="card product-card m-auto text-center mb-5">
        <img src={product.image} className="card-img-top pt-3" alt={product.title} />
        <div className="card-body pb-5">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text description">{product.description}</p>
          <p className="card-text price">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="card-text rating">
            <strong>Rating:</strong> {product.rating.rate} (
            {product.rating.count} reviews)
          </p>
          <a href="#" className="btn btn-primary buy-btn">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
