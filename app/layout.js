import './globals.css';
import LoginBtn from './loginbtn';
import Link from 'next/link';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import LogoutBtn from './logoutbtn';
import classes from './layout.module.css';

export const metadata = {
    title: 'diet record',
    description: 'diet to record',
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);
    return (
        <html lang="ko">
            <body suppressHydrationWarning={true}>
                <nav className={classes.navbar}>
                    <div className={classes.navbar_content}>
                        <Link href="/" className={classes.navbar_name}>
                            Diet
                        </Link>
                        <Link href="inbody" className={classes.inbody}>
                            인바디
                        </Link>
                        <Link href="daily" className={classes.daily}>
                            운동 기록
                        </Link>
                    </div>
                    <div className={classes.navbar_auth}>
                        {session === null ? (
                            <LoginBtn />
                        ) : (
                            <>
                                <Link href="profile" className={classes.profile}>
                                    프로필
                                </Link>
                                <LogoutBtn />
                            </>
                        )}
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
