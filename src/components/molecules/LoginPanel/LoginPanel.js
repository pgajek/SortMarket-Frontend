import React, { useState } from 'react';
import './LoginPanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from 'store/actions/userActions';
import { Link } from 'react-router-dom';

const LoginPanel = () => {
  const [isLoginOpen, handleLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(signin(email, password));
  };
  return (
    <form
      className={isLoginOpen ? 'loginPanel loginPanel--active' : 'loginPanel'}
      onSubmit={submitHandler}>
      {isLoginOpen ? (
        <>
          <div className="loginPanel__panelField">
            <label htmlFor="login"></label>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginPanel__panelField">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="loginPanel__panelButton btn">
            Zaloguj
          </button>
        </>
      ) : (
        <>
          <button className="btn" onClick={() => handleLoginOpen(true)}>
            Zaloguj
          </button>
          <Link to="/register" className="btn">
            Zarejestruj
          </Link>
        </>
      )}
    </form>
  );
};

export default LoginPanel;
