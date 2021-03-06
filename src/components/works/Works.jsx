import { useState } from "react";
import "./works.scss";

import { works } from '../../dataPersonale.json'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [ works ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data[0].length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
    <div
      className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
    >
      {data[0].map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.link} rel="noreferrer" target="_blank"><span>Projects</span></a>
              </div>
            </div>
            <div className="right">
              <img
                src={d.img}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <img
      src="assets/arrow.png"
      className="arrow left"
      alt=""
      onClick={() => handleClick("left")}
    />
    <img
      src="assets/arrow.png"
      className="arrow right"
      alt=""
      onClick={() => handleClick()}
    />
  </div>
  );
}
