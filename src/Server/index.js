const http = require('http')
const routes = require('../../routes')

const server = http.createServer((req, res) => {
    routes.call(req, res)
})

module.exports = server
