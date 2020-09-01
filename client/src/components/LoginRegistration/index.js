import React, { useEffect, useState } from "react";

import { Login } from "./Login";
import { Registration } from "./Registration";

import api from "api";

export const LoginRegistration = () => {
  const [register, setRegister] = useState([]);
  const [user, setUser] = useState("");

  const registerHandler = async (event) => {
    // event.preventDefault();
    // console.log(event.target.elements[0].value, 'trgister ')
    // setRegister(event.target.elements[0].value);

    // try {
    //   const jsonRes = await api.addUser(register);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      {" "}
      {/* <Login handler={loginHandler} /> */}
      <Registration register={registerHandler} />
    </>
  );
};
