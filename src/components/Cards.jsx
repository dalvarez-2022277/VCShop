import React, { useState, useEffect, useRef } from "react";
import "./backgraund.css";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg"


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const cardsContainerRef = useRef(null);

  const cardsData = [
    {
      title: "84 Mustang SVO",
      description: "",
      imgSrc: img2,
    },
    {
      title: "92 Mustang",
      description: "",
      imgSrc: img3,
    },
    {
      title: "1987 Toyota Pickup Truck",
      description: "",
      imgSrc: img4,
    },
    {
      title: "BigFoot #1 The Originals Moster Truck 1974 Ford F-250",
      description: "",
      imgSrc: img5,
    },
    {
      title: "01 BMW M5",
      description: "",
      imgSrc: img6,
    },
    {
      title: "73 Volvo 142 GL",
      description: "",
      imgSrc: img7,
    },
    {
      title: "Custom Bike",
      description: "",
      imgSrc: img8,
    },
    // Asegúrate de agregar más datos aquí para tener múltiples tarjetas
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(8);
      } else {
        setCardsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamada inicial para establecer el valor correcto

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(cardsData.length / cardsPerPage);
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [cardsPerPage, cardsData.length, currentPage]);

  useEffect(() => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  const indexOfLastCard = (currentPage + 1) * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="relative">
      {/* Área de Animación */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Tarjetas */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 relative z-10"
      >
        {currentCards.length > 0 ? (
          currentCards.map((card, index) => (
            <div key={index} className="card glass w-80 mx-auto">
              <figure>
                {/* Cambié card.image por card.imgSrc */}
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                  <a
                    href="https://wa.me/50240059075?text=Hola%20quiero%20más%20información%20sobre%20el%20producto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Solicitar
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cards to display</p>
        )}
      </div>

      {/* Paginación */}
      <div className="join mt-4 flex justify-center">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, index) => (
            <input
              key={index}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={`${index + 1}`}
              checked={index === currentPage}
              onChange={() => handlePageChange(index)}
            />
          ))}
      </div>
      <br />
    </div>
  );
};

export default Cards;
