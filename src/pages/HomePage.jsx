import Navbar from "../components/Navbar.jsx";
import Carrusel from "../components/Carrusel.jsx"
import Cards from "../components/Cards.jsx"
import Footer from "../components/Footer.jsx"
export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
      id="hero-section"
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5763092/pexels-photo-5763092.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Bienvenido</h1>
            <p className="mb-5 text-white">
              Apasionado por los autos a escala ofrecemos diferentes modelos y
              marcas
            </p>
          </div>
        </div>
      </div>
      <div id="carrusel-section">
      
      </div>
      <div id="cards-section">
      <Cards/>
      </div>
      <div id="footer-section">
      <Footer/>
      </div>
    </>
  );
};

export default HomePage;
