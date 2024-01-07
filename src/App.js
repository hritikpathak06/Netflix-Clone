import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";
// import Header from "./components/Header";
// import BackgroundImage from "./components/BackgroundImage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
      {/* <Header/> */}
      {/* <BackgroundImage/> */}
    </>
  );
};

export default App;
