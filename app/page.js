import Link from 'next/link';
import LoginBtn from './loginbtn';
import classes from './page.module.css';
import { signIn } from 'next-auth/react';

const Home = () => {
    return (
        <div className={classes.content}>
            <div className={classes.body}>
                <img src="/images/main2.jpg" alt="main img" />
                <div className={classes.btns}>
                    <div className={classes.des}>
                        <h1>Diet Web</h1>
                        <p>여기서 당신의 도전을 성공시켜 보세요!</p>
                    </div>
                    <Link className={classes.btn} href="register">
                        회원가입
                    </Link>
                </div>
                {/* <ul className={classes.desc}>
                    <div className={classes.descContent}>
                        <li>
                            <span className={classes.stress}>다이어트</span>를 위한 사이트입니다.
                        </li>
                        <li>자신의 체중, 근육량, 체지방등을 입력하여 비교할수 있습니다.</li>
                        <li>하루 운동 기록을 입력하여 달력에 얼마나 운동했는지 알수 있습니다.</li>
                        <li>
                            여기서 당신의 <span className={classes.stress}>도전</span>이 성공하길!
                        </li>
                    </div>
                </ul> */}
            </div>
        </div>
    );
};

export default Home;
