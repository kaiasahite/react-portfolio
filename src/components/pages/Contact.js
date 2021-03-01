import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

export default function Contact(props) {
  function handleContactClick() {
    document
      .getElementsByClassName("cards__item__link")
      .addEventListener("click", function () {
        window.open(props.href);
      });
  }

  return (
    <>
      <div className="cards">
        <h1>Get in Touch</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                text="GitHub: https://github.com/kaiasahite"
                label="GitHub"
                href="https://github.com/kaiasahite"
                
              />
              <CardItem
                text="LinkedIn: https://www.linkedin.com/in/kaiasahite"
                label="LinkedIn"
                href="https://www.linkedin.com/in/kaiasahite"
                
                
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
