import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";
import { SeoDetails } from "../types/SeoDetails";
import TwitterCard from "./twitter-seo";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        plausibleId
      }
    }
    allFile(filter: { relativePath: { eq: "card_image.png" } }) {
      nodes {
        childrenImageSharp {
          fixed(width: 1200) {
            src
          }
        }
      }
    }
  }
`;

const Seo = ({ title, description, image, twitterHandle }: SeoDetails) => {
  const { pathname } = useLocation();
  const { site, allFile } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    plausibleId,
  } = site.siteMetadata;
  const defaultImage = allFile.nodes[0].childrenImageSharp[0].fixed.src;
  // const defaultImage = null;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    twitterHandle,
    plausibleId,
  };
  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate} defer={false}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {seo.url && <meta property="og:url" content={seo.url} />}

        {/* og:type needs to be set */}

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <script
          async
          defer
          data-domain={seo.plausibleId}
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <TwitterCard {...seo} />
    </>
  );
};

export default Seo;
