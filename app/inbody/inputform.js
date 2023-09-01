import classes from './inputform.module.css';

export default async function InputForm({ session, month, year }) {
    return (
        <form className={classes.forms} method="POST" action="/api/post/inbody">
            <label className={classes.label}>체중</label>
            <input className={classes.input} name="weight" type="number" step="0.01" />
            <label className={classes.label}>체지방</label>
            <input className={classes.input} name="fat" type="number" step="0.01" />
            <label className={classes.label}>근육량</label>
            <input className={classes.input} name="mucle" type="number" step="0.01" />
            <label className={classes.label}>체지방률</label>
            <input className={classes.input} name="fatper" type="number" step="0.01" />
            <input style={{ display: 'none' }} name="email" type="text" defaultValue={session.user.email} />
            <input style={{ display: 'none' }} name="year" type="text" defaultValue={year} />
            <input style={{ display: 'none' }} name="month" type="text" defaultValue={month} />
            <button className={classes.btn} type="submit">
                입력
            </button>
        </form>
    );
}
