import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from "../components/seo";
import Share from '../components/Share';
import { Link } from 'gatsby';

const ProjectTitle = styled.h1`
  color: #000;
  font-size: 29px;
  font-weight: 500;
  @media(max-width: 575.98px) {
    font-size: 25px;
  }
`;

const ProjectDescription = styled.div`
  margin-top: 25px;
  color: #484848;
  font-size: 15px;
  font-weight: 300;
  line-height: 29px;
  h2 {
    text-align: center;
    @media (max-width: 767.98px) {
      font-size: 25px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
    @media (max-width: 767.98px) {
      font-size: 18px;
    }
  }
  h4 {
    font-weight: 400;
    @media (max-width: 767.98px) {
      font-size: 18px;
    }
  }
  p {
    margin: 5px 0;
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  @media(max-width: 991.98px) {
    width: 100%;
    margin: 15px 0;
  }
  a {
    color: #000;
    &:hover {
      color: #000;
    }
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

const ItemPagination = styled(Link)`
  font-size: 28px;
  color: #000;
  &:hover {
    color: #000;
    text-decoration: none;
  }
  @media(max-width: 992.98px) {
    font-size: 22px;
  }
  @media(max-width: 767.98px) {
    span {
      display: none;
    }
  }
`;

export default ({ data, pageContext }) => {
  const project = data.markdownRemark;
  const image = project.frontmatter.featuredImage.childImageSharp.sizes.originalImg;
  const { next, previous } = pageContext;

  const {
		markdownRemark: {
			frontmatter: { title },
			fields: { slug }
		},
		site: {
			siteMetadata: { url, twitterHandle },
		},
	} = data;

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <div>
        <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
        {project.frontmatter.description && (
          <ProjectDescription>{project.frontmatter.description}</ProjectDescription>
        )}
        <div className="project-details mt-4 mt-lg-5 d-flex flex-wrap align-items-center">
          {project.frontmatter.client && (
            <ProjectDetails>
              <ProjectDetailsTitle>Client</ProjectDetailsTitle>
              {project.frontmatter.clientWebsite ? 
                <a rel="noopener noreferrer" target="_blank" href={project.frontmatter.clientWebsite}>
                  <ProjectDetailsDescription>{project.frontmatter.client}</ProjectDetailsDescription>
                </a>
                : <ProjectDetailsDescription>{project.frontmatter.client}</ProjectDetailsDescription>
              }
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
        <div className="my-4 my-lg-5 pt-4">
          <a href={project.frontmatter.featuredImage.childImageSharp.sizes.originalImg} target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={project.frontmatter.featuredImage.childImageSharp.sizes.originalImg} alt="" />
          </a>
        </div>

        <ProjectDescription dangerouslySetInnerHTML={{ __html: project.html }}></ProjectDescription>
        
        <div className={`d-flex ${previous ? "justify-content-between" : "justify-content-end"} mt-5`}>
          { previous && (
            <ItemPagination className="d-flex align-items-center" to={previous.fields.slug}>
              <div className="d-flex align-items-center mr-4">
                <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 28C11.1945 28 11.3612 27.9089 11.5 27.7266C11.5556 27.6719 11.5973 27.6081 11.625 27.5352C11.6528 27.4622 11.6737 27.3848 11.6875 27.3027C11.7014 27.2207 11.7084 27.1387 11.7084 27.0566C11.7084 26.9746 11.7014 26.8971 11.6875 26.8242C11.6737 26.7513 11.6528 26.6784 11.625 26.6055C11.5973 26.5326 11.5556 26.4596 11.5 26.3867L2.00004 13.918L11.375 1.61328C11.4584 1.50391 11.5174 1.36719 11.5521 1.20312C11.5868 1.03906 11.5868 0.875 11.5521 0.710938C11.5174 0.546875 11.4584 0.410156 11.375 0.300781C11.2362 0.11849 11.066 0.0273438 10.8646 0.0273438C10.6632 0.0273438 10.4931 0.11849 10.3542 0.300781L0.479207 13.2617C0.340318 13.444 0.270874 13.6628 0.270874 13.918C0.270874 14.1732 0.340318 14.3919 0.479207 14.5742L10.5 27.7266C10.6389 27.9089 10.8056 28 11 28Z" fill="black"/></svg>
              </div>
              <span>{previous.frontmatter.title}</span>
            </ItemPagination>
          )}
          { next && (
            <ItemPagination className="d-flex align-items-center" to={next.fields.slug}>
              <span>{next.frontmatter.title}</span>
              <div className="d-flex align-items-center ml-4">
                <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00008 28C0.805636 28 0.63897 27.9089 0.500081 27.7266C0.444526 27.6719 0.402859 27.6081 0.375081 27.5352C0.347303 27.4622 0.32647 27.3848 0.312581 27.3027C0.298692 27.2207 0.291748 27.1387 0.291748 27.0566C0.291748 26.9746 0.298692 26.8971 0.312581 26.8242C0.32647 26.7513 0.347303 26.6784 0.375081 26.6055C0.402859 26.5326 0.444526 26.4596 0.500081 26.3867L10.0001 13.918L0.625081 1.61328C0.541748 1.50391 0.48272 1.36719 0.447998 1.20312C0.413276 1.03906 0.413276 0.875 0.447998 0.710938C0.48272 0.546875 0.541748 0.410156 0.625081 0.300781C0.76397 0.11849 0.934109 0.0273438 1.1355 0.0273438C1.33689 0.0273438 1.50703 0.11849 1.64591 0.300781L11.5209 13.2617C11.6598 13.444 11.7292 13.6628 11.7292 13.918C11.7292 14.1732 11.6598 14.3919 11.5209 14.5742L1.50008 27.7266C1.36119 27.9089 1.19453 28 1.00008 28Z" fill="black"/></svg>
              </div>
            </ItemPagination>
          )}
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
        description
        client
        clientWebsite
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