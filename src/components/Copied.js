import React from 'react'
import { getContrastYIO } from '../Helpers'

export default function Copied({color}) {
  return (
    <div className='copied' style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIO(color)}` }}>
        Copied to #{color} Clipboard! 
    </div>
  )
}
