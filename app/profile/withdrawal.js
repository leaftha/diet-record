'use client';

import Modal from './modal';
import classes from './withdrawal.module.css';
import { useState } from 'react';

export default function Widhdrawal({ session }) {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <div className={classes.main}>
                <button
                    onClick={() => {
                        setModal(true);
                    }}
                    className={classes.btn}
                >
                    회원탈퇴
                </button>
            </div>
            {modal && <Modal session={session} setModal={setModal} />}
        </div>
    );
}
