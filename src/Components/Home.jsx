import Blog from './Blog';
import About from './About';
import Services from './Services';
import PartnerSection from './PartnerSection';


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
                <Blog />
                <About />
                <Services />
                <PartnerSection />
            </div>
        </>
    );
}

export default Home;
