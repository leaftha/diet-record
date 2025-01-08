import classes from "./page.module.css";

const Home = () => {
  return (
    <div className={classes.content}>
      <div className={classes.body}>
        <img src="/images/main.jpg" alt="main img"></img>
        <ul className={classes.desc}>
          <li>다이어트를 위한 사이트입니다.</li>
          <li>자신의 체중, 근육량, 체지방등을 입력하여 비교할수 있습니다.</li>
          <li>
            하루 운동 기록을 입력하여 달력에 얼마나 운동했는지 알수 있습니다.
          </li>
          <li>여기서 당신의 도전이 성공하길!</li>
        </ul>
      </div>
      {/* <div className={classes.side}>
                <div className={classes.arrow}>{`↓`}</div>
            </div>
            <div className={`${classes.item} ${classes.one}`}>
                <div>
                    <p>
                        인바디 페이지에서는 자신의 체중, 근육량, 체지방을 입력하고
                        <br /> 월 단위로 그래프 비교가 가능합니다.
                    </p>
                    <p>목표 체중을 입력했다면 목표체중까지 얼마나 남았는지 알수 있습니다.</p>
                </div>
            </div>
            <div className={`${classes.imgItem} ${classes.imgOne}`}>
                <img src="/images/inbody.jpg" alt="inbody img"></img>
            </div>
            <div className={`${classes.imgItem} ${classes.imgTwo}`}>
                <img src="/images/daily.jpg" alt="daily img"></img>
            </div>
            <div className={`${classes.item} ${classes.two}`}>
                <div>
                    <p>
                        운동기록 페이지에서는 자신의 운동을 기록하고
                        <br /> 한달에 얼마나 운동했는지 알수 있습니다.
                    </p>
                    <p>
                        청록색으로 표시되는 오늘의 날짜를 클릭하여
                        <br /> 나타나는 모달창에 오늘 한 운동을 기록하세요
                    </p>
                </div>
            </div>
            <div className={`${classes.item} ${classes.three}`}>
                <div>
                    <p>
                        프로필 페이지에서는 목표 체중을 입력가능하고
                        <br /> 현재 체중과 자신의 이름 이메일을 알수 있으며 회원 탈퇴도 가능합니다.
                    </p>
                </div>
            </div>
            <div className={`${classes.imgItem} ${classes.imgThree}`}>
                <img src="/images/profile.jpg" alt="profile img"></img>
            </div> */}
      {/* <div className={classes.footer}>
        <h1>기타 문의는 관리자를 통해 말해주세요</h1>
        <h1>ex : 인바디 잘못 입력 등</h1>
        <p>vltpcks@gmail.com</p>
      </div> */}
    </div>
  );
};

export default Home;
