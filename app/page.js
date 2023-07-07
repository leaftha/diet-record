// 만들어야할 것들
// 기본 홈
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.content}>
      <h1 className={classes.mainItem}>
        이 사이트는 다이어트를 위한 사이트입니다.
      </h1>
      <span className={classes.itme}>
        현재 23년 7월부터 약 1년간 운용할 예정입니다.
      </span>
      <span className={classes.itme}>
        인바디와 눈 바디는 한달에 한번 입력이 가능하며 삭제는 관리자를 통해서만
        가능해서 신중하게 입력하기를 바랍니다.
      </span>
      <span className={classes.itme}>
        운동기록에서는 그날 운동을 했으면 해당 날에 운동내용을 입력하면 도장을
        찍어줍니다. 기록은 두달이 지나면 삭제됩니다.
      </span>
      <span className={classes.itme}>
        이상 문의할 내용은 vltpcks@gmail.com에 연락바랍니다.
      </span>
      <div>
        <h2>공지사항</h2>
      </div>
    </div>
  );
}
