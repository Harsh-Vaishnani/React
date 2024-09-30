import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);

function UserSignup() {
  const [data, setdata] = useState({ email: "", password: "" });

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("sueeccessfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container text-bg-dark p-4">
        <div className="col">
          <label htmlFor="">User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email Here"
            className="form-control my-3"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col">
          <label htmlFor="">User Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password Here"
            className="form-control my-3"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={signupUser}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
