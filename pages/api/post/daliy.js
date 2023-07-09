import { connectDB } from "@/util/database";

export default async function handler(Get, Post) {
  if (Get.method === "POST") {
    if (Get.body.detail === "") {
      console.log("comment error");
      return Post.status(500).json("not comment");
    } else {
      let db = (await connectDB).db("menber");
      await db.collection("daliy").insertOne(Get.body);
      Post.status(200).redirect(302, "/daily");
    }
  }
}
