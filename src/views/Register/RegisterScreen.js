import React, { useState } from "react";
import "./RegisterScreen.scss";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import { checkValidity } from "helpers/index";
import regex from "helpers/regex";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accept, setAccept] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!checkValidity(login, regex.login)) {
      return alert("Wrong login");
    }
    if (!checkValidity(email, regex.email)) {
      return alert("Nieprawidłowy email");
    }
    if (!checkValidity(password, regex.password)) {
      return alert("Niepoprawne hasło");
    }
    if (password != password2) {
      return alert("Hasła muszą być takie same");
    }
  };
  return (
    <>
      <Nav />
      <form onSubmit={(e) => formSubmit(e)} className="register">
        <h3 className="register__header">Stwórz konto</h3>
        <div className="register__panelField">
          <label htmlFor="login">Name:</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="register__panelField">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register__panelField">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register__panelField">
          <label htmlFor="password2">Repeat password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="register__panelField">
          <input
            id="accept"
            type="checkbox"
            value="accept"
            onChange={() => setAccept(!accept)}
            checked={accept}
          />
          <label htmlFor="accept">Akceptuję regulamin</label>
        </div>
        <button type="submit" className="btn register__btn">
          Zarejestruj
        </button>
      </form>
      <Footer />
    </>
  );
};

export default RegisterScreen;
