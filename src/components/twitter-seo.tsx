import { Helmet } from "react-helmet";
import React from "react";
import { SeoDetails } from "../types/SeoDetails";

const TwitterCard = ({
  twitterHandle,
  description,
  title,
  image,
}: SeoDetails) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default TwitterCard;
