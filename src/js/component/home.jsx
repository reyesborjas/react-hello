import React from "react";
import { Cards } from "./cards";
import { Navbar } from "./Navbar";
import { Titulo } from "./titulo";

function Home() {
{/*aqui va el navbar
	aqui va el jumbo tron*/ }










  const cardData = [
    {
      image: "https://soltech.net/wp-content/uploads/2014/05/HTML5.webp",
      title: "Card 1",
      text: "This is the first card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://blog.leonhassan.co.uk/content/images/size/w2000/2019/09/css3.svg",
      title: "Card 2",
      text: "This is the second card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      title: "Card 3",
      text: "This is the third card.",
      link: "#",
      buttonText: "Learn More",
    },
    {
      image: "https://keepcoding.io/wp-content/uploads/2023/08/image-200.png",
      title: "Card 4",
      text: "This is the fourth card.",
      link: "#",
      buttonText: "Learn More",
    },
  ];

  return (
   <div><Navbar/>
   <div className="jumbotron"> <Titulo/></div>
  
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
    </div>
    
  );
}

export default Home;
