import style from "../../styles/Default.module.css";
import Events from "../../components/Events";
import axios from "axios";

export default function MiddleSchool({ events }) {
  return (
    <>
      <section className={style.header}>
        <img
          src="/assets/images/Academic/download3.jpg"
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          Middle School
        </h1>
        <p className={style.quote}>
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
      </section>
      <section className={style.container}>
        <p>Academics {">"} Middle School</p>
        <h1 className={style.underline_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
          nisi, egestas id tortor nec, lobortis accumsan orci. Fusce vestibulum
          dignissim neque vitae dignissim. Aliquam suscipit tincidunt erat non
          pulvinar. Suspendisse viverra consequat nunc. Donec sit amet turpis
          fermentum, faucibus tellus non, cursus odio. Morbi auctor mi ante, sed
          lobortis tellus vestibulum nec. Nulla id ante sollicitudin, venenatis
          urna ac, mollis quam. Duis fermentum justo nisi, et placerat sapien
          aliquam id. Nullam consectetur, tortor viverra porta ultrices, ligula
          lacus tincidunt nisl, eget dapibus neque dolor id tellus. Nunc sit
          amet tortor volutpat, finibus nibh et, tristique nulla. Nam egestas
          nisi at porttitor tempor. Nunc et dapibus nisl.
        </p>
        <p>
          Nunc ornare dolor non lacus tempor, sit amet euismod nisl pharetra.
          Donec mattis auctor vulputate. Phasellus ut eros pulvinar, ornare elit
          ut, porta odio. Sed vel libero lacus. Aenean dignissim nibh eget neque
          dignissim sagittis. Maecenas vulputate accumsan est, vitae ornare
          lacus tincidunt vitae. Pellentesque sagittis et urna a pulvinar.
          Phasellus risus neque, luctus eu consectetur et, faucibus at mauris.
          Sed bibendum lectus nisl, et mollis lectus faucibus vel.
        </p>
      </section>
      <section className={style.right}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
          nisi, egestas id tortor nec, lobortis accumsan orci. Fusce vestibulum
          dignissim neque vitae dignissim. Aliquam suscipit tincidunt erat non
          pulvinar. Suspendisse viverra consequat nunc.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
          nisi, egestas id tortor nec, lobortis accumsan orci. Fusce vestibulum
          dignissim neque vitae dignissim. Aliquam suscipit tincidunt erat non
          pulvinar. Suspendisse viverra consequat nunc.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
          nisi, egestas id tortor nec, lobortis accumsan orci. Fusce vestibulum
          dignissim neque vitae dignissim. Aliquam suscipit tincidunt erat non
          pulvinar. Suspendisse viverra consequat nunc.{" "}
        </p>
      </section>
      <section className={style.redContainer}>
        <h1>Middle School Highlights</h1>
        <ul>
          <li>roin malesuada iaculis. Etiam sagittis in nibh ut facilisis. </li>
          <li>
            roin malesuada ante sit amet elit iaculis iaculis. Etiam sagittis in
            nibh ut facilisis frity ghaq{" "}
          </li>
          <li>
            roin malesuada ante sit amet elit iaculis iaculis. Etiam sagittis in
            nibh ut facilisis.{" "}
          </li>
          <li>roin malesuada antculis iaculis. Etiam sagittis in nibh </li>
          <li>
            roin malesuada ante sit amet elit iaculis iaculis. Etiam sagittis in
            nibh facilisis.{" "}
          </li>
          <li>
            roin malesuada ante sit amet elit iaculis iaculis. nibh ut
            facilisis.{" "}
          </li>
          <li>
            roin malesuada ante sit amet. Etiam sagittis in nibh ut facilisis.{" "}
          </li>
        </ul>
      </section>
      <section className={style.whiteContainer}>
        <h1>Upcoming Middle School Events</h1>
        {events?.length > 0 && (
          <ul
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {events?.map((event, index) => {
              const description = event?.description;
              if (
                description
                  ?.toLowerCase()
                  .replace(" ", "")
                  .includes("middleschool")
              ) {
                return <Events key={index} data={event} />;
              }
            })}
          </ul>
        )}
        {events?.filter((event) =>
          event?.description
            ?.toLowerCase()
            .replace(" ", "")
            .includes("middleschool")
        ).length == 0 && (
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              marginTop: "100px",
              marginBottom: "100px",
              fontFamily: "var(--manrope-font)",
            }}
          >
            No upcoming events
          </p>
        )}
      </section>
    </>
  );
}
export async function getStaticProps() {
  let cachedEvents = null;

  if (cachedEvents) {
    return {
      props: {
        events: cachedEvents,
      },
    };
  }
  const CALENDAR_ID = process.env.NEXT_PUBLIC_CALENDAR_ID;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const currentTime = new Date().toISOString();
  const MAX_RESULTS = parseInt(process.env.NEXT_PUBLIC_CALENDAR_MAX_EVENTS);

  try {
    const response = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${currentTime}&maxResults=${MAX_RESULTS}&fields=items(summary,description,start,end,location,htmlLink)`
    );

    const events = response.data.items;
    // Cache the fetched data
    cachedEvents = events;
    return {
      props: {
        events,
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return {
      props: {
        events: [],
      },
    };
  }
}
