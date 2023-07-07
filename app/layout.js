import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./loginbtn";
import Link from "next/link";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import LogoutBtn from "./logoutbtn";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "diet record",
  description: "diet to record",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="navbar-content">
            <Link href="/" className="navbar-name">
              Diet
            </Link>
            <Link href="inbody">인바디</Link>
            <Link href="body">눈 바디</Link>
            <Link href="daily">운동 기록</Link>
          </div>
          <div className="navbar-auth">
            {session === null ? (
              <div>
                <LoginBtn />
                <Link href="register">회원가입</Link>
              </div>
            ) : (
              <LogoutBtn />
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
