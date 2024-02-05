import React, { useState } from "react";

// Components
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Todolist from "../components/Todolist/Todolist";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Title text="Otimize seu tempo e se organize com o nosso planejador diário." />

      <Todolist />
    </div>
  );
};

export default App;
