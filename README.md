# cricket
composite hashing

wip - consider this a preview

## usage

    var cricket = require('cricket')
    var hashUser = cricket.makeHashFn(function (hash) {
      hash.add(this.name)
      hash.unordered(this.identifyingMarks)
    })
    // => Function

    hashUser({
      _id: 1,
      name: 'bob',
      identifyingMarks: [
        'tattoo on left side',
        '6th finger on right hand',
        'lazy eye'
      ]
    })
    // => '2aecc31c'

## api

### `cricket.makeHashFn(map) => (Object) => hash: String`

## installation

    $ npm install cricket


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md
