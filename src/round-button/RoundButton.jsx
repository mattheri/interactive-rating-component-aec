import React from "react";
import "./RoundButton.css";
import Button from "../button/Button";

const RoundButton = (props) => {
  const classnames = ["round-button"];

  if (props.className) classnames.push(props.className);
  return (
    <Button onClick={props.onClick} className={classnames.join(" ")}>
      {props.children}
    </Button>
  );
};

export default RoundButton;
