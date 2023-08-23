import { connectDB } from '@/util/database';

export default async function handler(Get, Post) {
    if (Get.method === 'POST') {
        console.log(Get.body);
        // if (Get.body.weight === '' || Get.body.fat === '' || Get.body.gatper === '') {
        //     console.log('comment error');
        //     return Post.status(500).json('not comment');
        // } else {
        //     let db = (await connectDB).db('menber');
        //     await db.collection('inbody').insertOne(Get.body);
        //     Post.status(200).redirect(302, '/inbody');
        // }
    }
}
