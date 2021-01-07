import React, { useState } from "react";
import { checkValidity } from "helpers/index";
import regex from "helpers/regex";
import { useDispatch, useSelector } from "react-redux";
import { register } from "store/actions/userActions";
import "./RegisterPanel.scss";

const RegisterPanel = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accept, setAccept] = useState(false);
  const userRegister = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    if (!checkValidity(name, regex.name)) {
      return alert("Wrong name");
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
    dispatch(register(name, email, password));
  };
  return (
    <form onSubmit={(e) => formSubmit(e)} className="register">
      <h3 className="register__header">Stwórz konto</h3>
      <div className="register__panelField">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
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
  );
};

export default RegisterPanel;
