import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const ProjectTitle = styled.h3`
  color: #000;
  font-size: 22px;
  line-height: 37px;
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
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="UI/UX Design Projects" />
      <h2 className="title pb-3">UI/UX Design Projects</h2>
      <div className="projects row projects-row">
        {
          projects.map(({node}) => (
            <div key={node.id} className="project col-md-6">
              <div className="d-flex flex-column">              
                <ProjectLink to={node.fields.slug}>
                  <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} /> 
                  <ProjectTitle className="mt-3 pt-1 align-self-center text-center">{ node.frontmatter.title }</ProjectTitle>
                </ProjectLink>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { category: { in: ["UI/UX Design & Front-end Development", "UI/UX Design"] } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(quality: 100)
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