import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            person {
              name
              age
            }
            author
            data
            desc: description
            title
          }
        }
      }
    `}
    render={(data) => <h4>{data.site.info.desc}</h4>}
  ></StaticQuery>
);

export default ComponentName;
