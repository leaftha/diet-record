import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import NotAuth from '../notauth';
import SetupForm from './SetupForm';

export default async function InBody() {
    let session = await getServerSession(authOptions);
    if (!session) {
        return NotAuth();
    }

    const currentWeight = session.user.weight;
    const currentInbody = session.user.inbody;

    return (
        <div>
            <p>현재 목표 체중 {currentWeight ? currentWeight : '목표 설정 X'}</p>
            <p>현재 목표 체지방 {currentInbody ? currentInbody : '목표 설정 X'}</p>
            <SetupForm session={session} />
        </div>
    );
}
