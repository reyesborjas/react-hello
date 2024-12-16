import React from "react";
import { Cards } from "./cards";

function Home() {
{/*aqui va el navbar
	aqui va el jumbo tron*/ }









	
  const cardData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Card 1",
      text: "This is the first card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 2",
      text: "This is the second card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 3",
      text: "This is the third card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 4",
      text: "This is the fourth card.",
      link: "#",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <Cards
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
              buttonText={card.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
