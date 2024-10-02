import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

function WriteData() {
  const navigate = useNavigate();

  const [inpData1, setInpData1] = useState("");
  const [inpData2, setInpData2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "details/users");
    const newDbRef = push(dbRef);
    set(newDbRef, {
      firstName: inpData1,
      lastName: inpData2,
    })
      .then(() => {
        alert("Data Saved Successfully");
        navigate("/read");
      })
      .catch(() => alert("Error saving data!"));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header text-center bg-primary text-white">
          <h2>Write User Data</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
                value={inpData1}
                onChange={(e) => setInpData1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Last Name"
                value={inpData2}
                onChange={(e) => setInpData2(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={saveData}
              >
                Save Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WriteData;
