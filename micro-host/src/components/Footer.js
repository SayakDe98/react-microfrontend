//This is a reusable footer which can be imported in second app as well.
import React from 'react'

const Footer = ({ children, fontSize, backgroundColor, color }) => {
  return (
    <div style={{
        margin: "0 auto",
        fontSize,
        fontWeight: "bold",
        textAlign: "initial",
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor,
        color
    }}>{children}</div>
  )
}

export default Footer