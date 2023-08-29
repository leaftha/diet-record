import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import NotAuth from '../notauth';
import Link from 'next/link';
import classes from './page.module.css';
import Widhdrawal from './withdrawal';

//회원 탈퇴 다시 묻는 모달창 필요

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

    let Goal = await db
        .collection('user_cred')
        .find({ email: session.user.email })
        .sort({ _id: -1 })
        .limit(12)
        .toArray();

    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    let currentWeight;
    let currentInbody;
    if (result.length != 0) {
        currentWeight = result[0].weight;
        currentInbody = result[0].fatper;
    } else {
        currentWeight = '--';
        currentInbody = '--';
    }
    const goalWeight = Goal[0].weight ? Goal[0].weight : '--';
    const goalInbody = Goal[0].inbody ? Goal[0].inbody : '--';

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.item}>
                    <p>{session.user.name}</p>
                    <p>{session.user.email}</p>
                </div>

                <div className={classes.item}>
                    <p>목표 체중 : {goalWeight}kg</p>
                    <p>목표 체지방률 : {goalInbody}%</p>
                </div>

                <div className={classes.item}>
                    <p>현재 체중 : {currentWeight}kg</p>
                    <p>현재 체지방률 : {currentInbody}%</p>
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.change}>
                    <Link className={classes.link} href="profileSetup">
                        목표 체중 설정
                    </Link>
                </div>
                <Widhdrawal session={session} />
            </div>
        </div>
    );
}
