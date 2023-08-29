'use client';

import { signOut } from 'next-auth/react';
import classes from './withdrawal.module.css';

export default function Widhdrawal({ session }) {
    return (
        <form className={classes.Btnform} method="POST" action="/api/auth/withdrawal">
            <input type="text" name="email" className={classes.email} defaultValue={session.user.email} />
            <button
                className={classes.btn}
                onClick={() => {
                    signOut();
                }}
            >
                회원 탈퇴
            </button>
        </form>
    );
}
