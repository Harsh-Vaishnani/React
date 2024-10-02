import { child, get, getDatabase, ref, remove } from "firebase/database";
import React, { useState } from "react";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

function ReadData() {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  const dispData = async () => {
    const dbRef = ref(getDatabase(app));
    await get(child(dbRef, `details/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserArray(
            Object.entries(snapshot.val()).map(([key, value]) => ({
              ...value,
              key,
            }))
          );
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = async (key) => {
    const db = getDatabase(app);
    const dbRef = ref(db, `details/users/${key}`);
    await remove(dbRef);
    dispData(); // Refresh data
  };

  const writeData = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header text-center bg-info text-white">
          <h2>Users List</h2>
        </div>
        <div className="card-body">
          <div className="text-center mb-4">
            <button className="btn btn-primary btn-lg me-2" onClick={dispData}>
              Display Data
            </button>
            <button className="btn btn-secondary btn-lg" onClick={writeData}>
              Write Data
            </button>
          </div>
          <ul className="list-group">
            {userArray.length > 0 ? (
              userArray.map((e) => (
                <li
                  key={e.key}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong>
                      {e.firstName} {e.lastName}
                    </strong>
                  </span>
                  <div>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => navigate(`/edit/${e.key}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e.key)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center">No users found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReadData;
