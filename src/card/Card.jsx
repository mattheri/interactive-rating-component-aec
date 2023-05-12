import React from "react";
import "./Card.css";
import Container from "../container/Container";

const Card = (props) => {
  return <Container className="card">{props.children}</Container>;
};

export default Card;
