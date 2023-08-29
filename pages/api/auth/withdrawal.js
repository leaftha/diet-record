import { connectDB } from '@/util/database';

export default async function handler(Get, Post) {
    if (Get.method == 'POST') {
        const client = await connectDB;
        const db = client.db('menber');
        db.collection('user_cred').deleteMany({ email: Get.body.email });
        db.collection('daliy').deleteMany({ email: Get.body.email });
        db.collection('inbody').deleteMany({ email: Get.body.email });
        Post.status(200).redirect(302, '/');
    }
}
