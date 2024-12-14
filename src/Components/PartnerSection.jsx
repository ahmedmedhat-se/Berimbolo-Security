import React from 'react';

function PartnerSection() {
  const partners = [
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 1'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 2'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 3'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 4'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 5'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 6'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 7'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 8'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 9'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 10'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 11'},
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg?1663680530', name: 'Partner 12'},
  ];


  const chunkPartners = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const partnerChunks = chunkPartners(partners, 3);

  return (
    <section className="container-fluid partner p-5">
      <h2 className="text-center text-light mb-5">Our Partners</h2>

      <div
        id="partnerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-wrap="true"
      >
        <div className="carousel-inner">
          {partnerChunks.map((chunk, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="row justify-content-center">
                {chunk.map((partner, idx) => (
                  <div key={idx} className="col-md-4 mb-4">
                    <div className="card h-100" id='partner'>
                      <img
                        src={partner.image}
                        className="card-img-top"
                        alt={partner.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev custom-control"
          type="button"
          data-bs-target="#partnerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-control"
          type="button"
          data-bs-target="#partnerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default PartnerSection;
