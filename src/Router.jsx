import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, AIBotDec, CaddieDec, Home, PeriDec, PuntDec, RugDec, SignatureDec, SmartaDec, SurenDec, Work } from "./modules";
import {
  Caddie,
  ChatBot,
  PeriStudio,
  Punt,
  RugBaazar,
  Signature,
  SmartaClass,
  Suren,
} from "./common";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<RugBaazar />} />
            <Route path="/smartaclass" element={<SmartaClass />} />
            <Route path="/suren" element={<Suren />} />
            <Route path="/caddie" element={<Caddie />} />
            <Route path="/aichatbot" element={<ChatBot />} />
            <Route path="/puntapp" element={<Punt />} />
            <Route path="/signature" element={<Signature />} />
            <Route path="/peristudio" element={<PeriStudio />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/mywork" element={<Work />}>
            <Route index element={<PuntDec />} />
            <Route path="signaturedec" element={<SignatureDec />} />
            <Route path="peridec" element={<PeriDec />} />
            <Route path="rugdec" element={<RugDec />} />
            <Route path="caddiedec" element={<CaddieDec />} />
            <Route path="surendec" element={<SurenDec />} />
            <Route path="smartadec" element={<SmartaDec />} />
            <Route path="aibotdec" element={<AIBotDec />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
