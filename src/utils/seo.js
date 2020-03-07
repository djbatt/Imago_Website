import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="Source"
      titleTemplate={`${title}`}
      meta={[
        {
          name: `description`,
          content:
            metaDescription,
        },
        {
          property: `og:title`,
          content: "Source",
        },
        {
          property: `og:description`,
          content:
            "Source is located in Richmond, VA. Experts in search engine optimization and websites. A Source website can increase traffic and drive sales. Therefore, increasing ROI. We care because your customers deserve the best.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:url`,
          content: `https://sourcerva.com`,
        },
        {
          property: `og:site_name`,
          content: `Source`,
        },
        {
          property: `og:title`,
          content: `Source RVA | Development | Richmond, VA Websites`,
        },
        {
          property: "robots",
          content:
            "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@sourcerva",
        },
        {
          name: `twitter:title`,
          content: "Source RVA | Development | Richmond, VA Websites",
        },
        {
          name: `twitter:description`,
          content:
            "Source is located in Richmond, VA. Experts in search engine optimization and websites. A Source website can increase traffic and drive sales. Therefore, increasing ROI. We care because your customers deserve the best.",
        },
        {
          name: `twitter:site`,
          content: "@sourcerva",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
