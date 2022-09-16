import React from "react"

export const Card = ({ heading, children }) => (
  <div className="col-md-6">
    <h2>{heading}</h2>
    {children}
  </div>
)
