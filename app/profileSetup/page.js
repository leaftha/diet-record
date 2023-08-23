import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import NotAuth from '../notauth';
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

    return (
        <div>
            <form method="POST" action="/api/post/inbody">
                <p>현재 목표 체중 </p>
                <p>현재 목표 체지방 </p>

                <label>목표 체중 변경</label>
                <input type="number" />
                <label>목표 체지방 변경</label>
                <input type="number" />
            </form>
        </div>
    );
}
