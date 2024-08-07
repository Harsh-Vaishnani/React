import { useState } from "react";
import "../Components/CSS/Form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
    dob: "",
    gender: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (!form.phonenumber) newErrors.phonenumber = "Phone number is required";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.address) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);
      // Handle form submission
    }
  };

  return (
    <div className="container mt-5 mb-5 border border-3 border-black p-4 rounded">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Enter Your First Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your First Name"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter Your Last Name"
            className="form-control"
          />
          {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="form-control"
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="form-control"
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Phone Number:</label>
          <input
            type="tel"
            name="phonenumber"
            value={form.phonenumber}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="form-control"
          />
          {errors.phonenumber && (
            <p className="text-danger">{errors.phonenumber}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Date Of Birth:</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="form-control"
          />
          {errors.dob && <p className="text-danger">{errors.dob}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Choose Your Gender:</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Choose Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="trans">Trans</option>
          </select>
          {errors.gender && <p className="text-danger">{errors.gender}</p>}
        </div>
        <div className="form-group mb-3">
          <label>Enter Your Address:</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter Your Address"
            className="form-control"
          ></textarea>
          {errors.address && <p className="text-danger">{errors.address}</p>}
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
          <strong>User Name: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.name} {form.lastName}
          </span>
        </p>
        <p>
          <strong>User Email: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.email}
          </span>
        </p>
        <p>
          <strong>User Password: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.password}
          </span>
        </p>
        <p>
          <strong>User Phone Number: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.phonenumber}
          </span>
        </p>
        <p>
          <strong>User Date Of Birth: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.dob}
          </span>
        </p>
        <p>
          <strong>User Gender: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.gender}
          </span>
        </p>
        <p>
          <strong>User Address: </strong>
          <span className="fw-bold fst-italic text-bg-warning rounded p-0">
            {form.address}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Form;
