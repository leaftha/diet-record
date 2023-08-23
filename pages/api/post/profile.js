import { connectDB } from '@/util/database';

export default async function handler(Get, Post) {
    if (Get.method === 'POST') {
        if (Get.body.weight === '' || Get.body.inboy === '') {
            console.log('comment error');
            return Post.status(500).json('not comment');
        } else {
            let db = (await connectDB).db('menber');
            // console.log(Get.body.inbody);
            await db
                .collection('user_cred')
                .updateOne({ email: Get.body.email }, { $set: { weight: Get.body.weight } });
            await db
                .collection('user_cred')
                .updateOne({ email: Get.body.email }, { $set: { inbody: Get.body.inbody } });

            Post.status(200).redirect(302, '/profileSetup');
        }
    }
}
