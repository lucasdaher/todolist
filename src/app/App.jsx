import React from "react";

// Style
import "./styles.scss";

// Components
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Title text="Otimize seu tempo e se organize com o nosso planejador diário." />
    </div>
  );
};

export default App;
