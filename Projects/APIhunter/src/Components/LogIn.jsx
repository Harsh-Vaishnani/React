import React, { useState } from "react";

function LogIn() {
  // State to manage theme
  const [lightMode, setLightMode] = useState(false);

  // Function to toggle light mode
  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  // Inline styles based on theme
  const themeStyles = {
    backgroundColor: lightMode ? "#f8f9fa" : "#212529", // Light gray for light mode, dark gray for dark mode
    color: lightMode ? "#000" : "#fff", // Black text for light mode, white text for dark mode
    borderColor: lightMode ? "#000" : "#fff", // Black border for light mode, white border for dark mode
  };

  return (
    <>
      <h2 className="text-center mt-4">LogIn</h2>
      <button 
        onClick={toggleMode}  
        style={{ left: "90%", top: "5%", position: "absolute" }}
      >
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>
      <form
        className="container mt-5 border border-4 rounded-4 w-50 py-4"
        style={{
          backgroundColor: themeStyles.backgroundColor,
          color: themeStyles.color,
          borderColor: themeStyles.borderColor, // Border color based on theme
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="mb-4 m-auto" style={{ width: "80%" }}>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-4 fw-medium"
            style={{ color: themeStyles.color }}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control border border-2 rounded-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{
              backgroundColor: themeStyles.backgroundColor,
              color: themeStyles.color,
              borderColor: themeStyles.borderColor,
            }}
          />
          <div
            id="emailHelp"
            className="form-text fst-italic"
            style={{ color: themeStyles.color }}
          >
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-4 m-auto" style={{ width: "80%" }}>
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fs-4 fw-medium"
            style={{ color: themeStyles.color }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control border border-2 rounded-3"
            id="exampleInputPassword1"
            style={{
              backgroundColor: themeStyles.backgroundColor,
              color: themeStyles.color,
              borderColor: themeStyles.borderColor,
            }}
          />
        </div>
        <button
          type="submit"
          className="btn m-auto justify-content-center d-block"
          style={{
            backgroundColor: themeStyles.backgroundColor,
            color: themeStyles.color,
            borderColor: themeStyles.borderColor,
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default LogIn;
