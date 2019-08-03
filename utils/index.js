import { compose } from 'ramda'

export * from './styles'

const { from } = Array
const { floor, random } = Math

const of = length => from({ length })
const sample = ary => ary[rand(0, ary.length - 1)]

export const rand = (lower, upper) => (lower + floor(random() * (upper - lower)))
export const sampleSize = (collection, n = 1) => of(n).map(() => sample(collection))

export const sleep = (callback, min = 800, max = 1600) => 
  setTimeout(callback, rand(min, max))