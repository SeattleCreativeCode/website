import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Nav: React.FC<Props> = (props) => {
  return (
    <>
      {/* <div className="link">
        <Link to="/events">Upcoming</Link>
      </div> */}
      <div className="link">
        <a
          href="https://discord.gg/2QXXH9MdV5"
          target="_blank"
          rel="noreferrer"
        >
          Join discord
        </a>
      </div>
      {/* <div className="link">
        <Link to="/members">Members</Link>
      </div> */}
    </>
  );
};

export default Nav;
