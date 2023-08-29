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
        <div>
            <form method="POST" action="/api/post/profile">
                <label>목표 체중 변경</label>
                <input type="number" name="weight" onChange={weightChange} value={weight} min={0} />
                <label>목표 체지방 변경</label>
                <input type="number" name="inbody" onChange={inbodyChange} value={inbody} min={0} />
                <input className={classes.email} type="text" name="email" defaultValue={email} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
