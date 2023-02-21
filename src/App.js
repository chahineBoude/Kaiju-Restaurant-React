import React, { Fragment } from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Intermission,
  MainMenu,
} from "./container";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <div>
    <Routes>
      <Route
        path="/about"
        element={
          <Fragment>
            <Navbar />
            <AboutUs />
          </Fragment>
        }
      />
      <Route
        path="/menu"
        element={
          <>
            <Navbar />
            <MainMenu />
          </>
        }
      />
      <Route
        path="/"
        element={
          <Fragment>
            <Navbar />
            <Header />
            <Intermission />
            <AboutUs />
            <SpecialMenu />
            <Intro />
            <Gallery />
            <FindUs />
            <Footer />
          </Fragment>
        }
      />
    </Routes>
  </div>
);

export default App;
