import { connectDB } from "@/util/database";

export default async function handler(Get, Post) {
  if (Get.method === "POST") {
    console.log(Get.body);
    let db = (await connectDB).db("menber");
    await db.collection("daliy").insertOne(Get.body);
    Post.status(200).json("성공");
  }
}
