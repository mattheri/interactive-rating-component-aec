import React from "react";
import "./RoundButton.css";
import Button from "../button/Button";

const RoundButton = (props) => {
  return <Button className="round-button">{props.children}</Button>;
};

export default RoundButton;
