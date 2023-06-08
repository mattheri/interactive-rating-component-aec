import React from "react";
import RoundButton from "../round-button/RoundButton";
import "./RatingButton.css";

const RatingButton = (props) => {
  const className =
    props.currentlyClicked === Number(props.children) ? "active" : "inactive";

  const onClick = () => {
    props.setValue(Number(props.children));
  };

  return (
    <RoundButton className={className} onClick={onClick}>
      {props.children}
    </RoundButton>
  );
};

export default RatingButton;
