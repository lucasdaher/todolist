import React from "react";
import EditIcon from "../../../assets/editIcon.svg";

import "../styles.scss";

const EditBtn = (props) => {
  return (
    <img
      className="edit__button"
      src={EditIcon}
      alt="Edit Icon"
      onClick={props.click}
    />
  );
};

export default EditBtn;
