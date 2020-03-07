class Heandler{
    constructor() {
        this.routes = []
    }

    addRoute(uri, callback, method) {
        if (!(uri || callback || method)) throw new Error('Uri, callback and method must be given')

        if (typeof uri !== 'string') throw new TypeError('The URI must be a string')
        if (typeof callback !== 'function') throw TypeError('The callback must be a function')

        this.routes.forEach( route => {
            if (route.uri === uri && route.method === method) throw new Error(`The route ${method}: ${route.uri} already exists`)
        })

        const route = {
            method,
            uri,
            callback,
        }

        this.routes.push(route)
    }

    payload(req, res) {
        this.routes.some( route => {
            if (req.url === route.uri && req.method.toLowerCase() === route.method) {
                return route.callback.call({}, req, res)
            }
        })

        return res.end('Route not found!')
    }
}

module.exports = new Heandler
