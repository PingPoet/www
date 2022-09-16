import React from "react"

const Head = ({ title }) => (
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <link rel="stylesheet" href="style/style.css" />
    <script type="module" src="js/main.js"></script>
  </head>
)

export default Head
