const heandler = require('./heandler')

class Router {
    get(uri, callback) {
        heandler.addRoute(uri, callback, 'get')
    }

    post(uri, callback) {
        heandler.addRoute(uri, callback, 'post')
    }

    call(req, res) {
        heandler.payload(req, res)
    }
}

module.exports = new Router
