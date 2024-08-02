import React from "react";
import CommonCard from "./CommonCard";

function Cards() {
  const cardData = [
    {
      id: 1,
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "men",
    },
    {
      id: 2,
      photo: "https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg",
      category: "women",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/200x150?text=Men+2",
      category: "men",
    },
    {
      id: 4,
      photo: "https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg",
      category: "women",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/200x150?text=Men+3",
      category: "men",
    },
    {
      id: 6,
      photo: "https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg",
      category: "women",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/200x150?text=Men+4",
      category: "men",
    },
    {
      id: 8,
      photo: "https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg",
      category: "women",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/200x150?text=Men+5",
      category: "men",
    },
    {
      id: 10,
      photo: "https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg",
      category: "women",
    },
  ];
  return <>
  {cardData.map((H) => {
   return <CommonCard image={H.photo} gender={H.category} key={H.id}/>
  })}
  </>;
}

export default Cards;
