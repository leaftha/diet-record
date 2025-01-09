import classes from './page.module.css';

const Home = () => {
    return (
        <div className={classes.main}>
            <div className={classes.video}>
                <video width="80%" muted loop autoPlay>
                    <source src="/running_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Home;
