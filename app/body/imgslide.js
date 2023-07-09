"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./imgslide.module.css";

export default function Imgslide({ front, side }) {
  const frontRef = useRef(null);
  const [move1, setMove1] = useState(0);
  const [move2, setMove2] = useState(0);
  const imgwidth = frontRef.current ? frontRef.current.offsetWidth * -1 : -500;

  const moveNext1 = () => {
    if (move1 > imgwidth) {
      setMove1(move1 - 100);
    }
  };
  const movePrev1 = () => {
    if (move1 < 0) {
      setMove1(move1 + 100);
    }
  };
  const moveNext2 = () => {
    if (move2 > imgwidth) {
      setMove2(move2 - 100);
    }
  };
  const movePrev2 = () => {
    if (move2 < 0) {
      setMove2(move2 + 100);
    }
  };

  const transfoms1 = {
    transform: `translateX(${move1}px)`,
  };
  const transfoms2 = {
    transform: `translateX(${move2}px)`,
  };
  const fronts = front;
  const sides = side;

  return (
    <div className={classes.main}>
      <div className={`${classes.images}`} ref={frontRef}>
        <span className={classes.prev} onClick={movePrev1}>
          {"<"}
        </span>
        <span className={classes.next} onClick={moveNext1}>
          {">"}
        </span>
        {fronts.map((image, idx) => {
          return (
            <div
              key={idx}
              className={`${classes.imgslide1}`}
              style={transfoms1}
            >
              <img className={`${classes.image}  `} src={image.url} />
              <span
                className={classes.date}
              >{`${image.year} - ${image.month}`}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.images}>
        <span className={classes.prev} onClick={movePrev2}>
          {"<"}
        </span>
        <span className={classes.next} onClick={moveNext2}>
          {">"}
        </span>

        {sides.map((image, idx) => {
          return (
            <div key={idx} className={classes.imgslide2} style={transfoms2}>
              <img className={classes.image} src={image.url} />
              <span
                className={classes.date}
              >{`${image.year} - ${image.month}`}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.message}>
        <h1>슬라이드 기능은 PC에서 지원합니다. 곧 업데이트 예정</h1>
      </div>
    </div>
  );
}
