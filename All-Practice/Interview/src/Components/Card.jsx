import React from 'react'

function Card({title,img,descri,btn}) {
  return (
    <>
     <h2>{title}</h2>
     <img src={img} alt="Can't Load" />
     <p>{descri}</p>
     <button>{btn}</button> 
    </>
  )
}

export default Card
