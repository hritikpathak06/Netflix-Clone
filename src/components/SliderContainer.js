import React from "react";
import styled from "styled-components";
import MovieSlider from "./MovieSlider";

const SliderContainer = ({ movies }) => {
  const getMoviesBetween = (start, end) => {
    return movies.slice(start, end);
  };

  return (
    <>
      <SliderWrappers>
        <MovieSlider data={getMoviesBetween(0, 10)} title="Only On Netflix" />
        <MovieSlider data={getMoviesBetween(10, 20)} title="Trending Now" />
        <MovieSlider data={getMoviesBetween(20, 30)} title="Actions Movies" />
        <MovieSlider data={getMoviesBetween(30, 40)} title="New Releases" />
        <MovieSlider
          data={getMoviesBetween(40, 50)}
          title="Popular On Netflix"
        />
        <MovieSlider data={getMoviesBetween(50, 60)} title="Epic" />
        <MovieSlider data={getMoviesBetween(60, 70)} title="Only On Netflix" />
        <MovieSlider data={getMoviesBetween(70, 80)} title="Only On Netflix" />
      </SliderWrappers>
    </>
  );
};

const SliderWrappers = styled.div``;

export default SliderContainer;
