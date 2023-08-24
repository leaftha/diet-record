import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import LineChart from './LineChart';
import NotAuth from '../notauth';
import classes from './page.module.css';

export default async function InBody() {
    let session = await getServerSession(authOptions);
    if (session === null) {
        return NotAuth();
    }
    const client = await connectDB;
    const db = client.db('menber');
    // let result = await db
    //   .collection("inbody")
    //   .find({ email: session.user.email })
    //   .toArray();

    // result = result.map((a) => {
    //   a._id = a._id.toString();
    //   return a;
    // });

    let result = await db
        .collection('inbody')
        .find({ email: session.user.email })
        .sort({ _id: -1 })
        .limit(12)
        .toArray();

    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    // console.log(result);

    let datelabels = result.map((data) => {
        return `${data.year}-${data.month}`;
    });

    // console.log(datelabels);

    let weightData = result.map((data) => {
        return data.weight;
    });
    // console.log(weightData.reverse());

    let fatData = result.map((data) => {
        return data.fat;
    });

    let muscleData = result.map((data) => {
        return data.mucle;
    });

    let fatperData = result.map((data) => {
        return data.fatper;
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    console.log(session.user.weight, weightData[0]);

    const countWeight = weightData[0] - session.user.weight;
    return (
        <div className={classes.main}>
            {result.length === 0 || (result[0].month != month && year === result[0].year) ? (
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
            ) : (
                month == result[0].month &&
                year == result[0].year && (
                    <div className={classes.message}>
                        <h1>이번달 입력 완료</h1>
                        <p>목표까지 남은 체중 {countWeight.toFixed(2)}</p>
                    </div>
                )
            )}
            <LineChart
                className={classes.chart}
                label={datelabels.reverse()}
                weight={weightData.reverse()}
                fat={fatData.reverse()}
                muscle={muscleData.reverse()}
                fatper={fatperData.reverse()}
            />
        </div>
    );
}
