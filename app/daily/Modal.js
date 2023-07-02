import { useSession } from "next-auth/react";

export default function Modal({ setModal }) {
  let session = useSession();
  const todaye = new Date();
  const year = todaye.getFullYear();
  const month = todaye.getMonth() + 1;
  const date = todaye.getDate();

  const closeModel = () => {
    setModal(false);
  };

  return (
    <div>
      <form method="POST" action="api/post/daliy">
        <span onClick={closeModel}>X</span>
        <input name="detail" type="text" placeholder="운동내용" />
        <input
          style={{ display: "none" }}
          name="email"
          type="text"
          defaultValue={session.data.user.email}
        />
        <input
          style={{ display: "none" }}
          name="year"
          type="text"
          defaultValue={year}
        />
        <input
          style={{ display: "none" }}
          name="month"
          type="text"
          defaultValue={month}
        />
        <input
          style={{ display: "none" }}
          name="date"
          type="text"
          defaultValue={date}
        />
        <button type="submit">운동 입력</button>
      </form>
    </div>
  );
}
