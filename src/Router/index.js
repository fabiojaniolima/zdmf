class Router {
    constructor() {
        this.routes = []
    }

    get(uri, callback) {
        if (!(uri || callback)) throw new Error('Uri and callback must be given')

        if (typeof uri !== 'string') throw new TypeError('The URI must be a string')
        if (typeof callback !== 'function') throw TypeError('The callback must be a function')

        this.routes.forEach( route => {
            if (route.uri === uri) throw new Error(`The uri ${route.uri} already exists`)
        })

        const route = {
            method: 'get',
            uri,
            callback,
        }

        this.routes.push(route)
    }

    call(req, res) {
        this.routes.some( route => {
            if (req.url === route.uri && req.method.toLowerCase() === route.method) {
                return route.callback.call(this, req, res)
            }
        })

        return res.end('Route not found!')
    }
}

module.exports = new Router