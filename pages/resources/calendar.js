import style from "../../styles/Default.module.css";
import GoogleCalendar from "../../components/Calendar";
export default function Calendar() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_CALENDAR_ID;
  return (
    <>
      <section className={style.header}>
        <img
          src="/assets/images/Rescources/download.jpg"
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          Calendar
        </h1>
        <p className={style.quote}>
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
      </section>
      <GoogleCalendar apiKey={apiKey} calendarId={calendarId} />
    </>
  );
}
