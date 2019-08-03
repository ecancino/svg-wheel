import Frisbee from 'frisbee'
import { prop, map, flatten } from 'ramda'
import { tint } from 'chromath'

import { sampleSize, rand } from './../utils'

const identifier = '5c40d61705d34b26f20c67a5'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
}

export const frisbee = new Frisbee({
  baseURI: `https://api.jsonbin.io/b/${identifier}`,
  headers,
  mode: 'no-cors',
  responseType: 'json',
  responseEncoding: 'utf8',
  withCredentials: true,
  credentials: 'same-origin',
});

// const prep = map(({ quality, color, virtues }) => ({ title: quality, color, value: 1 }))


const choose = map(({ quality, color, virtues }) => 
  sampleSize(virtues, 2).map(
    virtue => ({ title: virtue, quality, color, value: 1 })
  )
)

const request = version => frisbee.get(`/${version}`).then(prop('body')).then(choose).then(flatten)
  .then(s => {
    console.dir(s)
    return s
  })

export default () => request(1)