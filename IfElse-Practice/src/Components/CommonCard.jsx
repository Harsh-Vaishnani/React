import "./CSSFile/Product.css";

function CommonCard({ img, product, descri, catagory, price }) {
  return (
    <>
      <div className="products">
        <div className="first">
          <h3>Product Catagory :- {catagory}</h3>
          <img
            src={img}
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
          ></img>
        </div>
        <div className="second">
          <h2>Product Name :- {product}</h2>
          <h4>Product Price :- {price}</h4>
          <p>Product Description :- {descri}</p>
        </div>
      </div>
    </>
  );
}

export default CommonCard;
