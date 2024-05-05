import React, { useState } from "react";
import ComponentTop from "./ComponentTop";
import ComponentBottom from "./ComponentBottom";
import "./componentBottom.css";





const FormPage = () => {
  const [info, setInfo] = useState('');

  const handleSubmit = (info) => {
    console.log('info', info)
    setInfo(info);
  }

  return (
    <div>

      <ComponentTop onSubmit={handleSubmit} />
      <ComponentBottom
        value={info}
      />
    </div>
  );
};

export default FormPage