import { format, parseISO, addDays, isSameDay } from "date-fns";
import style from "./events.module.css";
import Link from "next/link";

export default function Events({ data }) {
  const startDate = parseISO(data.start.date);
  const endDate = parseISO(data.end.date);
  const nextDayDate = addDays(startDate, 1);
  return (
    <Link href={data.htmlLink}>
      <li key={data.id} className={style.container}>
        <h1>{data.summary}</h1>
        <p>
          {!data.start.dateTime
            ? "All day"
            : `${format(parseISO(data.start.date), "HH:mm")} - 
          ${format(parseISO(data.end.date), "HH:mm")}`}
          {" · "}
          {isSameDay(startDate, endDate)
            ? `${format(startDate, "MMMM dd, yyyy")}`
            : isSameDay(nextDayDate, endDate)
            ? `${format(startDate, "MMMM dd, yyyy")}`
            : ` ${format(startDate, "MMMM dd, yyyy")} - 
              ${format(addDays(endDate, -1), "MMMM dd, yyyy")}`}
        </p>

        <p className={style.desc}>
          {data.description
            ? data.description
            : "No description found for this event."}
        </p>
      </li>
    </Link>
  );
}
