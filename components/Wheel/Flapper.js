import React from 'react'

import { Path, Circle } from './../SVG'
import { spinner } from './../../utils'

import Axle from './Axle'

const Shadow = () => <Path draws="M707,160.5c-11.4-17.9-35.8-22.8-54.5-11a41.7,41.7,0,0,0-13.6,14.1l-33.6,58.9a2.3,2.3,0,0,0,0,2.4,2.4,2.4,0,0,0,2.3,1.1l67.5-5.1a43.8,43.8,0,0,0,18.6-6.3C712.4,202.7,718.3,178.5,707,160.5Z" transform="translate(0)" fillOpacity="0.22" />

const Flap = ({ spinning }) =>
  <Path draws="M711.9,157.4a38.4,38.4,0,0,0-66,1.8l-31.5,57.5a2.1,2.1,0,0,0,0,2.4,2.6,2.6,0,0,0,2.2,1.2l65.6-3.9a39.6,39.6,0,0,0,17.9-5.9A38.5,38.5,0,0,0,711.9,157.4Z" fill='#fff' transform="translate(0)" className={spinner(spinning)} />

export const Flapper = ({ spinning }) => <g>
  <Shadow />
  <Flap spinning={spinning} />
  <Axle cx={680} cy={177} />
</g>

export default Flapper
