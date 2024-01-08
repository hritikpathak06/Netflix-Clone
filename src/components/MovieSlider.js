import React, { useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default React.memo(function MovieSlider({ data, title }) {
  const [controlVisibility, setControlVisibility] = useState(false);
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <>
      <MovieWrapper
        onMouseEnter={() => setControlVisibility(true)}
        onMouseLeave={() => setControlVisibility(false)}
      >
        <h1>{title}</h1>
        <div className="wrapper">
          {controlVisibility && (
            <div className={`slider-action left`}>
              <AiOutlineLeft onClick={() => handleDirection("left")} />
            </div>
          )}
          <div className="slider" ref={listRef}>
            {data &&
              data.map((movie, index) => {
                return <Card movieData={movie} index={index} key={movie.id} />;
              })}
          </div>
          {controlVisibility && (
            <div className={`slider-action right`}>
              <AiOutlineRight onClick={() => handleDirection("right")} />
            </div>
          )}
        </div>
      </MovieWrapper>
    </>
  );
});

const MovieWrapper = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;
  h1 {
    margin-left: 5px;
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: bolder;
    color: #fff;
  }
  .wrapper {
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translateX(0px);
      transition: 0.5s ease-in-out;
      margin-left: 5px;
    }
    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 2rem;
      bottom: 0;
      width: 50px;
      transition: 0.2s ease-out;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;

// export default MovieSlider;
