import React from "react";
import "./RegisterScreen.scss";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";

import RegisterPanel from "components/molecules/RegisterPanel/RegisterPanel";

const RegisterScreen = () => {
  return (
    <>
      <Nav />

      <RegisterPanel />
      <Footer />
    </>
  );
};

export default RegisterScreen;
