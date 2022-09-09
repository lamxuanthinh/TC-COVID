import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Account01 from "../components/Account01";
import HomeAccount01 from "../components/HomeAccount02";
import Account02 from "../components/Account02";
import Account03 from "../components/Account03";
import HomeAccount from "../components/HomeAccount";
import Login from "../components/Login";

const Security = () => {
  const token = sessionStorage.getItem("token");
  if (token !== "9999") {
    return <Login />;
  }
  return (
    <Routes>
      <Route path="/homeAccount=0033" element={<HomeAccount />} />
      <Route path="/homeAccount=001122" element={<HomeAccount01 />} />
      <Route path="/01" element={<Account01 />} />
      <Route path="/02" element={<Account02 />} />
      <Route path="/03" element={<Account03 />} />
    </Routes>
  );
};

export default Security;
