'use client';
import classes from './error.module.css';

export default function Error({ error, reset }) {
    return (
        <div className={classes.main}>
            <h1>에러입니다. 새로고침을 하거나 관리자에게 문의하세요</h1>
        </div>
    );
}
