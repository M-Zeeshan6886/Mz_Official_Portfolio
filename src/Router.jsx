import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./modules";
import { RugBaazar, SmartaClass, Suren } from "./common";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<RugBaazar />} />
            <Route path="/smartaclass" element={<SmartaClass />} />
            <Route path="/suren" element={<Suren />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
