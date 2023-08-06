import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Events from "../components/Events";
import axios from "axios";

export default function Home({ events }) {
  const images = [
    "/assets/images/Header/background.jpg",
    "/assets/images/Header/background2.webp",
    "/assets/images/Header/background3.jpg",
    "/assets/images/Header/background4.jpg",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const backgroundImage = document.getElementById("backgroundImage");
    const loadingBar = document.getElementById("loadingBar");
    if (backgroundImage.style.scale == "1.8") {
      backgroundImage.style.scale = "1";
      loadingBar.style.width = "100%";
    } else {
      backgroundImage.style.scale = "1.8";
      loadingBar.style.width = "0%";
    }
    setTimeout(() => {
      if (current < 3) {
        setCurrent(current + 1);
      } else {
        setCurrent(0);
      }
    }, 9000);
  }, [current]);

  const quoteText = [
    `"I have not failed. I've just found 10,000 ways that won't work" - Thomas Edison`,
    `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`,
    `"Life is what happens when you're busy making other plans." - John Lennon`,
  ];
  const [quote, setQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(1);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (quoteIndex === quoteText[index].length) {
        setTimeout(() => {
          setDeleting(true);
          setQuoteIndex(quoteIndex - 1);
        }, 300);
      } else if (quoteIndex == 0) {
        setTimeout(() => {
          if (index + 1 != quoteText.length) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
          setQuoteIndex(1);
          setDeleting(false);
        }, 300);
      } else {
        if (!deleting) {
          setQuote(quoteText[index].slice(0, quoteIndex + 1));
          setQuoteIndex(quoteIndex + 1);
        } else {
          setQuote(quoteText[index].slice(0, quoteIndex - 1));
          setQuoteIndex(quoteIndex - 1);
        }
      }
    }, 50); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(typingInterval);
  }, [quoteIndex]);

  const containerRef = useRef(null); // Create a ref for the <ul> container

  const handleScrollLeft = () => {
    // Scroll the <ul> container to the left
    containerRef.current.scrollLeft -= 200; // You can adjust the scroll amount (200 in this example)
  };

  const handleScrollRight = () => {
    // Scroll the <ul> container to the right
    containerRef.current.scrollLeft += 200; // You can adjust the scroll amount (200 in this example)
  };

  return (
    <>
      {/* Hero */}
      <section className={style.header}>
        <img
          loading="eager"
          className={style.fadeInImage}
          src={images[current]}
          id="backgroundImage"
        ></img>

        <div className={style.container}>
          <h1>
            Welcome to <span>Al Akhawayn School of Ifrane</span>
          </h1>
          <Link href="/about">
            <button className={style.aboutus}>About Us</button>
          </Link>
        </div>
        <div className={style.loadingContainer}>
          <div id="loadingBar" className={style.loadingBar}></div>
        </div>
      </section>
      {/* Quote section */}
      <section className={style.quoteContainer}>
        <Image
          width={210}
          height={210}
          loading="eager"
          src="/assets/logo/logo.jpg"
          alt="ASI Logo"
          priority
          draggable="false"
        />
        <h1>
          {quote}
          <span className={style.cursor} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique sollicitudin lectus ut cursus. Duis ac efficitur dolor.
          Fusce volutpat dui sagittis eros commodo elementum.
        </p>
      </section>
      {/* Director's message section */}
      <section className={style.directorContainer}>
        <h1>Director&apos;s Message</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique sollicitudin lectus ut cursus.
        </p>
        <div className={style.grid}>
          <img src="/assets/images/Main/man.jpg"></img>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fermentum, sem quis eleifend rutrum, mi eros malesuada mi, nec
            imperdiet est ante nec nisl. Vestibulum tincidunt, lectus sit amet
            tristique ultrices, risus lorem rhoncus sapien, ut suscipit libero
            tellus sit amet tortor. Nullam leo lectus, blandit nec nisl non,
            auctor lacinia mi. Aenean ac justo eu nisi dapibus hendrerit quis id
            sapien. Integer eget iaculis neque. Sed et varius ex. Suspendisse
            elementum egestas pellentesque. Morbi vel sem at ligula lacinia
            viverra non lacinia tortor. Nulla rutrum convallis nulla, nec
            consectetur justo vehicula sed. Maecenas mauris quam, dignissim in
            sapien non, aliquet iaculis nisi. Donec rhoncus magna vitae quam
            vulputate, ac malesuada urna gravida. Proin finibus mattis
            porttitor. In a mi quis nunc sagittis mollis. Nullam eget lacus
            varius, egestas sapien eu, rutrum augue. Sed egestas eget mi dictum
            ultrices. Etiam interdum, magna id molestie pulvinar, augue risus
            blandit velit, eget efficitur turpis urna id massa.
          </span>
        </div>
      </section>
      {/* Class section */}
      <ul className={style.classContainer}>
        <li>
          <img src="/assets/images/Class/preschool.jpg"></img>
          <h1>Early Years</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consequat rhoncus hendrerit. Cras convallis ante et ullamcorper
            posuere.
          </p>
          <Link href="/academics/early-years">
            <button>Learn more</button>
          </Link>
        </li>
        <li>
          <img src="/assets/images/Class/preschool.jpg"></img>
          <h1>Elementary</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consequat rhoncus hendrerit. Cras convallis ante et ullamcorper
            posuere.{" "}
          </p>
          <Link href="/academics/elementary">
            <button>Learn more</button>
          </Link>
        </li>
        <li>
          <img src="/assets/images/Class/preschool.jpg"></img>
          <h1>Middle School</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consequat rhoncus hendrerit. Cras convallis ante et ullamcorper
            posuere.{" "}
          </p>
          <Link href="/academics/middle-school">
            <button>Learn more</button>
          </Link>
        </li>
        <li>
          <img src="/assets/images/Class/preschool.jpg"></img>
          <h1>High School</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consequat rhoncus hendrerit. Cras convallis ante et ullamcorper
            posuere.{" "}
          </p>
          <Link href="/academics/high-school">
            <button>Learn more</button>
          </Link>
        </li>
      </ul>
      {/* Video section */}
      <section className={style.videoContainer}>
        <h1>Experience our School</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras</p>
        <div className={style.videoBox}>
          <iframe
            className={style.video}
            src="https://www.youtube.com/embed/qd1OQTpI6qw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* Upcoming events */}
      <section className={style.upcomingEvents_container}>
        <h1>Upcoming Events</h1>

        {events?.length > 0 && (
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => {
              document.getElementById("left").style.display = "block";
              document.getElementById("right").style.display = "block";
            }}
            onMouseLeave={() => {
              document.getElementById("left").style.display = "none";
              document.getElementById("right").style.display = "none";
            }}
          >
            <button className={style.left} onClick={handleScrollLeft} id="left">
              {"<"}
            </button>

            <ul
              ref={containerRef}
              style={{
                width: "100%",
                height: "fit-content",
                overflowX: "hidden",
                overflowY: "hidden",
                marginTop: "40px",
                whiteSpace: "nowrap",
                paddingBottom: "10px",
              }}
            >
              {events?.map((event, index) => (
                <Events key={index} data={event} />
              ))}
            </ul>
            <button
              className={style.right}
              onClick={handleScrollRight}
              id="right"
            >
              {">"}
            </button>
          </div>
        )}

        {events?.length == 0 && (
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
