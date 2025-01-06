import "./globals.css";
import LoginBtn from "./loginbtn";
import Link from "next/link";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import LogoutBtn from "./logoutbtn";


export const metadata = {
  title: "diet record",
  description: "diet to record",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <nav className="navbar">
          <div className="navbar-content">
            <Link href="/" className="navbar-name">
              Diet
            </Link>
            <Link href="inbody" className="inbody">
              인바디
            </Link>
            <Link href="daily" className="daily">
              운동 기록
            </Link>
          </div>
          {session === null ? (
            <div className="navbar-auth">
              <LoginBtn />
              <Link className="register" href="register">
                회원가입
              </Link>
            </div>
          ) : (
            <div className="navbar-logined">
              <Link href="profile" className="profile">
                프로필
              </Link>
              <LogoutBtn />
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  );
}
