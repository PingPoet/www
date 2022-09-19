import React from "react"

const SiteFooter = ({ page }) => (
  <footer className="pt-5 my-5 text-muted border-top">
    <ul className="nav justify-content-evenly">
      <li className="navbar-text">
        Ping Poet Products, LLC. &middot; &copy; 2022
      </li>
      <li className="nav-item">
        <a
          href={`https://github.com/pingpoet/www/edit/main/${page.inputPath}`}
          target="_blank"
          className="nav-link text-muted"
        >
          See something wrong? Suggest an edit!
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="/policy/terms">
          Terms of Service
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="/policy/privacy">
          Privacy &amp; Cookies
        </a>
      </li>
    </ul>
  </footer>
)
export default SiteFooter
