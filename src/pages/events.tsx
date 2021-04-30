import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/Layout";
import { RRule, RRuleSet, rrulestr } from "rrule";
import type { Event as EventType } from "../types/Event";
import { generateEventsFor } from "../types/Event";

const shortcodes = { Link };

export default ({ data }: any) => {
  const { allMdx } = data;
  const repeatingEvents = allMdx.edges
    .map((e: any) => e.node)
    .filter((e: any) => !!e.frontmatter.repetition)
    .map(
      (e: any): EventType => {
        return {
          ...e.frontmatter,
          description: e.body,
        };
      }
    )
    .flatMap(generateEventsFor);

  return (
    <Layout>
      <h1>Events</h1>
      <p>
        Seattle Creative Code hosts events and other such things. Many of our
        members also teach classes and run twitch streams.
      </p>
      <h5>One Off Events</h5>
      <p>
        These events are one time deals, and once they have passed, you may or
        may not have access to them.
      </p>
      <h5>Regular Events</h5>
      <p>These are events that happen on a regular cadence.</p>
      {repeatingEvents.map((e: any) => (
        <div key={`${e.date.toDateString()}-${e.time}`}>
          {e.date.toDateString()} @ {e.date.toTimeString()}
          <MDXRenderer>{e.description}</MDXRenderer>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/events/" } }) {
      edges {
        node {
          internal {
            type
          }
          frontmatter {
            repetition
            time
            link
            date
            title
          }
          id
          slug
          body
        }
      }
    }
  }
`;
