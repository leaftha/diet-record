import classes from "./page.module.css";

const Home = () => {
  return (
    <div className={classes.content}>
      <div className={classes.body}>
        <img src="/images/main2.jpg" alt="main img" />
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
      <div className={classes.main}>
        <div className={classes.cardList}>
          <div className={classes.card}>
            <div className={classes.cardBody}>
              <h1>인바디</h1>
              <p>
                자신의 인바디와 체중을 달마다 기록하여 그래프로 비교를 해보세요.
              </p>
              <p>
                옆의 체중 입력 버튼을 눌러 이번달의
                체중,근육량,체지방,체지방률을 입력할 수 있습니다.
              </p>
              <p>그래프를 통해 이전 달들과 비교를 할 수 있습니다.</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src="/images/inbody.jpg" alt="inbody img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
