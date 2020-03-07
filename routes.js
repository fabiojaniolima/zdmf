const routes = require('./src/Router')

routes.get('/home', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello, world!' }))
})

routes.post('/home', (req, res) => {
    res.end('Hello, world!')
})

module.exports = routes
