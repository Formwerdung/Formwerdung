import React, { FunctionComponent } from 'react'

import '../assets/css/ibm-plex.css'

export const Layout: FunctionComponent = ({ children }) => {
  return <div className="bg-gray-100">{children}</div>
}
