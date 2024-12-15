import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../Data/Blog.json';
import comapnyData from '../Data/Berimbolo.json';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="container-fluid blog">
            <div className="p-md-5 text-white text-center d-flex">
                <div className="col-md-6 px-0 m-3">
                    <h1 className="display-4 font-italic">{data.heroTitle}</h1>
                    <h3 className="lead my-3">{data.heroDescription}</h3>
                    <p>{comapnyData.company.description}</p>
                    <p className="lead mb-0">
                        <Link to="/services" className="btn btn-primary">{data.heroCTA}</Link>
                    </p>
                </div>
                <div className="col-md-6 d-none d-md-block m-3">
                    <img src="https://nfsecurity.ca/wp-content/uploads/2019/12/AdobeStock_234191811.jpeg"
                        className="card-img" alt="Berimbolo Company" />
                </div>
            </div>

            <div className="row">
                {data.services.map((service, index) => (
                    <div key={index} className="col-md-6 p-5">
                        <div className="card blog-card flex-md-row p-4 h-100">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className={`d-inline-block mb-2 text-${service.typeColor}`}>{service.type}</strong>
                                <h3 className="mb-0">
                                    <p>{service.title}</p>
                                </h3>
                                <div className="mb-2">{service.date}</div>
                                <p className="card-text mb-auto">{service.description}</p>
                                <Link to="/products">{service.cta}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
