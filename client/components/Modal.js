import React from 'react';
import {Signup} from './auth-form'

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("show", show)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <Signup handleClose={handleClose}/>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
