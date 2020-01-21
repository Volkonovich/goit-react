import React from "react";

const Modal = ({ id, object }) => (
  <div className="Overlay">
    <div className="Modal">
      <img src={object.webformatURL} alt="sfcw" />
    </div>
  </div>
);

export default Modal;
