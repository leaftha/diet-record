'use client';
import { signIn } from 'next-auth/react';

import classes from './loginbtn.module.css';

export default function LoginBtn() {
    return (
        <p
            className={classes.btn}
            onClick={() => {
                signIn();
            }}
        >
            로그인
        </p>
    );
}
