import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import LoginBtn from './loginbtn';
import Link from 'next/link';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import LogoutBtn from './logoutbtn';

const Noto = Noto_Sans_KR({ weight: '400', subsets: ['latin'] });

export const metadata = {
    title: 'diet record',
    description: 'diet to record',
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);
    // console.log(session);
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
                        <div>
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
