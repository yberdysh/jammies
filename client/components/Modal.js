import React from 'react';
import {Signup, Login} from './auth-form'

export const Modal = ({ handleClose, show, signup, login }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const whichModal = signup ? "signup" : "login"

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      {signup && <Signup handleClose={() => handleClose("signup")}/>}
      {login && <Login handleClose={() => handleClose("login")}/>}
        <button type="button" onClick={() => handleClose(whichModal)}>close</button>
      </section>
    </div>
  );
};
