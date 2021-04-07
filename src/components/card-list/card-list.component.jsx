import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="cardList">
      {" "}
      {props.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}{" "}
    </div>
  );
};
