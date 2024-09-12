import React, { useState, useEffect } from "react";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("todoEditState")) || {};

    if (savedState.itemToEdit !== undefined) {
      setInputValue(savedState.itemToEdit);
      setEditIndex(savedState.indexToEdit);
      setIsEditing(true);
    }

    if (savedState.updatedItems) {
      setItems(savedState.updatedItems);
    }
  }, []);

  const addItem = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid item!");
      return;
    }

    const formattedInput = inputValue.replace(/\s+/g, "").toUpperCase();

    if (isEditing) {
      const updatedItems = [...items];
      updatedItems[editIndex] = formattedInput;
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setItems([...items, formattedInput]);
    }

    setInputValue("");
  };

  const handleCartClick = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));

    window.location.href = "/cart"; 
  };

  return (
    <div className="container">
      <div
        className="w-75 m-auto mt-5 rounded-5 p-4 main"
        style={{ backgroundColor: "#E8ECD6" }}
      >
        <div className="d-flex justify-content-end m-0 position-relative">
          <h2 style={{ cursor: "pointer" }} onClick={handleCartClick}>
            🛒
            {items.length > 0 && (
              <span
                className="badge"
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  backgroundColor: "#FF6F61",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "5px 10px",
                  fontSize: "14px",
                }}
              >
                {items.length}
              </span>
            )}
          </h2>
        </div>
        <h1 className="p-2 text-center mb-4" style={{ color: "#31473A" }}>
          To Do List 📝
        </h1>
        <div>
          <div className="d-flex px-3 pb-5 justify-content-center">
            <input
              type="text"
              placeholder="Add Item . . . "
              className="firstInput rounded-3 ps-3 me-5 w-75 fs-5"
              value={inputValue}
              style={{ backgroundColor: "#31473A", color: "#E8ECD6" }}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="addItem" style={{ backgroundColor: "#31473A" }}>
              <a href="#" onClick={addItem} style={{ textDecoration: "none" }}>
                <h3
                  className="m-0 px-2"
                  style={{
                    color: "#E8ECD6",
                    fontSize: "25px",
                    lineHeight: "35px",
                  }}
                >
                  {isEditing ? "Edit" : "+"}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
