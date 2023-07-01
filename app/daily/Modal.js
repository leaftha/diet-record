export default function Modal({ setModal }) {
  const closeModel = () => {
    setModal(false);
  };
  return (
    <div onClick={closeModel}>
      <form method="POST" action="">
        <span onClick={closeModel}>X</span>
        <input name="" type="text" placeholder="운동내용" />
        <button type="submit">운동 입력</button>
      </form>
    </div>
  );
}
