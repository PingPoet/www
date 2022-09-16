import React from "react"

const Card = ({ heading, children }) => (
  <div className="col-md-6">
    <h2>{heading}</h2>
    {children}
  </div>
)

export default Card
