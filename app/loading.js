import claases from "./loading.module.css";

export default function Loading() {
  return (
    <div className={claases.square}>
      <div className={claases.spin}></div>
    </div>
  );
}
