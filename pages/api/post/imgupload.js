import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(Get, Post) {
  if (Get.method == "POST") {
    console.log(Get.body);
  }
}
