import React from 'react'
import PieChart from 'react-svg-piechart'

import { SVG, Path } from './../SVG'
import { spinner } from './../../utils'

export const Colors = ({ slices = [], spinning }) => {
  return <g className={spinner(spinning)} style={{ transformOrigin: 'center' }}>
    <PieChart viewBoxSize={10}
      data={slices}
      strokeColor=''
      rounded
      lineWidth={20}
      paddingAngle={18}
      label
      labelPosition={60}
      labelStyle={{
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#000000',
        color: '#000000'
      }}
    />
  </g>
}

export default Colors