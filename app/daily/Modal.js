import classes from "./modal.module.css";

export default function Modal({ setModal, session }) {
  const todaye = new Date();
  const year = todaye.getFullYear();
  const month = todaye.getMonth() + 1;
  const date = todaye.getDate();

  const closeModel = () => {
    setModal(false);
  };

  return (
    <div className={classes.main} onClick={closeModel}>
      <form
        onClick={(e) => e.stopPropagation()}
        className={classes.modal}
        method="POST"
        action="api/post/daliy"
      >
        <span className={classes.Xpoint} onClick={closeModel}>
          X
        </span>
        <textarea
          className={classes.textbox}
          name="detail"
          type="text"
          placeholder="운동내용"
        />
        <input
          style={{ display: "none" }}
          name="email"
          type="text"
          defaultValue={session.user.email}
        />
        <input
          style={{ display: "none" }}
          name="year"
          type="text"
          defaultValue={year}
        />
        <input
          style={{ display: "none" }}
          name="month"
          type="text"
          defaultValue={month}
        />
        <input
          style={{ display: "none" }}
          name="date"
          type="text"
          defaultValue={date}
        />
        <button className={classes.btn} type="submit">
          운동 입력
        </button>
      </form>
    </div>
  );
}
