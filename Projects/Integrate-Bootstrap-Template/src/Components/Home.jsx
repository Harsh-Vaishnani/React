import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products", error);
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
      <nav className="justify-content-evenly d-flex header fixed-top bg-light">
        <button
          className="fs-5 text-dark fw-bold btn btn-link" style={{textDecoration:"none"}}
          onClick={() => setSelectedCategory("All")}
        >
          Home
        </button>
        <button
          className="fs-5 text-dark fw-bold btn btn-link" style={{textDecoration:"none"}}
          onClick={() => setSelectedCategory("fragrances")}
        >
          Fragrances
        </button>
        <button
          className="fs-5 text-dark fw-bold btn btn-link" style={{textDecoration:"none"}}
          onClick={() => setSelectedCategory("beauty")}
        >
          Beauty
        </button>
        <button
          className="fs-5 text-dark fw-bold btn btn-link" style={{textDecoration:"none"}} 
          onClick={() => setSelectedCategory("furniture")}
        >
          Furniture
        </button>
        <button
          className="fs-5 text-dark fw-bold btn btn-link" style={{textDecoration:"none"}}
          onClick={() => setSelectedCategory("groceries")}
        >
          Groceries
        </button>
      </nav>

      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
            >
              <div
                className="card p-3 border-dark rounded-3 h-100"
                style={{ backgroundColor: "#C4CDC1" }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h3 className="card-title">{product.title.slice(0, 15)}</h3>
                  <p className="card-text">
                    <i>{product.description.slice(0, 60)}</i>
                  </p>
                  <h5 style={{ color: "#646464" }}>Rating ➥ {product.rating}</h5>
                  <h5 style={{ color: "#646464" }}>Stock ➥ {product.stock}</h5>
                  <h5 className="mt-4">
                    <mark className="px-3 py-1 rounded-3 border border-3 border-success">
                      $ {product.price}
                    </mark>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center mt-4">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=60014&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=60984&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=85154&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=85044&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2020 Copyright:{" "}
          <a className="text-body" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
