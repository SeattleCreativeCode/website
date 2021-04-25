import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as colors from "../types/ColorSystem";
import { Typescale } from "../types/Typescale";
import DefaultSidebar from "./DefaultSidebar";
import Logo from "./Logo";
import Seo from "./seo";

const GlobalStyle = createGlobalStyle`
	${reset}
// Base Line
body {
	background: ${colors.White.L000};
	color: ${colors.Black.L900};
	min-height: 100vh;
	font-family: sans-serif;
	line-height: 1.5em;

	@media(max-width: 768px) {
		max-width: none;
	}
}

a {
	color: ${colors.Blue.L500};
	font-weight: 700;
	text-decoration: none !important;

	&.arrowed::before {
		content: "↪";
		margin-right: 0.5em;
	}
}

// Layout
#the-container {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.5rem;
	height: 100%;
	min-height: 100vh;
}

#the-sidebar {
	min-width: 30ch;
	max-width: 30ch;
	background: ${colors.Black.L900};
	color: ${colors.White.L000};
}

#the-content {

}

#the-sidebar, #the-content {
	padding: 3rem;
}
// Typography

h1, h2, h3, h4, h5, h6 {
	font-weight: 700;
	line-height: 1em;
	margin-bottom: 0.5rem;
	margin-top: 5rem;

}

h1 {
	font-size: ${Typescale.S5};
}

h2 {
	font-size: ${Typescale.S4};
}

h3 {
	font-size: ${Typescale.S3};
}

h4 {
	font-size: ${Typescale.S2};
}

h5 {
	font-size: ${Typescale.S1};
}

h6 {
	font-size: ${Typescale.S1};
	font-weight: 500;
	font-style: italic;
}

p {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	max-width: 60ch;
}

blockquote {
	margin-left: 0rem;
	padding-left: 1rem;
	border-left: 5px solid;
	border-left-color: ${colors.Orange.L500};
}

em {
	font-style: italic;
}

strong {
	font-weight: 900;
	font-color: ${colors.Black.L500};
}

ol, ul {
	margin: 1rem 0;
}

ul {
	& > li {
		&::before {
			content: "\u2022";
			color: ${colors.Orange.L500};
			font-weight: bold;
			display: inline-block;
			width: 1em;
		}
	}
}

ol {
	list-style: number;
	margin-left: 1em;
	& > li {

	}
}
`;

const Layout = ({ children, sidebar }: any) => {
  return (
    <div id="the-container">
      <Seo />
      <GlobalStyle theme="dark" />
      <div id="the-sidebar">
        <Logo />
        <p
          style={{
            fontSize: Typescale.S1_5,
            padding: "0 1rem",
            hyphens: "auto",
          }}
        >
          Seattle Creative Code is a small community of artists and
          technologists who hang out, collaborate, and share ideas.
        </p>
        {sidebar || <DefaultSidebar />}
      </div>
      <div id="the-content">{children}</div>
    </div>
  );
};

export default Layout;
