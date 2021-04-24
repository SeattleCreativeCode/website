import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "./Layout";

const shortcodes = { Link };

export default ({ children }: any) => (
  <Layout>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </Layout>
);
