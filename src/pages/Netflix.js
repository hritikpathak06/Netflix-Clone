import React, { useState } from "react";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <>
      <HeroContainer>
        <div className="hero">
          <TopNav isScrolled={isScrolled} />
          <img
            src="https://www.whats-on-netflix.com/wp-content/uploads/2018/04/is-avengers-age-of-ultron-on-netflix.jpg"
            alt="hero"
            className="background-image"
          />
          <div className="container">
            <div className="title">
              <h1>Avengers</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                aliquam magni ipsum quae provident voluptates nobis quod nisi,
                deserunt accusamus!
              </p>
            </div>
            <div className="buttons">
              <button className="playBtn">Play</button>
              <button className="moreBtn">More</button>
            </div>
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
  }

  .container {
    position: absolute;
    bottom: 1rem;
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
