import React from "react";

import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";

function Header() {
  const db = getDatabase(app);

  const sendData = () => {
    set(ref(db, "user/harsh"), {
      id: 1,
      name: "harsh",
      email: "harsh@gmail.com",
    }).then(() => console.log("Data Added Successfully"));
  };

  return <>

    <h1>Firebase Real time Database</h1>
    <button className="btn btn-success" onClick={sendData}>data</button>
  </>;
}

export default Header;
