import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";

const Carousel = () => {
  return (
    <div className="carousel carousel-end rounded-box">
      <div className="carousel-item">
        <img src={img1} alt="Image 1" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="Image 2" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img3} alt="Image 3" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img4} alt="Image 4" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img5} alt="Image 5" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img6} alt="Image 6" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img7} alt="Image 7" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img8} alt="Image 8" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img1} alt="Image 1" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="Image 2" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img3} alt="Image 3" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img4} alt="Image 4" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img5} alt="Image 5" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img6} alt="Image 6" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img7} alt="Image 7" className="w-full h-64 object-cover" />
      </div>
      <div className="carousel-item">
        <img src={img8} alt="Image 8" className="w-full h-64 object-cover" />
      </div>
    </div>
  );
};

export default Carousel;
