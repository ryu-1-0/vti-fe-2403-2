import React, { useState } from "react";



const ComponentTop = (props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    props.onSubmit(inputValue);
  }

  return (
    <div className="top">
      <h1>Component Top</h1>
      <div className="border_top">
        <input type="text" placeholder="Your name here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Send data</button>
      </div>
    </div>
  );
};
export default ComponentTop;
