'use client';

import { useState } from 'react';
import classes from './SetupForm.module.css';

export default function Setup({ sessionEmail, currentWeight, currentInbody }) {
    const [weight, setWeight] = useState(currentWeight ? currentWeight : 0);
    const [inbody, setInbody] = useState(currentInbody ? currentInbody : 0);

    const weightChange = (e) => {
        setWeight(e.target.value);
    };
    const inbodyChange = (e) => {
        setInbody(e.target.value);
    };

    const email = sessionEmail;

    return (
        <div className={classes.main}>
            <form className={classes.form} method="POST" action="/api/post/profile">
                <div className={classes.item}>
                    <label>목표 체중 변경</label>
                    <input type="number" name="weight" onChange={weightChange} value={weight} min={0} />
                </div>
                <div className={classes.item}>
                    <label>목표 체지방 변경</label>
                    <input type="number" name="inbody" onChange={inbodyChange} value={inbody} min={0} />
                </div>
                <input className={classes.email} type="text" name="email" defaultValue={email} />
                <button className={classes.btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
