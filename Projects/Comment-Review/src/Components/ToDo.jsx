import React, { useState } from "react";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Edit state management
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid item!");
      return;
    }
    // Remove Letter Spacing in string
    //Convert lowercase to uppercase
    const formattedInput = inputValue.replace(/\s+/g, "").toUpperCase();

    if (isEditing) {
      // Update item
      const updatedItems = [...items];
      updatedItems[editIndex] = formattedInput;
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new item
      setItems([...items, formattedInput]);
    }

    // Clear input field after Click "+"
    setInputValue("");
  };

  const editItem = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  //For Delete Item
  const deleteItem = (index) => {
    const updatedItems = [...items]; //Spread Operator ka Use
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="container ">
        <div
          className="w-75  m-auto mt-5 rounded-5 p-4 main"
          style={{ backgroundColor: "#E8ECD6" }}
        >
          <h1 className=" p-2 text-center mb-4" style={{ color: "#31473A" }}>
            To Do List 📝
          </h1>
          <div>
            <div className="d-flex px-3 pb-4 justify-content-center">
              <input
                type="text"
                placeholder="Add Item . . . "
                className="firstInput rounded-3 ps-3 me-5 w-75 fs-5"
                value={inputValue}
                style={{ backgroundColor: "#31473A", color: "#E8ECD6" }}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="addItem" style={{ backgroundColor: "#31473A" }}>
                <a href="#" onClick={addItem}>
                  <h3 className="m-0" style={{ color: "#E8ECD6" }}>
                    {isEditing ? "+" : "+"}
                  </h3>
                </a>
              </div>
            </div>
          </div>
          <div className="text-white">
            <ul style={{ paddingLeft: "10%" }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="fs-5 pb-2 w-75 d-flex align-items-center"
                  style={{
                    listStyle: "none",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  {item}
                  <div className="ms-5 w-100 justify-content-end d-flex">
                    <button
                      onClick={() => editItem(index)}
                      className="mx-4 btn btn-sm btn-warning ms-2 border border-3 border-black"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(index)}
                      className="btn btn-sm btn-danger ms-2 border border-3 border-black"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
