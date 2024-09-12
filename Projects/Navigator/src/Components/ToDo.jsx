import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (location.state?.itemToEdit !== undefined) {
      setInputValue(location.state.itemToEdit);
      setEditIndex(location.state.indexToEdit);
      setIsEditing(true);
    }

    if (location.state?.updatedItems) {
      setItems(location.state.updatedItems);
    }
  }, [location.state]);

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
    navigate("/cart", { state: { items } });
  };

  return (
    <div className="container">
      <div
        className="w-75 m-auto mt-5 rounded-5 p-4 main"
        style={{ backgroundColor: "#E8ECD6" }}
      >
        <div className="d-flex justify-content-end m-0">
          <h2 style={{ cursor: "pointer" }} onClick={handleCartClick}>
            🛒
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
