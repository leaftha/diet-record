import Calender from './calender';
import { connectDB } from '@/util/database';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import NotAuth from '../notauth';

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format } from 'date-fns';

export default async function Daily() {
    let session = await getServerSession(authOptions);
    if (session === null) {
        return NotAuth();
    }
    const currentMonth = new Date();
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);

    const year = currentMonth.getFullYear();
    const startMonth = format(startDate, 'M');
    const endMonth = format(monthEnd, 'M');

    const client = await connectDB;
    const db = client.db('menber');

    let delet = await db.collection('daliy').deleteMany({
        email: session.user.email,
        month: { $eq: `${format(currentMonth, 'M') - 2}` },
    });
    let result = await db
        .collection('daliy')
        .find({
            email: session.user.email,
            year: `${year}`,
            month: { $gte: startMonth, $lte: endMonth },
        })
        .toArray();

    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });

    return <div>{<Calender session={session} record={result} />}</div>;
}
