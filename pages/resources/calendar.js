import style from "../../styles/Default.module.css";
import GoogleCalendar from "../../components/Calendar";
export default function Calendar() {
  const apiKey = "AIzaSyBh-YWiLGw-MHu4MXaTncCQhD8m_GnRS-g";
  const calendarId =
    "95d242aa440d9cc73c9b2b431441c3e388850629c8d1bbea60ff63b3ee7c22ac@group.calendar.google.com";
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
