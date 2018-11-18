import React from 'react';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("show", show)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <h1>rendering modal</h1>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
