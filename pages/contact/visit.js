import style from "../../styles/Default.module.css";

export default function visit() {
  return (
    <>
      <section className={style.header}>
        <img
          src="/assets/images/Academic/download.jpg"
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          Visit
        </h1>
        <p className={style.quote}>
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
      </section>
    </>
  );
}
