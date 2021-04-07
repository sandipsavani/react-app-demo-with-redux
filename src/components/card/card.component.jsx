import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  const {
    card: { name, email, id },
  } = props;
  return (
    <div className="cardContainer">
      <img
        alt="Card"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name} </h2>
      <p> {email} </p>
    </div>
  );
};
