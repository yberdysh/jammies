import React from 'react';
import {Signup, Login} from './auth-form'

export const Modal = ({ handleClose, show, signup, login }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      {signup && <Signup handleClose={handleClose}/>}
      {login && <Login handleClose={handleClose}/>}
        <button type="button" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
