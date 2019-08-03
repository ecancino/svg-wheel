import React from 'react'
import PieChart from 'react-svg-piechart'

import { SVG, Path } from './../SVG'
import { spinner } from './../../utils'

export const Colors = ({ slices = [], spinning }) => {
  return <g className={spinner(spinning)} style={{ transformOrigin: 'center' }}>
    <PieChart viewBoxSize={10} data={slices} strokeColor='' />
  </g>
}

export default Colors