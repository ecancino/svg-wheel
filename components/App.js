import React, { Component } from 'react'

import { getVirtues } from './../api'
import { sleep } from './../utils'

const toVirtue = ({ color, virtues }) => virtues.map(virtue => ({
  title: virtue.virtue,
  color,
  value: 10
}))

const toVirtues = qualities => {
  const x = qualities
    .reduce((acc, quality) => acc.concat(toVirtue(quality)), [])
    .sort((a, b) => {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })

  console.log(x)

  x.length = 5
  return x
}

import Wheel from './Wheel'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinning: false,
      virtues: []
    }
  }

  componentDidMount() {
    getVirtues().then(qualities => this.setState({ virtues: toVirtues(qualities) }))
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

