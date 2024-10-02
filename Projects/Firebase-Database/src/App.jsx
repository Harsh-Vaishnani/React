import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadData from "./Components/ReadData";
import WriteData from "./Components/WriteData";
import EditData from "./Components/Editdata";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WriteData />,
    },
    {
      path: "/read",
      element: <ReadData />,
    },
    {
      path: "/edit/:id",
      element: <EditData />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
