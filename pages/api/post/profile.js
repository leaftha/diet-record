import { connectDB } from "@/util/database";

export default async function handler(Get, Post) {
  if (Get.method === "POST") {
    let db = (await connectDB).db("menber");
    let weight = Get.body.weight * 1;
    let inbody = Get.body.inbody * 1;
    await db
      .collection("user_cred")
      .updateOne({ email: Get.body.email }, { $set: { weight: weight } });
    await db
      .collection("user_cred")
      .updateOne({ email: Get.body.email }, { $set: { inbody: inbody } });
    Post.status(200).redirect(302, "/profileSetup");
  }
}
