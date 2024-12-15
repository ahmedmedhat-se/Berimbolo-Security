import React from 'react';

function PartnerSection() {
  const partners = [
    { image: 'https://www.electro-co.com/uploads/projphotos/e0be51e9df46fe83c070ad6cd0dc8d23.jpeg', name: 'WE'},

    { image: 'https://entarabi.com/wp-content/uploads/2024/11/Orange.png', name: 'Orange'},

    { image: 'https://www.ricoh.lu/media/Vodafone%20WT%20640x420%20-%20Mobile%20updated%20_tcm84-59120.jpg', name: 'Vodafone'},

    { image: 'https://media.business-humanrights.org/media/images/Etisalat_Misr-Logo.2e16d0ba.fill-1200x630.png', name: 'Eitsalat'},

    { image: 'https://www.palmhillsdevelopments.com/assets/images/header/Logo.svg', name: 'Palm Hills'},

    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-QYBGqtho3CgUh3XK1omyOgv1eqGA0FjIA&s', name: 'Oracle'},

    { image: 'https://nightingalehq.ai/knowledgebase/glossary/what-is-aws/aws.png', name: 'AWS'},

    { image: 'https://www.aleqt.com/sites/default/files/styles/scale_830/public/a/509489_150592.jpg?itok=cmSFzMz5', name: 'MBC Groups'},

    { image: 'https://media.filfan.com/NewsPics/FilfanNew/large/339362_0.png', name: 'Rotana'},

    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4g6y-is-gv0xHmOsH1yBuOAvXz3ymCZc7w&s', name: 'Flip With Rick'},

    { image: 'https://www.checkpoint.com/wp-content/uploads/emaar-logo-300x180px.png', name: 'Emaar'},

    { image: 'https://esgnews.com/wp-content/uploads/2023/09/IBM.png', name: 'IBM'},
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
                        className="card-img-top h-100"
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