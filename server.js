const { Console } = require('console')

var aedes = require('aedes')()
var server = require('net').createServer(aedes.handle)
var port = process.env.PORT || 1883

server.listen(port, function () {
  console.log('server listening on port', port)
})

