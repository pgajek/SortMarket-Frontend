import React, { useState } from "react";
import "./LoginPanel.scss";

const LoginPanel = () => {
  const [isLoginOpen, handleLoginOpen] = useState(false);
  return (
    <form
      className={isLoginOpen ? "loginPanel loginPanel--active" : "loginPanel"}
    >
      {isLoginOpen ? (
        <>
          <div className="loginPanel__panelField">
            <label htmlFor="login"></label>
            <input type="text" name="login" id="login" placeholder="Login" />
          </div>
          <div className="loginPanel__panelField">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Hasło"
            />
          </div>
          <button className="loginPanel__panelButton btn">Zaloguj</button>
        </>
      ) : (
        <button className="btn" onClick={() => handleLoginOpen(true)}>
          Zaloguj
        </button>
      )}
    </form>
  );
};

export default LoginPanel;
