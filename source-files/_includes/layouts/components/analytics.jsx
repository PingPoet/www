import React from "react"

export const AnalyticsEmbed = () => (
  <>
    {/* "Add the JS Snippet below before the ending body tag on any of your HTML pages." */}
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "6b0361fcbfc8470e9ee5423861c12925"}'
    ></script>
  </>
)
