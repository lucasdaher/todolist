import React from "react";
import "./styles.scss";

const Title = ({ text }) => {
  return (
    <section className="title">
      <h1 className="title__heading">{text}</h1>
    </section>
  );
};

export default Title;
