import style from "./footer.module.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const [kids, setKids] = useState(0);
  const [kidInfo, setKidInfo] = useState([]);
  const [visit, setVisit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("visit")) {
      setVisit(true);
    }
  }, [router.pathname]);

  const handleKidNameChange = (index, value) => {
    setKidInfo((prevKidInfo) => {
      const updatedKidInfo = [...prevKidInfo];
      updatedKidInfo[index] = {
        ...updatedKidInfo[index],
        name: value,
      };
      return updatedKidInfo;
    });
  };

  const handleKidAgeChange = (index, value) => {
    setKidInfo((prevKidInfo) => {
      const updatedKidInfo = [...prevKidInfo];
      updatedKidInfo[index] = {
        ...updatedKidInfo[index],
        age: value,
      };
      return updatedKidInfo;
    });
  };

  return (
    <>
      <div className={style.containerFooter}>
        <section className={style.contactForm}>
          <h1>{!visit ? "Contact Us" : "Visit us"}</h1>
          {!visit ? <p>Feel free to reach out to us</p> : ""}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              document.getElementById("submit").innerText = "Sending";
              const response = await fetch(
                "/api/emailService/send_message_question",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    first_name: document.getElementById("first_name").value,
                    last_name: document.getElementById("last_name").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    message: document.getElementById("message").value,
                    kids: kidInfo,
                    visit: visit,
                  }),
                }
              );
              if (response.ok) {
                document.getElementById("submit").innerText = "Sent";
              } else {
                document.getElementById("submit").innerText =
                  "An error occured";
              }
            }}
          >
            <div className={style.labels}>
              <div>
                <label>First Name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  required
                ></input>
              </div>
              <div>
                <label>Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  required
                ></input>
              </div>
              <div>
                <label>Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                ></input>
              </div>
              <div>
                <label>Phone Number</label>
                <input id="phone" type="tel" placeholder="Phone Number"></input>
              </div>
            </div>
            <div style={{ marginTop: "20px", paddingRight: "20px" }}>
              <label>
                Select number of kids {!visit ? "concerned" : "visiting"}
              </label>
              <input
                id="kids"
                type="number"
                min={0}
                max={100}
                placeholder={`Number of kids concerned ${
                  !visit ? "concerned" : "visiting"
                }`}
                onChange={(e) => {
                  setKids(e.target.value);
                }}
              ></input>
            </div>

            {kids > 0 &&
              (() => {
                const kidsItems = [];
                for (let i = 0; i < kids; i++) {
                  kidsItems.push(
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "50% 50%",
                        paddingRight: "40px",
                        gap: "20px",
                      }}
                      key={i}
                    >
                      <input
                        placeholder={`Kid number ${i + 1} name`}
                        onChange={(e) => handleKidNameChange(i, e.target.value)}
                        required
                      ></input>
                      <input
                        placeholder={`Kid number ${i + 1} age`}
                        type="number"
                        min={0}
                        required
                        onChange={(e) => handleKidAgeChange(i, e.target.value)}
                      ></input>
                    </div>
                  );
                }
                return kidsItems;
              })()}

            <div style={{ marginTop: "10px" }}>
              <label>Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>

          <div className={style.bottom}>
            <Link
              target="_blank"
              href="https://www.facebook.com/ASIAlAkhawaynSchoolofIfrane"
            >
              <BsFacebook
                size={26}
                style={{
                  marginTop: "20px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              />
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/ifrane_school/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            >
              <BsInstagram
                size={26}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@asialakhawaynschoolofifran2412"
            >
              <BsYoutube
                size={26}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              />
            </Link>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.10680749180017!2d-5.11085031805619!3d33.52290027174004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda1d74f834df93d%3A0xa3af36242761ec78!2sAl%20Akhawayn%20School%20of%20Ifrane%20(ASI)!5e0!3m2!1sen!2sma!4v1690370714653!5m2!1sen!2sma"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={style.veryBottom}>
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </>
  );
}
