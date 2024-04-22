import React, { useState } from "react";
import ComponentTop from "./ComponentTop";
import ComponentBottom from "./ComponentBottom";
import "./componentBottom.css";





const FormPage = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (value) => {
    setInput(value);
  }

  return (
    <div>

      <ComponentTop onSubmit={handleSubmit} />
      <ComponentBottom
        value={input}
      />
    </div>
  );
};

export default FormPage