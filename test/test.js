var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('cricket', function () {
  var cricket = require('../')

  it('interface', function () {
    cricket.should.have.interface({
      makeHashFn: Function
    })
  })

  describe('.makeHashFn', function () {

    it('builds hash functions', function () {

      var user1 = {
        _id: 1,
        name: 'bob',
        identifyingMarks: [
          'tattoo on left side',
          '6th finger on right hand',
          'lazy eye'
        ]
      }

      var user2 = {
        _id: 2,
        name: 'bob',
        identifyingMarks: [
          'tattoo on left side',
          '6th finger on right hand',
          'lazy eye'
        ]
      }

      var hashUser = cricket.makeHashFn(function (hash) {
        hash.add(this.name)
        hash.unordered(this.identifyingMarks)
      })


      hashUser(user1).should.equal(hashUser(user2))



    })


  })


})