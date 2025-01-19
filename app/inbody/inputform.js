import classes from "./inputform.module.css";

export default function InputForm({ session }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const weight = form.weight.value.trim();
    const fat = form.fat.value.trim();
    const muscle = form.mucle.value.trim();
    const fatper = form.fatper.value.trim();
    if (!weight || !fat || !muscle || !fatper) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    form.submit();
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className={classes.forms}
      method="POST"
      action={"/api/post/inbody"}
      onSubmit={handleSubmit}
    >
      <div className={classes.inputBody}>
        <div className={classes.inputContainer}>
          <label className={classes.label}>체중</label>
          <input
            className={classes.input}
            name="weight"
            type="number"
            step="0.01"
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>체지방</label>
          <input
            className={classes.input}
            name="fat"
            type="number"
            step="0.01"
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>근육량</label>
          <input
            className={classes.input}
            name="mucle"
            type="number"
            step="0.01"
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>체지방률</label>
          <input
            className={classes.input}
            name="fatper"
            type="number"
            step="0.01"
          />
        </div>
      </div>
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
      <button className={classes.btn} type="submit">
        입력
      </button>
    </form>
  );
}
