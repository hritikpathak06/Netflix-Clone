import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import Demo from "../assets/demo.mp4";

const Card = ({ movieData }) => {
  const navigate = useNavigate();
  const [onHovered, setOnHovered] = useState(false);
  return (
    <>
      <CardContainer
        onMouseEnter={() => setOnHovered(true)}
        onMouseLeave={() => setOnHovered(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
          alt="movie-poster"
          onClick={() => navigate("/player")}
        />
        {onHovered && (
          <>
            <div className="hover">
              <div className="image-video-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                  alt="movie-poster"
                />
                <video src={Demo} autoPlay loop controls />
              </div>
              <div className="info-container">
                <h3 className="movieName" onClick={() => navigate("/player")}>
                  {movieData.name}
                </h3>
                <div className="icons">
                  <div className="controls">
                    <IoPlayCircleSharp
                      title="play"
                      onClick={() => navigate("/player")}
                    />
                    <RiThumbUpFill title="like" />
                    <RiThumbDownFill title="dislike" />
                    <BsCheck title="remove from list" />
                    <AiOutlinePlus title="Add To my list" />
                  </div>
                  <div className="info">
                    <BiChevronDown title="more info" />
                  </div>
                </div>
                <div className="genres">
                  <ul>
                    {movieData.genres.map((genre) => {
                      return <li>{genre}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  max-width: 230px;
  margin-top: 1rem;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  /* background-color: red; */
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    position: absolute;
    z-index: 99;
    height: max-content;
    width: 20rem;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      .movieName {
        color: #fff;
        font-weight: bolder;
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      display: flex;
      color: #fff;
      ul {
        display: flex;
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          list-style-type: none;
        }
      }
    }
  }
`;

export default Card;
