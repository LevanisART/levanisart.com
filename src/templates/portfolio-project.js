import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from "../components/seo";
import Share from '../components/Share';

const ProjectTitle = styled.h1`
  color: #000;
  font-size: 29px;
  font-weight: 400;
  @media(max-width: 575.98px) {
    font-size: 25px;
    font-weight: 500;
  }
`;

const ProjectDescription = styled.div`
  margin-top: 25px;
  color: #484848;
  font-size: 15px;
  font-weight: 300;
  line-height: 29px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media(max-width: 991.98px) {
    width: 100%;
    margin: 15px 0;
  }
`;

const ProjectDetailsTitle = styled.span`
  font-size: 17px;
  font-weight: 500;
  line-height: 29px;
`;

const ProjectDetailsDescription = styled.span`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 300;
`;

const ViewProject = styled.a`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.5px;
  display: flex;
  color: #000;
  &:hover {
    color: #000;
  }
  &::before {
    content: '';
    display: flex;
    width: 25px;
    margin-top: 7.5px;
    height: 3px;
    background: #000;
    border-radius: 50rem;
    margin-right: 14px;
  }
`;

export default ({ data }) => {
  const project = data.markdownRemark;

  const slug = project.fields.slug;
  const url = data.site.siteMetadata.url;
  const image = project.frontmatter.featuredImage.childImageSharp.sizes.originalImg;
  const title = project.frontmatter.title;
  const twitterHandle = data.site.siteMetadata.twitterHandle;

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <div>
        <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: project.html }}></ProjectDescription>
        <div className="project-details mt-4 mt-lg-5 d-flex flex-wrap align-items-center">
          {project.frontmatter.client && (
            <ProjectDetails>
              <ProjectDetailsTitle>Client</ProjectDetailsTitle>
              <ProjectDetailsDescription>{project.frontmatter.client}</ProjectDetailsDescription>
            </ProjectDetails>
          )}
          {project.frontmatter.date && (
            <ProjectDetails>
              <ProjectDetailsTitle>Project Date</ProjectDetailsTitle>
              <ProjectDetailsDescription>{project.frontmatter.date}</ProjectDetailsDescription>
            </ProjectDetails>
          )}
          {project.frontmatter.category && (
            <ProjectDetails>
              <ProjectDetailsTitle>Category</ProjectDetailsTitle>
              <ProjectDetailsDescription>{project.frontmatter.category}</ProjectDetailsDescription>
            </ProjectDetails>
          )}
          
          {project.frontmatter.sharebuttons && (
            <ProjectDetails>
              <ProjectDetailsTitle>Share This</ProjectDetailsTitle>
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${url}${slug}`,
                    title,
                    image,
                  },
                }}
              />
            </ProjectDetails>
          )}

          {project.frontmatter.projectLink && (
            <ProjectDetails className="ml-auto align-items-lg-end">
              <ViewProject rel="noopener noreferrer" target="_blank" href={project.frontmatter.projectLink}>VIEW PROJECT</ViewProject>
            </ProjectDetails>
          )}
        </div>
        <div className="mt-4 mt-lg-5 pt-4">
          {/* <Img className="img-fluid" sizes={project.frontmatter.featuredImage.childImageSharp.sizes} /> */}
          <img className="img-fluid" src={project.frontmatter.featuredImage.childImageSharp.sizes.originalImg} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        twitterHandle
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        client
        date
        category
        sharebuttons
        projectLink
        featuredImage {
          childImageSharp {
            sizes(quality: 100) {
              originalImg
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;