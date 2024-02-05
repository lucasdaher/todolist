import React from "react";
import { useState } from "react";

import CheckboxIcon from "../../../assets/checkbox.svg";
import CheckboxMarked from "../../../assets/checkboxMarked.svg";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const clickCheckbox = () => {
    setChecked(!checked);
    props.check(!checked);
  };

  return (
    <button type="button" className="checkbox__button">
      <img
        className="checkbox__button__img"
        src={checked ? CheckboxMarked : CheckboxIcon}
        alt="Check Icon"
        onClick={clickCheckbox}
      />
    </button>
  );
};

export default Checkbox;
