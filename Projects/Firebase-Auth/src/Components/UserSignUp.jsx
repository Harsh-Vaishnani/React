import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function UserSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Signed Up Successfully"))
      .catch((error) => alert(error.message));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) => alert(error.message));
  };

  return (
    <div className="signup-container p-5 my-5 rounded-3 shadow-sm bg-white">
      <h1 className="text-center mb-4 fw-bold text-primary">Create an Account</h1>
      <div className="form-group mb-3">
        <label className="form-label fw-semibold text-secondary">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="form-control py-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-4">
        <label className="form-label fw-semibold text-secondary">Password</label>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="form-control py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-3">
        <button className="btn btn-outline-danger py-2" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <button className="btn btn-primary py-2" onClick={signupUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default UserSignUp;
