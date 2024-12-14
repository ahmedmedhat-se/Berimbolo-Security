import React from 'react';
import services from '../Data/Services.json';

const ServiceCard = ({ title, description, imageUrl }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card services-card h-100 border-0">
                <img src={imageUrl} className="card-img-top" alt={title} height={200} />
                <div className="card-body">
                    <h5 className="card-title text-light">{title}</h5>
                    <p className="card-text text-light">{description}</p>
                </div>
                <div className="card-footer">
                    <a href={imageUrl} target='_blank' className='btn mb-2'>Visit</a>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div className="container-fluid services">
            <section className="container py-5">
                <h2 className="text-center mb-5 text-light">Our Services</h2>
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
