import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

export default function TodoList() {
  // get data from local storage
  const getLocalItmes = () => {
    let myList = localStorage.getItem("myList");

    if (myList) {
      return JSON.parse(localStorage.getItem("myList"));
    } else {
      return [];
    }
  };

  const [input, setInput] = useState(""); // this is for to get data from input element
  const [item, setItem] = useState(getLocalItmes()); // this is for to display item written in input box
  const [toggleSubmit, setToggleSubmit] = useState(true); // this is for change icon from addbutton to checkbutton
  const [editItems, setEditItems] = useState(); // this is for to display edited item

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const AddItems = () => {
    if (!input) {
      alert("insert item name");
    } else if (input && !toggleSubmit) {
      setItem(
        item.map((element) => {
          if (element.id === editItems) {
            return { ...element, name: input };
          }
          return element;
        })
      );
      setToggleSubmit(true);
      setEditItems(null);
      setInput("");
    } else {
      const allData = { id: new Date().getTime().toString(), name: input }; // here we generate unique id by using gettime
      setItem((oldvalue) => {
        return [...oldvalue, allData];
      });
      setInput("");
    }
  };

  // delete item function
  const deleteItem = (index) => {
    const newItems = item.filter((element) => {
      return index !== element.id;
    });
    setItem(newItems);
  };

  //edit item function
  const editItem = (id) => {
    let newEditItem = item.find((element) => {
      return element.id === id;
    });
    setToggleSubmit(false);
    setEditItems(id);
    setInput(newEditItem.name);
  };

  //remove all items
  const RemoveItems = () => {
    setItem([]);
  };

  // store data in local storage
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(item));
  }, [item]);

  // material  ui button style
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div className="background">
      <h1> to-do list using CRUD operation</h1>

      <div className="todolist">
        <h1>To do List 💯</h1>

        <div className="input-area">
          <input
            type="text"
            placeholder="Add Items"
            onChange={inputHandler}
            value={input}
          />

          {toggleSubmit ? (
            <i
              className="fa-solid fa-circle-plus add-icon"
              onClick={AddItems}
            />
          ) : (
            <i
              className="fa-solid fa-circle-check check-icon"
              onClick={AddItems}
            />
          )}
        </div>

        <ol>
          {item.map((itemvalue) => {
            return (
              <div className="Li_items" key={itemvalue.id}>
                <li>{itemvalue.name}</li>

                <div className="icons">
                  <i
                    className="fa-solid fa-circle-xmark icon"
                    onClick={() => deleteItem(itemvalue.id)}
                  />
                  <i
                    className="fa-solid fa-pen-to-square icon icon-blue"
                    onClick={() => editItem(itemvalue.id)}
                  />
                </div>
              </div>
            );
          })}
        </ol>

        <ColorButton
          variant="contained"
          className="remove-button"
          onClick={RemoveItems}
        >
          Remove All
        </ColorButton>
      </div>
    </div>
  );
}
