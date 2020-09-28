import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query FirstQuery {
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
`;

const Header = () => {
  const {
    site: {
      info: {
        title,
        desc,
        person: { name },
      },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      {/* <h1>name: {data.site.siteMetadata.person.name}</h1> */}
      <h1>title: {title}</h1>
      <h2>name: {desc}</h2>
      <h2>name: {name}</h2>
    </div>
  );
};

export default Header;
