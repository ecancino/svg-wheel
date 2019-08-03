import React from 'react'

import { Circle, Rect, Path } from './../SVG'
import { spinner } from './../styles'

// className={spinner(spinning)}

export const Rim = ({ spinning, children, width = '24.3', height = '9.27', color = 'white' }) => <>
  <Circle radius={347.6} fill={color} />
  <g>
    <Rect x={360.4} width={height} height={width} fill={color} />
    <Rect x={352.8} y={713.2} width={width} height={height} fill={color} transform="translate(1082.8 352.8) rotate(90)" />
    <Rect x={176.4} y={54.8} width={width} height={height} fill={color} transform="translate(145.8 -133.6) rotate(60)" />
    <Rect x={529.2} y={665.9} width={width} height={height} fill={color} transform="translate(851.4 -133.6) rotate(60)" />
    <Rect x={47.3} y={183.9} width={width} height={height} fill={color} transform="translate(102.3 -4.5) rotate(30)" />
    <Rect x={658.4} y={536.8} width={width} height={height} fill={color} transform="translate(360.5 -262.7) rotate(30)" />
    <Rect y={360.4} width={width} height={height} fill={color} />
    <Rect x={705.7} y={360.4} width={width} height={height} fill={color} />
    <Rect x={47.3} y={536.8} width={width} height={height} fill={color} transform="translate(-262.7 102.3) rotate(-30)" />
    <Rect x={658.4} y={183.9} width={width} height={height} fill={color} transform="translate(-4.5 360.5) rotate(-30)" />
    <Rect x={176.4} y={665.9} width={width} height={height} fill={color} transform="translate(-486.4 498.6) rotate(-60)" />
    <Rect x={529.2} y={54.8} width={width} height={height} fill={color} transform="translate(219.2 498.6) rotate(-60)" />
  </g>
  {children}
  <g opacity={0.15}>
    <Path draws="M46.9,372.5c0-181.7,147.4-329,329.1-329A327.3,327.3,0,0,1,556.3,97.2,327.3,327.3,0,0,0,365,35.9C183.3,35.9,35.9,183.3,35.9,365c0,115.2,59.2,216.5,148.8,275.3C101.3,580.6,46.9,482.9,46.9,372.5Z" transform="translate(0)" />
  </g>
</>

export default Rim