import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, occupation, lang, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultOccupation,
    siteUrl,
    defaultImage,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    occupation: occupation || defaultOccupation,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet 
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.defaultTitle}`}
    >
      <meta name="description" content={seo.occupation} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.occupation && (
        <meta property="og:description" content={seo.occupation} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.occupation && (
        <meta name="twitter:description" content={seo.occupation} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  occupation: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  lang: `en`,
  title: null,
  occupation: null,
  image: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultOccupation: occupation
        siteUrl: url
        defaultImage: image
      }
    }
  }
`