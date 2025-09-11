import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./modules";
import { RugBaazar } from "./common";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<RugBaazar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
