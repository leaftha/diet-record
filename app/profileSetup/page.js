import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import NotAuth from '../notauth';
import SetupForm from './SetupForm';

export default async function InBody() {
    let session = await getServerSession(authOptions);
    if (!session) {
        return NotAuth();
    }
    const client = await connectDB;
    const db = client.db('menber');

    let result = await db
        .collection('user_cred')
        .find({ email: session.user.email })
        .sort({ _id: -1 })
        .limit(12)
        .toArray();

    let currentWeight = result[0].weight;
    let currentInbody = result[0].inbody;

    console.log(currentInbody);

    return (
        <div>
            <p>현재 목표 체중 {currentWeight ? currentWeight : '목표 설정 X'}</p>
            <p>현재 목표 체지방 {currentInbody ? currentInbody : '목표 설정 X'}</p>
            <SetupForm sessionEmail={session.user.email} currentWeight={currentWeight} currentInbody={currentInbody} />
        </div>
    );
}
