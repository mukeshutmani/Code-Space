import React, { Children } from 'react'

function Logo( {children}) {
  return (
    <div className={`${children}`}>Logo</div>
  ) 
}

export default Logo