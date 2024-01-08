import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import styled from "styled-components";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <HeroContainer>
        <div className="hero">
          <TopNav isScrolled={isScrolled} />
          <img
            src="https://www.m9.news/wp-content/uploads/2023/10/Leo-2023-Telugu-Movie-Review.jpg"
            alt="hero"
          />
          <div className="container">
            <div className="title">
              <h1>Leo-Thalapathy</h1>
              <p>
                It is the third instalment in the Lokesh Cinematic Universe and
                is inspired by A History of Violence. The film follows Parthi, a
                café owner and animal rescuer in Theog, who is pursued by
                gangsters Antony and Harold Das who suspect him to be Antony's
                estranged son, Leo.
              </p>
            </div>
            <div className="buttons">
              <button className="playBtn" onClick={() => navigate("/player")}>
                Play
              </button>
              <button className="moreBtn">More</button>
            </div>
          </div>
        </div>
        {/* <Card/> */}
        <SliderContainer movies={movies} />
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(50%);
    }
    img {
      height: 120vh;
      width: 100%;
      object-fit: cover;
    }
  }

  .container {
    position: absolute;
    bottom: 7rem;
    .title {
      h1 {
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -50px;
        width: 640px;
        margin-left: 5rem;
        font-family: cursive;
        color: white;
      }
    }
    .buttons {
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      cursor: pointer;
      border: none;
    }
    .moreBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      cursor: pointer;
      border: 0.1rem solid white;
    }
  }
`;

export default Netflix;
