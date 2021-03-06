import fs from 'fs'

const mathFuns = [
  'abs', 'acos', 'asin', 'atan',
  'ceil', 'cos', 'exp', 'floor',
  'log', 'round', 'sin', 'sqrt', 'tan'
]

// src
mathFuns.forEach(fun => {
  const src = `
import pointwise from './pointwise'

/**
 * Pointwise Math.${fun}(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ${fun}(1)
 * // returns Math.${fun}(1)
 * ${fun}([1, 2])
 * // returns [Math.${fun}(1), Math.${fun}(2)]
 * ${fun}([[1,2],[1,3]])
 * // returns [ [Math.${fun}(1), Math.${fun}(2)], [Math.${fun}(1), Math.${fun}(3)] ]
 */
export default function (m) {
  return pointwise(Math.${fun})(m)
}
`

  const test = `
import assert from 'assert'
import should from 'should'
import { ${fun} } from '../lib'

describe('${fun}', () => {
  it('', () => {
    ${fun}(1).should.equal(Math.${fun}(1))
    ${fun}([1, 2]).should.deepEqual([Math.${fun}(1), Math.${fun}(2)])
    ${fun}([[1,2],[1,3]]).should.deepEqual([ [Math.${fun}(1), Math.${fun}(2)], [Math.${fun}(1), Math.${fun}(3)] ])
  })
})
`

  fs.writeFileSync(`./src/${fun}.js`, src)
  fs.writeFileSync(`./test/${fun}.js`, test)
})