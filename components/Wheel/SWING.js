import React from 'react'

import { SVG, Path } from './../SVG'
import { coordinates, spinner } from './../../utils'

function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 

export const Colors = ({ slices, spinning }) => {

  // const percent = Number((1 / slices.length * 100).toFixed(1))

  const percent = percentage(1, slices.length)

  let cumulativePercent = 0;
  return <g>
    <SVG viewBox='-1 -1 2 2' className={spinner(spinning)} style={{ transform: 'rotate(-90deg)' }}>
      {
        slices.map(({ color }, id) => {
          
          const [startX, startY] = coordinates(0)
  
          cumulativePercent += percent;
          
          console.log(percent)

          const [endX, endY] = coordinates(cumulativePercent)


          const largeArcFlag = percent > .5 ? 1 : 0;

          // const draws = `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0`

          const draws = [
            `M ${startX} ${startY}`, // Move
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
            `L 0 0`, // Line
          ].join(' ');


          return <Path key={id} draws={draws} fill={color} opacity={0.2} />
        })
      }
    </SVG>
  </g>
}

export default Colors



  // return <g className={spinner(spinning)} style={{ transformOrigin: 'center' }}>
  //   <Path id="_1" draws="M365,365V35.9A328.1,328.1,0,0,0,200.5,80Z" transform="translate(0)" />
  //   <Path id="_2" draws="M365,365,529.5,80A328.1,328.1,0,0,0,365,35.9Z" transform="translate(0)" />
  //   <Path id="_3" draws="M365,365,650,200.5A328.5,328.5,0,0,0,529.5,80Z" transform="translate(0)" />
  //   <Path id="_4" draws="M365,365H694.1A328.1,328.1,0,0,0,650,200.5Z" transform="translate(0)" />
  //   <Path id="_5" draws="M365,365,650,529.5A328.1,328.1,0,0,0,694.1,365Z" transform="translate(0)" />
  //   <Path id="_6" draws="M365,365,529.5,650A328.5,328.5,0,0,0,650,529.5Z" transform="translate(0)" />
  //   <Path id="_7" draws="M365,365V694.1A328.1,328.1,0,0,0,529.5,650Z" transform="translate(0)" />
  //   <Path id="_8" draws="M365,365,200.5,650A328.1,328.1,0,0,0,365,694.1Z" transform="translate(0)" />
  //   <Path id="_9" draws="M365,365,80,529.5A328.5,328.5,0,0,0,200.5,650Z" transform="translate(0)" />
  //   <Path id="_10" draws="M365,365H35.9A328.1,328.1,0,0,0,80,529.5Z" transform="translate(0)" />
  //   <Path id="_11" draws="M365,365,80,200.5A328.1,328.1,0,0,0,35.9,365Z" transform="translate(0)" />
  //   <Path id="_12" draws="M365,365,200.5,80A328.5,328.5,0,0,0,80,200.5Z" transform="translate(0)" />
  // </g>