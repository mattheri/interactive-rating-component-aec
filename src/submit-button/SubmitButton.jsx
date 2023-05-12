import React from "react";
import Button from "../button/Button";
import "./SubmitButton.css";

const SubmitButton = (props) => {
  return (
    <Button type="submit" className="submit-button">
      {props.children}
    </Button>
  );
};

export default SubmitButton;
