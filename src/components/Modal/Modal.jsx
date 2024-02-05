import React, { useState } from "react";

import "./styles.scss";

const Modal = (props) => {
  const [todoInput, setTodoInput] = useState(
    props.todoData ? props.todoData.name : ""
  );

  const onDeny = () => {
    props.closeModal(false);
  };

  const onAccept = () => {
    if (props.edit) {
      if (todoInput === "") {
        alert("Você precisa digitar um novo nome para sua tarefa!");
      } else {
        props.closeModal(true, todoInput);
      }
    } else {
      props.closeModal(true);
    }
  };

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <>
      <div className="modal">
        <h1 className="modal__title">
          {props.edit
            ? "Deseja editar esse item?"
            : "Deseja excluir esse item?"}
        </h1>
        {props.edit ? (
          <>
            <p className="modal__desc">
              Digite no campo abaixo o novo nome da tarefa
            </p>
            <div className="modal__input__container">
              <input
                className="modal__input"
                type="text"
                value={todoInput}
                placeholder="Editar tarefa..."
                onChange={handleInputChange}
              />
            </div>
          </>
        ) : (
          <p className="modal__desc">{props.todoData.name}</p>
        )}

        <div className="modal__actions">
          <button
            className="modal__actions__deny"
            type="button"
            onClick={onDeny}
          >
            Não
          </button>
          <button
            className="modal__actions__accept"
            type="button"
            onClick={onAccept}
          >
            Sim
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
