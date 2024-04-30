import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: '',
    selectOption: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Successful',
      text: 'Form submitted successfully!',
      icon: 'success'
    });
  };

  return (
    <div className="container form">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="phone-number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone-number"
                  name="phonenumber"
                  value={formValues.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="select-option" className="form-label">
                  Select Option
                </label>
                <select
                  className="form-select"
                  id="select-option"
                  name="selectOption"
                  value={formValues.selectOption}
                  onChange={handleChange}
                  aria-label="Default select example"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  placeholder="Type your message..."
                  className="form-control"
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn form-btn fw-bold text-white">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
