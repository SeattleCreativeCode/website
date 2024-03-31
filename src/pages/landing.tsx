import "./landing.scss";
import React from "react";
import EventTeaser from "../components/EventTeaser";
import Logo from "../logo.svg?react";
import { isDatePast } from "../utils/DateUtils";
import Nav from "../components/Nav";
import { MapKind } from "../components/MapFrame";
import Social from "../components/Social";

// TODO: Add the ability to pick a random shader from a list and use it as the
// background for the landing page. There should be some kind of attribution at
// the bottom of the page.

const nextEventDate = new Date("2024-05-25T17:00:00");

const Landing: React.FC = () => {
  return (
    <div id="Landing">
      <header>
        <Logo />
        <Nav />
        <Social />
      </header>
      <div className="content">
        <article>
          <h1>Seattle Creative Code</h1>
          <p>
            We sit at the intersection of art and techology. Our community is
            made up of artists, technologists, and anyone who is interested in
            the creative use of technology. We host events, workshops, and
            provide resources for people who want to learn more about creative
            coding.
          </p>
          <p className="definition">
            <i>Creative Coding:</i> The practice of art utlilzing technology for
            aesthetic purposes. While it sometimes involved custom-written
            softeware, it can also be as simple as using existing tools in novel
            ways, or using purpose-built tools to create art.
          </p>
          <p>
            Many of our members use tools like Touch Designer, Houdini,
            Substance Designer, and Blender to explore their art practice. We
            also have a strong community of developers who write custom software
            as part of their practice. We welcome all skill levels and
            backgrounds.
          </p>
        </article>
        <aside>
          {!isDatePast(nextEventDate) && (
            <>
              <h2>Up Next</h2>
              <EventTeaser
                date={nextEventDate}
                title="Art Show"
                address={
                  <>
                    2+U Building
                    <br />
                    1201 2nd Ave
                    <br />
                    Seattle, WA 98101
                  </>
                }
                map={MapKind.TWO_PLUS_U}
              >
                A Projection Focused Art Show - More details coming soon!
              </EventTeaser>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Landing;
