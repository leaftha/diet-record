import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import NotAuth from '../notauth';
import Link from 'next/link';
import classes from './page.module.css';

// 회원 탈퇴 기능

export default async function InBody() {
    let session = await getServerSession(authOptions);
    if (session === null) {
        return NotAuth();
    }
    const client = await connectDB;
    const db = client.db('menber');

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

    const currentWeight = result[0].weight;
    const currentInbody = result[0].fatper;
    const goalWeight = session.user.weight;
    const goalInbody = session.user.inbody;
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.item}>
                    <p>{session.user.name}</p>
                    <p>{session.user.email}</p>
                </div>

                <div className={classes.item}>
                    <p>목표 체중 : {goalWeight}</p>
                    <p>목표 체지방률 : {goalInbody}%</p>
                </div>

                <div className={classes.item}>
                    <p>현재 체중 : {currentWeight}</p>
                    <p>현재 체지방률 : {currentInbody}</p>
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.change}>
                    <Link className={classes.link} href="profileSetup">
                        목표 체중 설정
                    </Link>
                </div>
                <form className={classes.Btnform}>
                    <button className={classes.btn}>회원 탈퇴</button>
                </form>
            </div>
        </div>
    );
}
