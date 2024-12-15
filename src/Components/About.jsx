import React from 'react';
import data from '../Data/Berimbolo.json'; // Ensure the path is correct

const About = () => {
    const { company, services } = data;

    return (
        <div className="container-fluid about p-5">
            <section className="about-section">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="https://img.freepik.com/free-photo/handsome-man-white-shirt-businessman-working-online_1157-48549.jpg"
                            alt="Berimbolo Security"
                            className="img-fluid rounded mb-4"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">{company.name}</h2>
                        <div className="about-description mb-4">
                            <p>{company.description}</p>
                        </div>

                        <div className="services-section mb-4">
                            <h4 className="mb-3 text-center">Our Services:</h4>
                            <ul>
                                <li><strong>{services['security-service']}</strong></li>
                                <li><strong>{services['alarm-service']}</strong></li>
                                <li><strong>{services['cctv-service']}</strong></li>
                                <li><strong>{services['monitoring-service']}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Contacts</h2>
                        <div className="about-description mb-4">
                            <p>{company.contact.description}</p>
                        </div>

                        <div className="contact-section">
                            <h4 className="text-center mb-3">Find Us:</h4>
                            <p><strong>Phone:</strong> {company.contact.phone}</p>
                            <p><strong>Another Phone:</strong> {company.contact['another-phone']}</p>
                            <p><strong>Email:</strong> <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></p>
                            <p><strong>Address:</strong> {company.contact.address}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193870.199264919!2d-74.11808619772702!3d40.78306012028756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599c2f3848a9%3A0x2f2e14cd7eb021e7!2sNew%20York%20City%2C%20New%20York!5e0!3m2!1sen!2sus!4v1688062023323!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="New York City Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
