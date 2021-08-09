import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

function SEO({ description, lang, meta, title, pathname }) {
  const { site, metaImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            seoTitle
            description
            author
            keywords
            siteUrl
          }
        }
        metaImage: file(relativePath: { eq: "social_card_preview.png" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;
  const image =
    metaImage && metaImage.childImageSharp.resize.src
      ? `${metaImage.childImageSharp.resize.src}`
      : null;

  const seoTitle = site.siteMetadata.seoTitle;
  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: metaImage.childImageSharp.resize.width,
                },
                {
                  property: 'og:image:height',
                  content: metaImage.childImageSharp.resize.height,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ],
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};
export default SEO;
