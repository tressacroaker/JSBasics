/*global
describe, it
*/

var basics = require('../basics')
const chai = require('chai')
console.log('basics', basics)
var expect = chai.expect
describe('Basic JS Exercises', function () {
  describe('Array Exercise 1', function () {
    it('should be an array of length 5', function () {
      expect(basics.arr.length).to.eql(5)
    })
    it('should have the values 12, 42, 36, 51, 96', function () {
      expect(basics.arr[0]).to.eql(12)
      expect(basics.arr[1]).to.eql(42)
      expect(basics.arr[2]).to.eql(36)
      expect(basics.arr[3]).to.eql(51)
      expect(basics.arr[4]).to.eql(96)
    })
  })

  describe('Array Exercise 2 - findTwo', function () {
    it('should return the second number of an array', function () {
      var arr = [1, 2, 3]
      expect(basics.findTwo(arr)).to.eql(3)
    })
  })

  describe('Array Exercise 3 - Pusher', function () {
    it('should add a number to the end of an array', function () {
      var arr = [1, 2, 3]
      var pushedArray = basics.pusher(arr, 4)
      expect(pushedArray.length).to.eql(4)
      expect(pushedArray[3]).to.eql(4)
    })
  })

  describe('Array Exercise 4 - upFront', function () {
    it('should add a number to the beginning of an array', function () {
      var arr = [1, 2, 3]
      var upFrontArray = basics.upFront(arr, 4)
      expect(upFrontArray.length).to.eql(4)
      expect(upFrontArray[0]).to.eql(4)
    })
  })

  describe('Array Exercise 5 - remover', function () {
    it('should remove a number from the beginning of an array', function () {
      var arr = [1, 2, 3]
      var removedArray = basics.remover(arr)
      expect(removedArray.length).to.eql(2)
      expect(removedArray[0]).to.eql(1)
      expect(removedArray[1]).to.eql(2)
    })
  })

  describe('Array Exercise 6 - Copycat', function () {
    it('should copy the 2nd and 3rd index', function () {
      var arr = [1, 2, 3, 4]
      var copycatArray = basics.copyCat(arr)
      expect(copycatArray.length).to.eql(2)
      expect(copycatArray[0]).to.eql(3)
      expect(copycatArray[1]).to.eql(4)
    })
  })

  describe('Array Exercise 7 - chopIt', function () {
    it('should insert the two numbers into the array after the second index value and delete the third index value', function () {
      var arr = [1,2,3,4,5]
      var chopItArr = basics.chopIt(arr, 6, 7)
      expect(chopItArr.length).to.eql(5)
      expect(chopItArr[3]).to.eql(6)
      expect(chopItArr[4]).to.eql(7)
      expect(chopItArr[5]).to.eql(5)
    })
  })

  describe('Array Exercise 8 - sumIt', function () {
    it('should sum the values in an array of numbers', function () {
      var arr = [1, 2, 3]
      var sum = basics.sumIt(arr)
      expect(sum, '1,2 and 3 should sum to 6').to.eql(6)
    })
  })

  describe('Array Exercise 9 - evenOdd', function () {
    it('Should return an array where even numbers correspond to even and odd to odd', function () {
      var arr = [1, 2, 3]
      var evenOddArr = basics.evenOdd(arr)
      expect(evenOddArr.length).to.eql(3)
      expect(evenOddArr[0]).to.eql('odd')
      expect(evenOddArr[1]).to.eql('even')
      expect(evenOddArr[2]).to.eql('odd')
    })
  })

  describe('Array Exercise 10 - timesTen', function () {
    it('', function () {
      var arr = [1, 2, 3]
      var timesTenArr = basics.timesTen(arr)
      expect(timesTenArr.length).to.eql(3)
      expect(timesTenArr[0]).to.eql(10)
      expect(timesTenArr[1]).to.eql(20)
      expect(timesTenArr[2]).to.eql(30)
    })
  })

  describe('Object Exercise 1 - animal', function () {
    it('Should have the appropriate keys', function () {
      expect(basics.animal.species).to.be.ok()
      expect(basics.animal.name).to.be.ok()
      expect(basics.animal.age).to.be.ok()
      expect(basics.animal.gender).to.be.ok()
      expect(basics.animal.favoriteFood).to.be.ok()
    })
    it('should have a speech method that returns a string', function () {
      expect(basics.animal.speech()).to.be.a('string')
    })
  })

  describe('Object Exercise 2 - findAge', function () {
    it('', function () {
      var age = basics.findAge({age: 10})
      expect(age).to.eql(10)
    })
  })

  describe('Object Exercise 3 - getKeys', function () {
    it('should return an array of all of the keys', function () {
      var keys = basics.getKeys({ a: 10, b: 5, c: 6 })
      expect(keys).to.have.lengthOf(3)
    })
  })

  describe('Object Exercise 4 - changeName', function () {
    it('should change the name of an object', function () {
      var obj = {name: 'Tom'}
      basics.changeName(obj, 'Larry')
      expect(obj.name).to.eql('Larry')
    })
  })

  describe('Object Exercise 5 - speechMaker', function () {
    it('should return the result of a speech function', function () {
      var speech = basics.speechMaker({ speech: function () { return 'hello' } })
      expect(speech).to.eql('hello')
    })
  })

  describe('Object Exercise 6 - addKey', function () {
    it('should add a bedtime key to an object and assign it a value', function () {
      var obj = {}
      basics.addKey(obj)
      expect(obj.bedtime).to.not.eql(undefined)
    })
  })

  describe('Object Exercise 7 - keyLoop', function () {
    it("should report if there's a monkey key in the object", function () {
      var obj = { monkey: true }
      expect(basics.keyLoop(obj)).to.eql("There's a monkey!")
    })
    it("should report if there's not a monkey key in the object", function () {
      var obj = { notMonkey: true }
      expect(basics.keyLoop(obj)).to.eql("There's no monkey here!")
    })
  })

  describe('Intermediate Exercise 1 - cars', function () {
    it('', function () {})
  })

  describe('Intermediate Exercise 2 - findModels', function () {
    it('', function () {})
  })
})
