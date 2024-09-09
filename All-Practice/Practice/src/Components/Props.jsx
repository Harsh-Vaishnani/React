import React from "react";

function Props({ name, age, gender, hobby }) {
  return (
    <>
      <h1>My Name is {name}</h1>
      <h1>My Age is {age}</h1>
      <h1>My Gender is {gender}</h1>
      <div className="d-flex">
        <h1>My Hobbies are: </h1>
        <ul className="d-flex m-0">
          {hobby.map((hobbyItem, ind) => {
            return (
              <li key={ind} className="mx-3 list-unstyled">
                <h2>{hobbyItem}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Props;
