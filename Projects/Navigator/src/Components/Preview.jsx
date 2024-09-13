import React, { useState, useEffect } from "react";

function Preview() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    setItems(storedItems);
  }, []);

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1); 
    setItems(updatedItems);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems)); 
  };

  const handleEdit = (index) => {
    const newItem = prompt("Edit item:", items[index]);
    if (newItem) {
      const updatedItems = [...items];
      updatedItems[index] = newItem;
      setItems(updatedItems);
      localStorage.setItem("todoItems", JSON.stringify(updatedItems)); 
    }
  };

  return (
    <div
      className="preview-container w-50 m-auto py-4 mt-4 rounded-4 text-center"
      style={{ backgroundColor: "#E8ECD6" }}
    >
      <h2 className="pb-4">
        <i>Preview of To-Do Items</i>
      </h2>
      {items.length > 0 ? (
        <ul className="px-5">
          {items.map((item, index) => (
            <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
              <h4>{item}</h4>
              <div
                className="mb-3 pb-2"
                style={{ borderBottom: "2px solid black" }}
              >
                <button
                  onClick={() => handleEdit(index)}
                  className="mx-4 btn btn-sm btn-warning ms-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h5>No items available. ⚠️</h5>
      )}
    </div>
  );
}

export default Preview;
