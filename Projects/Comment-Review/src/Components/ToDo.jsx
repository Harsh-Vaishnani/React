import React from "react";



function ToDo() {
    
    
    
  return (
    <>
      <div className="container bg-">
        <div className="w-50 bg-dark m-auto mt-5 rounded-5">
          <h1 className="text-white p-2 text-center mb-4">To Do List</h1>
          <div>
            <div className="d-flex p-3">
              <input
                type="text"
                placeholder="Add Item"
                className="firstInput rounded-3 ps-3 me-5 w-75 fs-5"
              ></input>
              <div className="addItem">
                <a href="#">
                  <h2 className="m-0">+</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
