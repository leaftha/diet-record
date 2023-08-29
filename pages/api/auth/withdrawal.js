import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(Get, Post) {
    if (Get.method == 'POST') {
        const client = await connectDB;
        const db = client.db('menber');
        // let foundEmail = await db.collection('user_cred').findOne({ email: Get.body.email });
        // let foundInbody = await db.collection('daliy').findOne({ email: Get.body.email });
        // let foundDaily = await db.collection('inbody').findOne({ email: Get.body.email });
        db.collection('user_cred').deleteMany({ email: Get.body.email });
        db.collection('daliy').deleteMany({ email: Get.body.email });
        db.collection('inbody').deleteMany({ email: Get.body.email });
        Post.status(200).redirect(302, '/');
        console.log(foundEmail, foundInbody, foundDaily);
    }
}
