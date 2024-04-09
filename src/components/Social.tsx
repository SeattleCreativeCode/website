import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaDiscord } from "react-icons/fa6";
import "./Social.scss";

type SocialProps = {};

const Social: React.FC<SocialProps> = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
      <div className="social">
        <a href="https://www.instagram.com/seattlecreativecode/">
          <FaInstagram />
        </a>
        <a href="https://discord.gg/2QXXH9MdV5">
          <FaDiscord />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default Social;
