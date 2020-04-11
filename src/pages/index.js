import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>{data.site.siteMetadata.occupation}</h1>

        <h4>{ data.allMarkdownRemark.totalCount }</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{ node.frontmatter.title }</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        occupation
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`;
