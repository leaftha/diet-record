import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

import Imgform from "./imgform";
import NotAuth from "../notauth";

export default async function Body() {
  let session = await getServerSession(authOptions);
  if (session === null) {
    return NotAuth();
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <div>
      <Imgform year={year} month={month} session={session} />
    </div>
  );
}
