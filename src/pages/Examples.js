import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/Layout';
import React from 'react';
import { graphql } from 'gatsby';

const Examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data;

  return (
    <Layout>
      <p>hello from Examples page</p>
      <Header />
      <HeaderStatic />
      <h5>Author: {author}</h5>
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
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

export default Examples;
