import axios from "axios";
import React, { useEffect } from "react";

function DispData() {
  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Bad Request"));
  }, []);

  return (
    <>
      <div className="container text-bg-success p-5 text-center">
        <h1>User Data</h1>
        <table>
          <thead>
            <tr>{map}</tr>
          </thead>
          <tbody>{map}</tbody>
        </table>
      </div>
    </>
  );
}

export default DispData;

// Install Json server

// npm install -g json-server@0.17.4

// Watch Json Server

// json-server --watch db.json --port 4040
