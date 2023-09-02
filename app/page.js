import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <h1 className={classes.title}>Diet</h1>
        <img src="/images/main.jpg" alt="main img"></img>
      </div>
      <ul className={classes.subtitle}>
        <li>다이어트를 위한 사이트입니다.</li>
        <li>자신의 체중, 근육량, 체지방등을 입력하여 비교할수 있습니다.</li>
        <li>
          또한 하루 운동 기록을 입력하여 달력에 얼마나 운동했는지 알수 있습니다.
        </li>
        <li>여기서 당신의 도전이 성공하길!</li>
      </ul>
      <div className={classes.side}>d</div>
    </div>
  );
}
