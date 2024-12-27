import React from "react";
import pix1 from "./assets/pix1.png";
import pix2 from "./assets/pix2.png";
import pix3 from "./assets/pix3.png";
import pix4 from "./assets/pix4.png";

function Landingpage() {
  return (
    <div>
      
      <div>
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <img src={pix1} alt="Slide 1" />
            <img src={pix2} alt="Slide 2" />
            <img src={pix3} alt="Slide 3" />
            <img src={pix4} alt="Slide 4" />
            {/* Duplicate images for seamless loop */}
            <img src={pix1} alt="Slide 1" />
            <img src={pix2} alt="Slide 2" />
            <img src={pix3} alt="Slide 3" />
            <img src={pix4} alt="Slide 4" />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginLeft: "150px" }}>
          <img src="./src/assets/Featured icon.png" alt="" />
          <p>Event Management Made Simple</p>
          <p>
            Create events in minutes with an intuitive
            <br /> interface,upload images, and customize your <br />
            event&apos;s look with our easy-to-use tools
          </p>
        </div>
        <div>
          <div>
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
          <div>
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
          <div>
            <img src="./src/assets/Featured icon4.png" alt="" />
            <p style={{ fontFamily: "Manrope", fontSize: "20px" }}>
              RSVP Updates
            </p>
            <p>
              Keep track of who’s attending with real-time RSVP updates. Easily
              monitor guest responses and manage attendance
            </p>
          </div>
          <div>
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
        <div>
          <p>Why use Us</p>
          <p>Simplified Event Planning with Powerful Features</p>
          <p></p>
          <p>
            Discover how our platform streamlines event creation,enhances
            security and saves you time
            <br />
            all while keeping your guest engaged
          </p>
        </div>
        <div>
          <div>
            <div>
              <img src="./src/assets/iconA.png" alt="" />
              <div>
                <p>Simplified Process</p>
                <p>
                  Our platform is designed to make event planning easy and
                  <br />
                  efficient
                </p>
              </div>
            </div>
            <div>
              <img src="./src/assets/iconB.png" alt="" />
              <div>
                <p>Time Saving Automation</p>
                <p>
                  Automate invitations, RSVPs, reminders, and guest list
                  <br /> management, reducing manual effort.
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img src="./src/assets/iconC.png" alt="" />
              <div>
                {" "}
                <p>Effortless Guest Management</p>
                <p>
                  Easily track attendance, manage guest lists, and update <br />
                  event details with minimal effort
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="./src/assets/frame2.png" alt="" />
          </div>
        </div>
        <div>
          <div>
            <p>
              Make Your Next Event <br />
              Unforgettable
            </p>
            <p>
              Take the hassle out of managing invitations and RSVPs. Create,
              <br />
              track, and enjoy events with easy
            </p>
            <button>Get Started</button>
          </div>
          <div>
            <img src="./src/assets/BG 4.png" alt="" />
          </div>
        </div>
        <div>
          <p>Frequently Asked Questions</p>
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
        
      </div>
    </div>
  );
}

export default Landingpage;
