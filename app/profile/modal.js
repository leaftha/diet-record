import { signOut } from "next-auth/react";
import classes from "./modal.module.css";

export default function Modal({ session, setModal }) {
  const closeModel = () => {
    setModal(false);
  };

  return (
    <div className={classes.main} onClick={closeModel}>
      <form
        className={classes.Btnform}
        method="POST"
        action="/api/auth/withdrawal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>정말로 탈퇴 하시겠습니까?</h1>
        <div className={classes.btnlist}>
          <input
            type="text"
            name="email"
            className={classes.email}
            defaultValue={session.user.email}
          />
          <button
            className={`${classes.btn} ${classes.first}`}
            onClick={() => {
              signOut();
            }}
          >
            예
          </button>
          <button className={classes.btn} onClick={closeModel}>
            아니요
          </button>
        </div>
      </form>
    </div>
  );
}
