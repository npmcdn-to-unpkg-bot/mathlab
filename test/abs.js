
import assert from 'assert'
import should from 'should'
import { abs, Complex, Sparse } from '../lib'

const c1 = new Complex([1,2], [1,2])
describe('abs', () => {
  it('num & arr', () => {
    abs(1).should.equal(Math.abs(1))
    abs([1, 2]).should.deepEqual([Math.abs(1), Math.abs(2)])
    abs([[1,2],[1,3]]).should.deepEqual([ [Math.abs(1), Math.abs(2)], [Math.abs(1), Math.abs(3)] ])
  })

  it('Complex', () => {
    abs(new Complex(-1)).re.should.approximately(1, 0.01)
    // {x: [ 2.236, 2.828], y: }
    abs(new Complex([1, 2], [2, 2])).re[0].should.approximately(2.236, 0.01)
  })

  it('Sparse', () => {
    abs(new Sparse([[1,0],[-2,1]])).toFull().should.deepEqual([[1,0],[2,1]])
    // throw abs(new Sparse([[1,0],[-2,1]]))
  })
})
