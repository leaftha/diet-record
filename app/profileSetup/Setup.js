'use client';

import { useState } from 'react';

export default function Setup(session) {
    const [weight, setWeight] = useState(session.weight ? session.weight : 0);
    const [inbody, setInbody] = useState(session.weight ? session.inbody : 0);

    const weightChange = (e) => {
        setWeight(e.target.value);
    };
    const inbodyChange = (e) => {
        setInbody(e.target.value);
    };

    return (
        <div>
            <form method="POST" action="/api/post/profile">
                <label>목표 체중 변경</label>
                <input type="number" name="weight" onChange={weightChange} value={weight} min={0} />
                <label>목표 체지방 변경</label>
                <input type="number" name="inbody" onChange={inbodyChange} value={inbody} min={0} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
