import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="main">
          <div className="rings" id="ring1" />
          <div className="rings" id="ring2" />
          <div className="asteroids-large" id="asteroid1" />
          <div className="asteroids-large" id="asteroid2" />
          <div className="asteroids-large" id="asteroid3" />
          <div className="asteroids-large" id="asteroid4" />
          <div className="asteroids-large" id="asteroid5" />
          <div className="asteroids-small" id="asteroid6" />
          <div className="asteroids-small" id="asteroid7" />
          <div className="asteroids-small" id="asteroid8" />
          <div className="asteroids-small" id="asteroid9" />
          <div className="asteroids-small" id="asteroid10" />
          <div id="saturn" />
          <div id="explore">Universe</div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border: 0;
    background: radial-gradient(ellipse at 50% 50%, var(--color-bg) 20%, transparent 72%);
    font-size: 17px;
    height: 200px;
    width: 300px;
    zoom: 1.2;
  }

  .main {
    width: 70px;
    margin: auto;
    position: relative;
    transform: rotateZ(0deg);
    isolation: isolate;
    scale: 1;
    transition: all 1.5s;
  }

  .main:hover {
    transform: rotateZ(240deg);
    scale: 2;
    filter: drop-shadow(-1px -1px 5px var(--color-secondary));
  }

  .rings {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 150px 150px 0 0;
    background: radial-gradient(
      circle at 50% 100%,
      transparent 30%,
      var(--color-secondary) 40%,
      var(--color-primary) 50%,
      var(--color-accent) 60%,
      var(--color-primary) 70%,
      transparent
    );
  }

  #saturn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(80deg, var(--color-secondary), var(--color-primary), var(--color-bg));
  }

  #ring1 {
    transform: rotateX(80deg);
    top: -20px;
    left: -65px;
  }

  #ring2 {
    transform: rotateX(-100deg);
    left: -65px;
    z-index: -1;
    top: -3px;
  }

  .asteroids-large {
    position: absolute;
    width: 8px;
    height: 10px;
    border-radius: 15px 8px;
    background: linear-gradient(220deg, var(--color-accent), var(--color-primary), var(--color-bg));
    transform: rotateZ(0deg);
    transition: all 3s;
  }

  #asteroid1 {
    top: 8px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  #asteroid2 {
    top: 35px;
    height: 10px;
    left: -55px;
  }

  #asteroid3 {
    top: 35px;
    height: 8px;
    left: 85px;
  }

  #asteroid4 {
    top: 40px;
    height: 4px;
    width: 4px;
    left: -40px;
  }

  #asteroid5 {
    top: 35px;
    height: 4px;
    width: 4px;
    left: 82px;
  }

  .asteroids-small {
    position: absolute;
    width: 4px;
    height: 3px;
    border-radius: 15px 8px;
    background: linear-gradient(80deg, var(--color-accent), var(--color-primary), var(--color-bg));
    transform-origin: 50px 50px;
    transform: rotateZ(0deg);
    transition: all 3s;
  }

  #asteroid6 {
    top: 6px;
    left: -5px;
    border-radius: 50%;
  }

  #asteroid7 {
    top: 15px;
    left: -35px;
  }

  #asteroid8 {
    top: 35px;
    left: 65px;
  }

  #asteroid9 {
    top: 60px;
    left: -10px;
  }

  #asteroid10 {
    top: 15px;
    left: 112px;
  }

  #explore {
    position: absolute;
    top: 32px;
    font-size: 15px;
    color: var(--color-text);
    left: 10px;
    transition: all 3s;
  }

  .main:hover > .asteroids-large,
  .main:hover > .asteroids-small {
    transform: translateX(28px);
  }

  .main:hover > #explore {
    translate: -10px 20px;
    transform: rotateZ(120deg);
  }

  .main:not(hover) > #explore {
    translate: 0px;
    transform: rotateZ(0deg);
  }

  .main:not(hover) > .asteroids-large,
  .main:not(hover) > .asteroids-small {
    transform: translateX(0px);
  }

  .main:is(:active) > #explore {
    translate: -100px 200px;
  }

  .main:is(:active) {
    translate: -200px;
  }
`;

export default Button;
