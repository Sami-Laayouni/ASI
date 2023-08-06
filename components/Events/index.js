import { format, parseISO } from "date-fns";
import style from "./events.module.css";
import Link from "next/link";

export default function Events({ data }) {
  return (
    <Link href={data.htmlLink}>
      <li key={data.id} className={style.container}>
        <h1>{data.summary}</h1>
        <p className={style.detail}>
          {!data.start.dateTime
            ? "All day"
            : `${format(parseISO(data.start.dateTime), "MMMM dd, yyyy - HH:mm")}
         - 
        ${format(parseISO(data.end.dateTime), "HH:mm")}`}
          {" · "}
          <span>{data.location}</span>
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
