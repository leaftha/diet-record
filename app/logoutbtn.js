'use client';
import { signOut } from 'next-auth/react';

import classes from './logoutbtn.module.css';
export default function LogoutBtn() {
    return (
        <p
            className={classes.btn}
            onClick={() => {
                signOut();
            }}
        >
            로그아웃
        </p>
    );
}
