import classes from "./page.module.css";

const Home = () => {
  return (
    <div className={classes.content}>
      <div className={classes.body}>
        <img src="/images/main2.jpg" alt="main img"></img>
        <ul className={classes.desc}>
          <div className={classes.descContent}>
            <li>
              <span className={classes.stress}>다이어트</span>를 위한
              사이트입니다.
            </li>
            <li>자신의 체중, 근육량, 체지방등을 입력하여 비교할수 있습니다.</li>
            <li>
              하루 운동 기록을 입력하여 달력에 얼마나 운동했는지 알수 있습니다.
            </li>
            <li>
              여기서 당신의 <span className={classes.stress}>도전</span>이
              성공하길!
            </li>
          </div>
        </ul>
      </div>
      <div>
        <h1>인바디</h1>
      </div>
    </div>
  );
};

export default Home;
