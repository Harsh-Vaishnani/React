import React from "react";
import "../Component/CommonCss/Card.css";


// name="SP=portscar" a default value set kri ch. jyare rendring ma ky error aave tyare set kreli value show thay.

function Card({ name="SportsCar", hp, details, imageName }) {
  // image na path ne props sathe merge krva mate ek variable ma store kravyu
  const imagePath = "/src/assets/Images/" + imageName + ".jpg";
  
  return (
    <>
      <div class="main row row-cols-1 row-cols-md-3 g-5 m-auto " >
        <div class="col m-auto p-3">
          <div class="card h-100 border-black border-3 p-3 ">
            <img
              src={imagePath}
              class="card-img-top rounded-3"
              alt={name}
            />
            <div class="card-body text-center">
              <h4 class="card-title">Car Name :-<mark>{name}</mark> </h4>
              <h5>Horsepower in Car :- {hp}</h5>
              <p class="card-text">
                <b>Car Details :-</b> {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
