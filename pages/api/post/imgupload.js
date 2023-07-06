import { connectDB } from '@/util/database';

export default async function handler(Get, Post) {
    if (Get.method == 'POST') {
        let links = JSON.parse(Get.body);

        let db = (await connectDB).db('menber');
        let frontObject = {
            email: links.email,
            year: links.year,
            month: links.month,
            url: links.linkfront,
        };
        let sideObject = {
            email: links.email,
            year: links.year,
            month: links.month,
            url: links.linkside,
        };
        await db.collection('front').insertOne(frontObject);
        await db.collection('side').insertOne(sideObject);
        Post.status(200).redirect(302, '/body');
    }
}
