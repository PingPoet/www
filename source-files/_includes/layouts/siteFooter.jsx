import React from "react"

const SiteFooter = ({page}) => (
  <footer className="pt-5 my-5 text-muted border-top">
    <span className="me-2">Ping Poet Products, LLC. &middot; &copy; 2022</span>
    <a href={`https://github.com/pingpoet/www/edit/main/${page.inputPath}`} target="_blank" className="text-muted">See something wrong? Suggest an edit!</a>
  </footer>
)
export default SiteFooter
