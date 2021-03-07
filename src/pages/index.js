import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

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
  const categories = ["All", "UI/UX Design", "Front-end Development"];

  const [state, setState] = useState({
    filteredData: projects,
    activeCategory: "All"
  });

  const changeCategory = (category) => {
    const filteredData = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.category.includes(category));
    const activeCategory = category;
    setState({ filteredData, activeCategory })
  }

  const filteredProjects = state.activeCategory !== "All" ? state.filteredData : projects;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h2 className="job-title">{data.site.siteMetadata.occupation}</h2>

      {/* <div className="projectCategories d-flex flex-wrap flex-column flex-sm-row mt-5 pt-sm-4">
        {
          categories.map((category, id) => {
            return (
              <div key={id} className="category mr-3">
                <button 
                  onClick={() => changeCategory(category)}
                  className={`btn py-2 px-3 ${state.activeCategory === category ? "active" : ""}`}
                >{category}</button>
              </div>
            )
          })
        }
      </div> */}
      
      <div className="projects row projects-row">
        {
          filteredProjects.map(({node}) => (
            <div key={node.id} className="project col-md-6">
              <div className="d-flex flex-column">
                <ProjectLink to={node.fields.slug}>
                  {/* {
                    node.frontmatter.featuredVideo == null ? <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /> 
                    : 
                    <video width="100%" autoPlay muted loop>
                      <source src={node.frontmatter.featuredVideo.publicURL} type="video/mp4" />
                    </video>
                  } */}
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /> 
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

export const pageQuery = graphql`
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
            category
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(quality: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }

            # featuredVideo {
            #   publicURL
            # }
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
