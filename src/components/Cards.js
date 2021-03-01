import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>about me </h1>
      <br></br>
      <div className="cards__container">
        <div className="cards__warpper">
          <ul className="cards__items">
            <CardItem
              src="public\images\Capture1.JPG"
              text="code refractor: https://github.com/kaiasahite/code-refractor"
            />
            <CardItem
              src="public\images\quiz.JPG"
              text="code quiz: https://github.com/kaiasahite/skateboard-quiz"
            />
            <CardItem
              src="public\images\scheduler.jpg"
              text="scheduler: https://github.com/kaiasahite/day-planner"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              src="public\images\Family-Planner_MainPage.png"
              text="Family planner: https://github.com/kaiasahite/FamilyPlanner"
            />
            <CardItem
              src="public\images\readme generator.jpg"
              text="readme generator: https://github.com/kaiasahite/readMe-generator"
            />
            <CardItem
              src="public\images\whatsnotapp.png"
              text="whats-not-app: https://github.com/kaiasahite/whatsnotapp-messaging"
            />
            
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
