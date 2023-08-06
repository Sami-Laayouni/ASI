import style from "./loading.module.css";
export default function Loading() {
  return (
    <div className={style.loadingCircle}>
      <div className={style.circle}></div>
    </div>
  );
}
