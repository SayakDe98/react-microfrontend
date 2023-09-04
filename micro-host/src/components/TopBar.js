import React from 'react'

const TopBar = ({ backgroundColor, color, fontSize, children }) => {
  return (
    <div style={{ backgroundColor, color, fontSize }}>{children}</div>
  )
}

export default TopBar