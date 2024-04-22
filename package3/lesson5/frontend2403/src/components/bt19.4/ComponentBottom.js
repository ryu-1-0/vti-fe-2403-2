import React from "react";


const ComponentBottom = ({ value }) => {
  return (
    <div className="bottom">
      <h1>Component Bottom</h1>
      <div className="border_top">
        <textarea type="text" placeholder="Hello VTI"
          value={value}
        />

      </div>

    </div>

  );
};

export default ComponentBottom;