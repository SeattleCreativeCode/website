import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as colors from "../types/ColorSystem";
import DefaultSidebar from "./DefaultSidebar";
import Logo from "./Logo";
import { Helmet } from "react-helmet";
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
	font-size: 6.854rem;
}

h2 {
	font-size: 4.236rem;
}

h3 {
	font-size: 2.618rem;
}

h4 {
	font-size: 1.618rem;
}

h5 {
	font-size: 1rem;
}

h6 {
	font-size: 1rem;
	font-weight: 500;
	font-style: italic;
}

p {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
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
        {sidebar || <DefaultSidebar />}
      </div>
      <div id="the-content">{children}</div>
    </div>
  );
};

export default Layout;
