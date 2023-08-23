import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import NotAuth from '../notauth';
import Setup from './Setup';

export default async function InBody() {
    let session = await getServerSession(authOptions);
    if (session === null) {
        return NotAuth();
    }
    const currentWeight = session.weight;
    const currentInbody = session.InBody;

    return (
        <div>
            <p>현재 목표 체중 {currentWeight ? currentWeight : '목표 설정 X'}</p>
            <p>현재 목표 체지방 {currentInbody ? currentInbody : '목표 설정 X'}</p>
            <Setup session={session} />
        </div>
    );
}
