import React from 'react'

import { Circle } from './../SVG'

import Axle from './Axle'

const Hubcap = ({ color }) => <Circle radius={54.5} fill={color} />
const Shadow = () => <Circle cx={368.5} cy={368.5} radius={54.5} />

export const Spindle = () => <g>
  <g opacity={0.2}><Shadow /></g>
  <g><Hubcap color='#fff' /></g>
  <Axle />
</g>

export default Spindle