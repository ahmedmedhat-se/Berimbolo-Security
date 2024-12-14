import About from './About';
import Services from './Services';
import PartnerSection from './PartnerSection';
import data from '../Data/Berimbolo.json';


function Home() {
    const imageStyle = {
        opacity: "50%",
    }

    const header = {
        fontWeight: "bold",
        fontSize: "20px"
    }
    return (
        <>
            <div className="home">
                <div class="card home-card text-bg-dark">
                    <img src="https://nfsecurity.ca/wp-content/uploads/2019/12/AdobeStock_234191811.jpeg"
                        className="card-img" alt="Berimbolo Company" style={imageStyle} />
                    <div class="card-img-overlay">
                        <h5 class="card-title" style={header}>{data.company.description}</h5>
                    </div>
                </div>
                <About />
                <Services />
                <PartnerSection />
            </div>
        </>
    );
}

export default Home;
