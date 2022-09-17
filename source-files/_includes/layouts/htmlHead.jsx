import React from "react"

const HtmlHead = ({title}) => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{ title }</title>
      <link
        rel="icon"
        type="image/png"
        href="/images/quill_pen_feather-rose_64x64.png"
      />
      <link rel="stylesheet" href="/style/style.css" />
      <script type="module" src="/js/main.js"></script>
    </head>
  </>
)

export default HtmlHead
