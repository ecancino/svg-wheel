import React, { Component } from 'react'

import api from './../api'
import { sleep } from './../utils'

import Wheel from './Wheel'

const random = (lower, upper) =>(lower + Math.floor(Math.random() * (upper - lower + 1)))

function shuffle(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = random(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinning: false,
      virtues: []
    }
  }

  componentDidMount() {
    api().then(virtues => this.setState({ virtues: shuffle(virtues) }))
  }

  spin = () => {
    this.setState({ spinning: true },
      () => sleep(() => this.setState({ spinning: false }))
    )
  }

  render() {
    return (
      <>
        <div className='w-100 m-2 d-flex justify-content-center'>
          <Wheel slices={this.state.virtues} spinning={this.state.spinning} />
        </div>
        <footer>
          <button className='btn btn-dark' onClick={this.spin}>Spin</button>
        </footer>
      </>
    );
  }
}

