import { signOut } from 'next-auth/react';
import classes from './modal.module.css';

export default function Modal({ session, setModal }) {
    const closeModel = () => {
        setModal(false);
    };

    return (
        <div className={classes.main} onClick={closeModel}>
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
        </div>
    );
}
