
import assert from 'assert'
import should from 'should'
import { bxor, Sparse } from '../lib'

describe('bxor', () => {
  it('arr', () => {
    bxor(1, 2).should.equal(1 ^ 2)
    bxor([1, 2], [2, 2]).should.deepEqual([1 ^ 2, 2 ^ 2])
    bxor([[2,1], [1,2]], [[2, 2], [2, 2]])
      .should.deepEqual(
        [ [2 ^ 2, 1 ^ 2], [1 ^ 2, 2 ^ 2] ]
      )
  })

  it('Sparse', () => {
    const a = new Sparse([[1,2,0],[0,3,0],[0,0,5]])
    const b = new Sparse([[2,9,0],[0,4,0],[-2,0,0]])

    bxor(a, b).val.should.deepEqual( [ 3, -2, 11, 7, 5])
  })
})
