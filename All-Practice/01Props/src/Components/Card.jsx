import React from "react";


function Card({title,img,description}) {
  return (
    <>
      <div className="w-25 py-3 border border-3 border-black rounded-3">
        <h4>Title :- {title}</h4>
        <img src={img} alt="" className="w-100 h-50 object-fit-cover"/>
        <p> <h5> {description} </h5> <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestiae atque. Reiciendis placeat consectetur quae ratione, dolore laboriosam repellat perspiciatis quo corporis ducimus dolores beatae maxime, sit laudantium, rem commodi? </p>
        <button className="bg-success text-white px-3">Click</button>
      </div>
    </>
  );
}

export default Card;
