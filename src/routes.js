import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Employees from "./views/Employees/Employees";

const routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};

export default routes;
