import React from "react"

const SiteHeader = () => (
  <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center text-dark text-decoration-none"
    >
      <img
        src="/images/quill_pen_feather-rose.svg"
        width="40"
        height="32"
        className="me-2"
      />

      <h1 className="fs-4">Ping Poet Products</h1>
    </a>
  </header>
)

export default SiteHeader
