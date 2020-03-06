const routes = require('./src/Router')

routes.get('/home/teste', (req, res) => {
    res.end('Hello, world!')
})

module.exports = routes
