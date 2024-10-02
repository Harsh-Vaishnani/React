import React, { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, `details/users/${id}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    };
    fetchData();
  }, [id]);

  const saveEdit = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `details/users/${id}`);
    await set(dbRef, userData);
    navigate("/read");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header text-center bg-primary text-white">
          <h2>Edit User Information</h2>
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
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
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
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={saveEdit}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditData;
