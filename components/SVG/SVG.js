import React from 'react'

export const SVG = ({ width = '100%', height = '100%', viewBox, children, ...other }) => 
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...other}>
    {children}
  </svg>

export const Circle = ({ radius, ...other }) => <circle cx={365} cy={365} r={radius} {...other} />

export const Rect = ({ rx = 4, ry = 4, ...other }) => <rect rx={rx} ry={ry} {...other} />

export const Path = ({ draws, ...other }) => <path d={draws} {...other} />
