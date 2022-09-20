import React from "react"

/*
References:
- https://ogp.me/
- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- https://developers.google.com/search/docs/crawling-indexing/special-tags
- Good examples and tester: https://opengraph.dev/panel?url=https%3A%2F%2Fopengraph.dev
*/

//TODO: also support override page properties like seo.og.title https://github.com/seancdavis/twenty-ninety#seo
const SeoMetadata = ({ title, description, image, page, site }) => {
  let ogUrl = null
  if (page && page.url) {
    ogUrl = <meta property="og:url" content={site.baseUrl + page.url} />
  }

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || site.defaultTitle} />
      <DescriptionTags {...{ description, site }} />
      {ogUrl}
      <ImageTags {...{ image, site }} />
    </>
  )
}

const DescriptionTags = ({ description, site }) => {
  // opengraph: https://ogp.me/#optional
  // google gets description: https://developers.google.com/search/docs/crawling-indexing/special-tags
  description = description || (site ? site.defaultDescription : "")

  if (description) {
    return (
      <>
        <meta
          property="og:description"
          content={description || site.defaultDescription}
        />
        <meta
          property="description"
          content={description || site.defaultDescription}
        />
      </>
    )
  } else {
    return <></>
  }
}

function isRelative(urlToTest) {
  const parsed = new URL(urlToTest, baseUrl.origin)
  const baseUrl = new URL("https://example.com")
  return baseUrl.origin === parsed.origin
}

const ImageTags = ({ image, site }) => {
  let isRelativeUrl = false
  try {
    isRelativeUrl = image && isRelative(image)
  } catch (err) {
    console.error(`image url '${image}' is not a valid url.`)
    isRelativeUrl = false
  }
  if (isRelativeUrl) {
    image = site.baseUrl + image
  } else {
    image = site.baseUrl + "/images/pingpoet-seo-banner.png"
  }

  return <meta property="og:image" content={image} />
}

export default SeoMetadata
