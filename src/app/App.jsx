import React, { useState } from "react";

// Style
import "./styles.scss";

// Components
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Modal from "../components/Modal/Modal";

const App = () => {
  const [hideModal, setHideModal] = useState(true);
  const [modalType, setModalType] = useState("editar");

  const [desc, setDesc] = useState("Colocar as descrições da tarefa aqui.");

  const handleDescModal = (description) => {
    if (!hideModal) {
      setDesc(description);
    } else {
      setDesc("Um erro foi encontrado, recarregue a página!");
    }
  };

  const handleOpenModal = (description) => {
    if (hideModal) {
      setModalType("adicionar");
      setHideModal(false);

      handleDescModal(description);
    } else {
      setHideModal(true);
    }
  };

  return (
    <div className="app">
      <Header />

      <Title text="Otimize seu tempo e se organize com o nosso planejador diário." />

      <Modal hideModal={hideModal} desc={desc} modalType={modalType} />
    </div>
  );
};

export default App;
