import React from "react";

function CommonCard({gender,image,price}) {
  return (
    <>
      <img src={image} alt="" style={{width:"200px",height:"200px"}} />
      <h5>Catagory :-{gender}</h5>
      <p>Price :-{price} </p>
    </>
  );
}

export default CommonCard;
