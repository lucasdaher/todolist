import React from "react";
import "../styles.scss";

import RemoveIcon from "../../../assets/removeIcon.svg";

const RemoveBtn = (props) => {
  return (
    <img
      className="remove__button"
      src={RemoveIcon}
      alt="Remove Icon"
      onClick={props.click}
    />
  );
};

export default RemoveBtn;
