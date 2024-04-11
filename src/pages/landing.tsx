import "./landing.scss";
import React from "react";
import EventTeaser from "../components/EventTeaser";
import { isDatePast } from "../utils/DateUtils";
import Logo from "../logo.svg?react";
import Nav from "../components/Nav";
import Social from "../components/Social";
import { MapKind } from "../components/MapFrame";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// TODO: Add the ability to pick a random shader from a list and use it as the
// background for the landing page. There should be some kind of attribution at
// the bottom of the page.

const nextEventDate = new Date("2024-05-25T17:00:00");

const Landing: React.FC = () => {
  return (
    <div id="Landing">
      <header>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
        <Social />
      </header>
      <div className="content">
        <article>
          <h1>Seattle Creative Code</h1>
          <p>
            We sit at the intersection of art and techology. Our community is
            made up of artists, technologists, and anyone who is interested in
            the creative use of technology.
          </p>
          <p>
            We host events, workshops, and provide resources for people who want
            to learn more about creative coding.
          </p>
          <p className="definition">
            <i>Creative Coding:</i> the use of{" "}
            <Popup
              trigger={
                <span className="example">code or node-based tools</span>
              }
              position="bottom center"
              closeOnDocumentClick
            >
              Examples include but are not limited to:
              <ul>
                <li>
                  The use of any programming language as part of the creative
                  process
                </li>
                <li>
                  Visual programming/patching in node-based environments like
                  the ones provided by TouchDesigner, Max, vvvv, shader editors,
                  Unity, Unreal, etc
                </li>
                <li>
                  Procedural design/generation in
                  Blender/Houdini/Rhino/Substance Designer, etc
                </li>
                <li>
                  Scripting in commercially available design tools like
                  Illustrator, After Effects, etc
                </li>
                <li>
                  Algorithmic/computational approaches that may not necessarily
                  involve programming on a computer (e.g., hand-made
                  algorithmic/mathematical art)
                </li>
              </ul>
            </Popup>{" "}
            for aesthetic purposes.
          </p>
          <p>We welcome all skill levels and backgrounds.</p>
        </article>
        <aside>
          {!isDatePast(nextEventDate) && (
            <>
              <h2>Up Next</h2>
              <EventTeaser
                date={nextEventDate}
                title="CodeCraft"
                address="TWO_PLUS_U"
                map={MapKind.TWO_PLUS_U}
              >
                <Link to="/events/codecraft/2024-05-25">Learn More</Link>
              </EventTeaser>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Landing;
