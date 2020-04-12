import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ProjectLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const ProjectTitle = styled.h3`
  color: #000;
  font-size: 22px;
  font-weight: 400;
  &:hover {
    color: #000;
  }
  @media(max-width: 575.98px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h2 class="job-title">{data.site.siteMetadata.occupation}</h2>
      <div class="projects row projects-row">
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id} className="project col-md-6">
              <div className="project d-flex flex-column">              
                <ProjectLink to={node.fields.slug}>
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                  <ProjectTitle className="mt-4 align-self-center text-center">{ node.frontmatter.title }</ProjectTitle>
                </ProjectLink>
                {/* <p>{node.excerpt}</p> */}
              </div>
            </div>
          ))
        }
      </div>
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
            featuredImage {
              childImageSharp {
                sizes(quality: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
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
