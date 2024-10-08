import { useState } from "react";
import "../Components/CSS/Form.css";

function Form() {
  const [Form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  function handleFirstName(e) {
    setForm({
      ...Form,
      name: e.target.value,
    });
  }
  function handleLastName(e) {
    setForm({
      ...Form,

      lastName: e.target.value,
    });
  }
  function handleEmail(e) {
    setForm({
      ...Form,

      email: e.target.value,
    });
  }
  function handlePassword(e) {
    setForm({
      ...Form,

      password: e.target.value,
    });
  }
  function handleAddress(e) {
    setForm({
      ...Form,

      address: e.target.value,
    });
  }

  return (
    <div className="container mt-5 mb-5 border border-3 border-black p-4 rounded">
      <form className="form">
        <div className="form-group mb-3">
          <label>Enter Your First Name:</label>
          <input
            type="text"
            value={Form.name}
            onChange={handleFirstName}
            placeholder="Enter Your First Name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Last Name:</label>
          <input
            type="text"
            value={Form.lastName}
            onChange={handleLastName}
            placeholder="Enter Your Last Name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Email:</label>
          <input
            type="email"
            value={Form.email}
            onChange={handleEmail}
            placeholder="Enter Your Email"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Password:</label>
          <input
            type="password"
            value={Form.password}
            onChange={handlePassword}
            placeholder="Enter Your Password"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Address:</label>
          <textarea
            placeholder="Enter Your Address"
            value={Form.address}
            onChange={handleAddress}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div className="message-box mt-5 p-3 border rounded bg-light">
        <h4 className="text-center mb-3">User Information</h4>
        <p>
          <strong>User Name : &nbsp;</strong>
          <span className="fw-bold fst-italic text-bg-warning  rounded p-0">
            {Form.name} {Form.lastName}
          </span>
        </p>
        <p>
          <strong>User Email : &nbsp;</strong>
          <span className="fw-bold fst-italic text-bg-warning  rounded p-0">
            {Form.email}
          </span>
        </p>
        <p>
          <strong>User Password : &nbsp;</strong>
          <span className="fw-bold fst-italic text-bg-warning  rounded p-0">
            {Form.password}
          </span>
        </p>
        <p>
          <strong>User Address : &nbsp;</strong>
          <span className="fw-bold fst-italic text-bg-warning  rounded p-0">
            {Form.address}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Form;
