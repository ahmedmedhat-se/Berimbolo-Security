import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        state: '',
        city: '',
        email: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            address: '',
            gender: '',
            state: '',
            email: ''
        });
    };

    return (
        <div className="container-fluid contact">
                <div className="container p-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card card-registration" style={{border: "0"}}>
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://nfsecurity.ca/wp-content/uploads/2019/12/AdobeStock_234191811.jpeg"
                                            alt="Security"
                                            className="img-fluid"
                                            style={{                      
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-light" id='contact-form'>
                                            <h3 className="mb-5 text-uppercase">registration form</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="firstName"
                                                                value={formData.firstName}
                                                                onChange={handleChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="firstName">First name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="lastName"
                                                                value={formData.lastName}
                                                                onChange={handleChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="lastName">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                </div>

                                                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                    <h6 className="mb-0 me-4">Gender: </h6>
                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="femaleGender"
                                                            value="Female"
                                                            checked={formData.gender === 'Female'}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="maleGender"
                                                            value="Male"
                                                            checked={formData.gender === 'Male'}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline mb-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="otherGender"
                                                            value="Other"
                                                            checked={formData.gender === 'Other'}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="otherGender">Other</label>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <select
                                                            id="state"
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                            className="form-select"
                                                        >
                                                            <option value="1">State</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <select
                                                            id="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            className="form-select"
                                                        >
                                                            <option value="1">City</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label" htmlFor="email">Email ID</label>
                                                </div>

                                                <div className="d-flex">
                                                    <button
                                                        type="button"
                                                        onClick={handleReset}
                                                        className="btn btn-light btn-lg"
                                                    >
                                                        Reset all
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-warning btn-lg ms-2"
                                                    >
                                                        Submit form
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Contact;
