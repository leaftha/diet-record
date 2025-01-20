import Link from 'next/link';
import classes from './page.module.css';

const Home = () => {
    return (
        <div className={classes.content}>
            <div className={classes.body}>
                <video width="100%" muted loop autoPlay>
                    <source src="/running_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src="/images/main2.jpg" alt="main img" /> */}
                <div className={classes.btns}>
                    <div className={classes.des}>
                        <h1>Diet Record</h1>
                        <p>여기서 당신의 도전을 성공시켜 보세요!</p>
                    </div>
                    <Link className={classes.btn} href="register">
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
