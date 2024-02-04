import React, { useState } from "react";

import "./styles.scss";

const Modal = ({ desc, hideModal, modalType }) => {
  return (
    <>
      <div className={hideModal === true ? "hidden" : "modal"}>
        <h1 className="modal__title">Deseja {modalType} esse item?</h1>
        <p className="modal__desc">{desc}</p>

        <div className="modal__actions">
          <button className="modal__actions__deny" type="button">
            Não
          </button>
          <button className="modal__actions__accept" type="button">
            Sim
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
