import React from "react";
import "./index.css";
import "./styles.css"; // Import your styles

import pix1 from "./assets/pix1.png";
import pix2 from "./assets/pix2.png";
import pix3 from "./assets/pix3.png";
import pix4 from "./assets/pix4.png";
import { useNavigate } from "react-router-dom";


function Landingpage() {

  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate("/signUp"); // Navigates to the "/signUp" route
  };
  const handleLogin = () => {
    navigate("/login"); // Navigates to the "/signUp" route
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <img
          style={{
            marginLeft: "60px",
          }}
          src="/src/assets/Group 740.png"
          alt="Logo"
        />
        <div style={{ marginRight: "50px" }}>
          <button  onClick={handleSignUp}
            style={{ width: "123px", height: "46px", border: "1px solid blue" }}
          >
            {" "}
            Sign Up
          </button>

          <button onClick={handleLogin}
            style={{
              width: "123px",
              height: "46px",
              backgroundColor: "#6460FF",
              color: "white",
              marginLeft: "20px",
              borderColor: "white",
              border: "3px",
            }}
          >
            Log in
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "540px",
          position: "relative",
        }}
      >
        <img
          style={{ height: "274px", paddingTop: "240px" }}
          src="./src/assets/Ellipse 2.png"
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "auto",
          }}
        >
          <p style={{ textAlign: "center", color: "blue" }}>
            Redifining Event Invitations
          </p>
          <p
            style={{
              fontSize: "90px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "1px",
              marginBottom: "1px",

              fontOpticalSizing: "auto",

              fontStyle: "normal",
            }}
          >
            Bring Your Events to Life
            <br /> Effortlessly
          </p>

          <p style={{ fontFamily: "Manrope", textAlign: "center" }}>
            Take the stress out of event planning and participation.Our platform
            offers intuitive tools to create and manage
            <br />
            invitations effortlessly while ensuring a seemless experiance
          </p>
          <button
            style={{
              backgroundColor: "#6460FF",
              width: "240px",
              height: "67px",
              textAlign: "center",
              color: "white",
            }}
          >
            Create event
          </button>
        </div>
        <img
          style={{ height: "274px" }}
          src="./src/assets/Ellipse 8.png"
          alt=""
        />
      </div>
      <div style={{ width: "100%", overflowX: "hidden", padding: "0" }}>
        <div
          className="carousel-container"
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="carousel-wrapper"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              width: "fit-content",
            }}
          >
            <img
              src={pix1}
              alt="Slide 1"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix2}
              alt="Slide 2"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix3}
              alt="Slide 3"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix4}
              alt="Slide 4"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            {/* Duplicate images for seamless loop */}
            <img
              src={pix1}
              alt="Slide 1"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix2}
              alt="Slide 2"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix3}
              alt="Slide 3"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
            <img
              src={pix4}
              alt="Slide 4"
              style={{ width: "100%", maxWidth: "400px", margin: "0 10px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          marginTop: "150px",
        }}
      >
        <div style={{ marginLeft: "150px" }}>
          <img src="./src/assets/Featured icon.png" alt="" />
          <p style={{ fontFamily: "Manrope", fontSize: "30px" }}>
            Event Management Made Simple
          </p>
          <p>
            Create events in minutes with an intuitive
            <br /> interface,upload images, and customize your <br />
            event&apos;s look with our easy-to-use tools
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div
            style={{
              width: "384px",
              padding: "10px",
              marginTop: "10px",
              borderRight: "solid   0.5px gray",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src="./src/assets/Featured icon2.png" alt="" />
            <p style={{ fontFamily: "Manrope", fontSize: "20px" }}>
              Effortless Event Creation
            </p>
            <p>
              Create events in minutes with an intuitive interface,upload
              images, and customize your event&apos;s look with our easy-to-use
              tools
            </p>
          </div>
          <div
            style={{
              width: "384px",
              padding: "10px",
              marginTop: "10px",
              borderRight: "solid   0.5px gray",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src="./src/assets/Featured icon3.png" alt="" />
            <p style={{ fontFamily: "Manrope", fontSize: "20px" }}>
              Guest Management List
            </p>
            <p>
              {" "}
              Easily manage and update your guest list. our guest management
              tools simplify the entire process
            </p>
          </div>
          <div
            style={{
              width: "384px",
              padding: "10px",
              marginTop: "60px",
              borderRight: "solid   0.5px gray",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src="./src/assets/Featured icon4.png" alt="" />
            <p style={{ fontFamily: "Manrope", fontSize: "20px" }}>
              RSVP Updates
            </p>
            <p>
              Keep track of who’s attending with real-time RSVP updates. Easily
              monitor guest responses and manage attendance
            </p>
          </div>
          <div
            style={{
              width: "384px",
              padding: "10px",
              marginTop: "60px",
              borderRight: "solid   0.5px gray",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src="./src/assets/Featured icon4.png" alt="" />
            <p style={{ fontFamily: "Manrope", fontSize: "20px" }}>
              Seamless Attendee Interaction
            </p>
            <p>
              Foster engagement by allowing attendees to view event details,
              RSVP, and stay updated on event changes
            </p>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "150px" }}>
          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: "600",
              color: "#6460FF",
              textAlign: "center",
            }}
          >
            Why use Us
          </p>
          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              textAlign: "center",
              margin: "auto 2px",
            }}
          >
            Simplified Event Planning with Powerful Features
          </p>
          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "center",
            }}
          ></p>
          <p style={{ fontFamily: "Manrope", textAlign: "center" }}>
            Discover how our platform streamlines event creation,enhances
            security and saves you time
            <br />
            all while keeping your guest engaged
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{ marginTop: "200px", marginLeft: "400px", width: "450px" }}
          >
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "50%", padding: "50px", paddingTop: "20px" }}
                src="./src/assets/iconA.png"
                alt=""
              />
              <div style={{ marginLeft: "0px" }}>
                <p style={{ font: "24px", fontWeight: "700" }}>
                  Simplified Process
                </p>
                <p>
                  Our platform is designed to make event planning easy and
                  <br />
                  efficient
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "50%", padding: "50px", paddingTop: "20px" }}
                src="./src/assets/iconB.png"
                alt=""
              />
              <div>
                <p style={{ font: "24px", fontWeight: "700" }}>
                  Time Saving Automation
                </p>
                <p>
                  Automate invitations, RSVPs, reminders, and guest list
                  <br /> management, reducing manual effort.
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "50%", padding: "50px", paddingTop: "20px" }}
                src="./src/assets/iconC.png"
                alt=""
              />
              <div>
                {" "}
                <p style={{ font: "24px", fontWeight: "700" }}>
                  Effortless Guest Management
                </p>
                <p>
                  Easily track attendance, manage guest lists, and update <br />
                  event details with minimal effort
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{ height: "900px" }}
              src="./src/assets/frame2.png"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#6460FF80",
            height: "490px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingTop: "70px", paddingLeft: "400px" }}>
            <p style={{ fontSize: "48px", fontWeight: "700" }}>
              Make Your Next Event <br />
              Unforgettable
            </p>
            <p style={{ fontSize: "18px", fontWeight: "400" }}>
              Take the hassle out of managing invitations and RSVPs. Create,
              <br />
              track, and enjoy events with easy
            </p>
            <button style={{ backgroundColor: "#6460FF" ,color:'white'}}>Get Started</button>
          </div>
          <div>
            <img src="./src/assets/BG 4.png" alt="" />
          </div>
        </div>
     <div  >
          <p
            style={{ fontSize: "40px", fontWeight: "700", textAlign: "center" ,width:'100%' ,padding:'50px'}}
          >
            Frequently Asked Questions
          </p>
          <div>
            <p>How do I create an event on the platform?</p>
            <p>
              To create an event, log in to your account and click
              <br /> on the &quot;Create Event&quot; button. Then, fill in the
              <br /> event’s basic details, such as the name, date,
              <br /> location, and description.
            </p>
          </div>
          <div>
            <p>Can I edit the event after sending invitations?</p>
            <p></p>
          </div>
          <div>
            <p>How do I track RSVPs and guest attendance?</p>
            <p></p>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <div><img src="./src/assets/Group 740.png " alt="" /> 
          <p style={{fontSize:'16'}}>Our platform is designed to simplify event<br/> management, from invitations to check-ins</p></div>
          <div>
            <p style={{fontSize:'20',fontWeight:'700'}}>Contact Us</p>
            <p>+2347066257617</p>
            donpraise2@gmail.com
          </div>
          <div>
            <p style={{fontSize:'20',fontWeight:'700'}}>Get in Touch</p>
            <p>Leave your email and we would reach out to you</p>
             <div><input type="text" /><button>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
