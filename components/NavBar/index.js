import Image from "next/image";
import style from "./navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function navBar() {
  return (
    <nav className={style.nav}>
      <Link href="/">
        <Image
          width={150}
          height={150}
          loading="eager"
          src="/assets/logo/logo.jpg"
          alt="ASI Logo"
          priority
          style={{ marginLeft: "20px" }}
          draggable="false"
        ></Image>
      </Link>

      <ul>
        {/* About */}
        <div
          onMouseLeave={() => {
            document.getElementById("aboutDropdown").style.display = "none";
          }}
          style={{ position: "relative" }}
        >
          <Link href="/about">
            <li
              onMouseEnter={() => {
                document.getElementById("aboutDropdown").style.display =
                  "block";
              }}
            >
              About
            </li>
          </Link>
          <div
            onMouseEnter={() => {
              document.getElementById("aboutDropdown").style.display = "block";
            }}
            className={style.dropdown}
            style={{ width: "130px" }}
            id="aboutDropdown"
          >
            <Link href="/about">
              <div>About Us</div>
            </Link>
            <Link href="/about/faculty">
              <div>Faculty</div>
            </Link>
          </div>
        </div>
        {/* Academics */}
        <div
          onMouseLeave={() => {
            document.getElementById("academicDropdown").style.display = "none";
          }}
          style={{ position: "relative" }}
        >
          <Link href="/academics/early-years">
            <li
              onMouseEnter={() => {
                document.getElementById("academicDropdown").style.display =
                  "block";
              }}
            >
              Academics
            </li>
          </Link>
          <div
            onMouseEnter={() => {
              document.getElementById("academicDropdown").style.display =
                "block";
            }}
            className={style.dropdown}
            style={{ width: "190px" }}
            id="academicDropdown"
          >
            <Link href="/academics/early-years">
              <div>Early Years</div>
            </Link>
            <Link href="/academics/elementary">
              <div>Elementary School</div>
            </Link>
            <Link href="/academics/middle-school">
              <div>Middle School</div>
            </Link>
            <Link href="/academics/high-school">
              <div>High School</div>
            </Link>
            <Link href="/academics/summer-programs">
              <div>Summer Program</div>
            </Link>
          </div>
        </div>
        {/* Admission */}
        <div
          onMouseLeave={() => {
            document.getElementById("AdmissionDropdown").style.display = "none";
          }}
          style={{ position: "relative" }}
        >
          <Link href="/admission">
            <li
              onMouseEnter={() => {
                document.getElementById("AdmissionDropdown").style.display =
                  "block";
              }}
            >
              Admission
            </li>
          </Link>
          <div
            onMouseEnter={() => {
              document.getElementById("AdmissionDropdown").style.display =
                "block";
            }}
            className={style.dropdown}
            style={{ width: "130px" }}
            id="AdmissionDropdown"
          >
            <Link href="/admission">
              <div>Admission</div>
            </Link>
          </div>
        </div>
        {/* Rescources */}
        <div
          onMouseLeave={() => {
            document.getElementById("RescourcesDropdown").style.display =
              "none";
          }}
          style={{ position: "relative" }}
        >
          <Link href="/resources/calendar">
            <li
              onMouseEnter={() => {
                document.getElementById("RescourcesDropdown").style.display =
                  "block";
              }}
            >
              Rescources
            </li>
          </Link>
          <div
            onMouseEnter={() => {
              document.getElementById("RescourcesDropdown").style.display =
                "block";
            }}
            className={style.dropdown}
            style={{ width: "210px" }}
            id="RescourcesDropdown"
          >
            <Link href="/resources/tools">
              <div>Tools</div>
            </Link>
            <Link href="/resources/calendar">
              <div>Calendar</div>
            </Link>
            <Link href="/assets/pdf/example_pdf.pdf">
              <div>Handbook</div>
            </Link>
          </div>
        </div>
        {/* Contact Us */}
        <div
          onMouseLeave={() => {
            document.getElementById("ContactDropdown").style.display = "none";
          }}
          style={{ position: "relative" }}
        >
          <Link href="/contact/inquire">
            <li
              onMouseEnter={() => {
                document.getElementById("ContactDropdown").style.display =
                  "block";
              }}
            >
              Contact Us
            </li>
          </Link>
          <div
            onMouseEnter={() => {
              document.getElementById("ContactDropdown").style.display =
                "block";
            }}
            className={style.dropdown}
            style={{ width: "110px" }}
            id="ContactDropdown"
          >
            <Link href="/contact/inquire">
              <div>Inquire</div>
            </Link>
            <Link href="/contact/visit">
              <div>Visit</div>
            </Link>
          </div>
        </div>
        <div>
          <Link href="#blog">
            <li>Blog</li>
          </Link>
        </div>
      </ul>
      <div id="menu" className={style.menu}>
        <GiHamburgerMenu
          onClick={() => {
            document.getElementById("dropDownMenu").style.display = "flex";
          }}
          size={30}
        />
      </div>
      <section
        style={{
          zIndex: "4",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "white",
          paddingTop: "200px",
          paddingBottom: "200px",
          overflowY: "auto",
          left: "0px",
          top: "0px",
          color: "black",
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "none",
        }}
        id="dropDownMenu"
        className={style.list}
      >
        <AiOutlineClose
          size={25}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            document.getElementById("dropDownMenu").style.display = "none";
          }}
        />
        <li
          onClick={() => {
            if (document.getElementById("about").style.display == "block") {
              document.getElementById("about").style.display = "none";
            } else {
              document.getElementById("about").style.display = "block";
            }
          }}
        >
          <b style={{ textAlign: "center" }}>About</b>
        </li>
        <div style={{ display: "none", textAlign: "center" }} id="about">
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/about/faculty">
            <li>Faculty</li>
          </Link>
        </div>

        <li
          onClick={() => {
            if (document.getElementById("academic").style.display == "block") {
              document.getElementById("academic").style.display = "none";
            } else {
              document.getElementById("academic").style.display = "block";
            }
          }}
        >
          <b>Academics</b>
        </li>
        <div style={{ display: "none", textAlign: "center" }} id="academic">
          <Link href="/academics/early-years">
            <li>Early Years</li>
          </Link>
          <Link href="/academics/elementary">
            <li>Elementary</li>
          </Link>
          <Link href="/academics/middle-school">
            <li>Middle School</li>
          </Link>
          <Link href="/academics/high-school">
            <li>High School</li>
          </Link>
        </div>
        <li
          onClick={() => {
            if (
              document.getElementById("admissions").style.display == "block"
            ) {
              document.getElementById("admissions").style.display = "none";
            } else {
              document.getElementById("admissions").style.display = "block";
            }
          }}
        >
          <b>Admission</b>
        </li>
        <div style={{ display: "none", textAlign: "center" }} id="admissions">
          <Link href="/admission">
            <li>Admission</li>
          </Link>
        </div>
        <li
          onClick={() => {
            if (
              document.getElementById("rescources").style.display == "block"
            ) {
              document.getElementById("rescources").style.display = "none";
            } else {
              document.getElementById("rescources").style.display = "block";
            }
          }}
        >
          <b>Rescources</b>
        </li>
        <div style={{ display: "none", textAlign: "center" }} id="rescources">
          <Link href="/resources/tools">
            <li>Tools</li>
          </Link>
          <Link href="/resources/calendar">
            <li>Calendar</li>
          </Link>

          <Link href="/assets/pdf/example_pdf.pdf">
            <li>Handbook</li>
          </Link>
        </div>
        <li
          onClick={() => {
            if (document.getElementById("contactus").style.display == "block") {
              document.getElementById("contactus").style.display = "none";
            } else {
              document.getElementById("contactus").style.display = "block";
            }
          }}
        >
          <b>Contact Us</b>
        </li>

        <div style={{ display: "none", textAlign: "center" }} id="contactus">
          <Link href="/contact/inquire">
            <li>Inquire</li>
          </Link>
          <Link href="/contact/visit">
            <li>Visit</li>
          </Link>
        </div>
      </section>
    </nav>
  );
}
