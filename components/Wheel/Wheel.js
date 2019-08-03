import React from 'react';
import classNames from 'classnames';

import { SVG } from './../SVG'

import Spindle from './Spindle'
import Rim from './Rim'
import Colors from './Colors'
import Flapper from './Flapper'

export default ({ slices, spinning }) =>
  <SVG viewBox='0 0 730 730' width={400}>
    <g className="wheel">
      <Rim spinning={spinning}>
        <Colors slices={slices} spinning={spinning} />
      </Rim>
      <Spindle />
    </g>
    <g className="flapper">
      <Flapper />
    </g>
  </SVG>


