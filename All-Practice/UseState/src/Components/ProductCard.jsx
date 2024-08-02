// import React from 'react';


function ProductCard({ product }) {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
