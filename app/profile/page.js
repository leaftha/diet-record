import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import NotAuth from '../notauth';
import Link from 'next/link';
// import classes from './page.module.css';

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
        <div>
            <p>{session.user.name}</p>
            <p>현재 체중 : {currentWeight}</p>
            <p>현재 체지방률 : {currentInbody}</p>
            <Link href="profileSetup">목표 체중 설정</Link>
            <p>목표 체중 {goalWeight}</p>
            <p>목표 체지방률 {goalInbody}</p>
        </div>
    );
}
