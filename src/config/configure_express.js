const helmet = require('helmet')
const noCache = require('nocache')

const configureExpress = ({express, app, parser, cors, root}) => {
    app.use(cors({
        origin: [/\.mtbank\.com$/],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Content-Length'],
        methods: ['GET', 'PATCH', 'POST', 'OPTIONS', 'DELETE']
    }))

    app.use(parser.json(
        {type: ['application/json', 'application/merge-patch+json', 'application/json+merge-patch']}
    ))

    app.use(parser.urlencoded({extended: true}))
    app.use(express.static(`${root}/public`))

    app.disable('x-powered-by')
    app.use(helmet.dnsPrefetchControl())
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
    app.use(helmet.xssFilter())
    app.use(helmet.noSniff())
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            frameAncestors: ['\'none\'']
        }
    }))
    app.use(helmet.frameguard({ action: 'deny' }))
    app.use(noCache())
}

module.exports = configureExpress
