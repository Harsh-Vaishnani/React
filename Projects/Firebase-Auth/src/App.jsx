
import React, { useEffect, useState } from "react";
import UserSignup from "./Components/UserSignUp";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import './App.css'; 

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User Logout");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="container signup-container text-center p-5 rounded shadow-lg">
        <h1 className="display-4 mb-4">Sign Up</h1>
        <p className="lead mb-5">Create an account to get started</p>
        <UserSignup />
      </div>
    );
  }

  return (
    <div className="container auth-container text-center p-5 rounded shadow-lg">
      <h1 className="display-4 mb-4">Welcome!</h1>
      <h2 className="text-success mb-4">Namaste, {user.email}</h2>
      <p className="lead">You are now logged in using Google Auth.</p>
      <button className="btn btn-danger mt-4" onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
}

export default App;
