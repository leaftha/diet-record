"use client";

import { useState } from "react";
import classes from "./SetupForm.module.css";

export default function Setup({ sessionEmail, currentWeight, currentInbody }) {
  const [weight, setWeight] = useState(currentWeight ? currentWeight : 0);
  const [inbody, setInbody] = useState(currentInbody ? currentInbody : 0);

  const weightChange = (e) => {
    setWeight(e.target.value);
  };
  const inbodyChange = (e) => {
    setInbody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const weight = form.weight.value.trim();
    const inbody = form.inbody.value.trim();
    if (!weight || !inbody) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    form.submit();
  };
  return (
    <>
      <form
        className={classes.form}
        method="POST"
        action="/api/post/profile"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={classes.item}>
          <label>목표 체중 변경</label>
          <input
            type="number"
            name="weight"
            onChange={weightChange}
            value={weight}
            min={0}
          />
        </div>
        <div className={classes.item}>
          <label>목표 체지방 변경</label>
          <input
            type="number"
            name="inbody"
            onChange={inbodyChange}
            value={inbody}
            min={0}
          />
        </div>
        <input
          className={classes.email}
          type="text"
          name="email"
          defaultValue={sessionEmail}
        />
        <button className={classes.btn} type="submit">
          변경
        </button>
      </form>
    </>
  );
}
