import { useState } from "react";
import "../Components/CSS/Form.css";

function From() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ 
      //  previous state ko spread kr ne ke liye (update kar ne kiye (add kar ne liye))
      ...prevData,
      // feild update ke liye
      [name]: value,
    }));
  }

  return (
    <div className="container mt-5 border border-3 border-black">
      <form className="form" onSubmit={(e)=>e.preventDefault()}>
        <div className="form-group">
          <label>Enter Your First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Your First Name"
          />
        </div>
        <div className="form-group">
          <label>Enter Your Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Your Last Name"
          />
        </div>
        <div className="form-group">
          <label>Enter Your Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label>Enter Your Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </div>
        <div className="form-group">
          <label>Enter Your Address:</label>
          <textarea
            name="address"
            placeholder="Enter Your Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group m-auto mb-5">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
      <div className="message-box">
        <p>
          User Name is: &nbsp;
          <span className="fw-bold fst-italic text-bg-warning">
            {formData.firstName} {formData.lastName}
          </span>
        </p>
        <p>
          User Email is: &nbsp;
          <span className="fw-bold fst-italic text-bg-warning">
            {formData.email}
          </span>
        </p>
        <p>
          User Password is: &nbsp;
          <span className="fw-bold fst-italic text-bg-warning">
            {formData.password}
          </span>
        </p>
        <p>
          User Address is : &nbsp;
          <span className="fw-bold fst-italic text-bg-warning">
             {formData.address}
          </span>
        </p>
      </div>
    </div>
  );
}

export default From;
