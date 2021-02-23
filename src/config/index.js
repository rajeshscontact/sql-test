const path = require('path')
const _ = require('lodash')

const local = require('./env/local')

const defaults = {
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 8080,
    sqlServer: {
        url: process.env.SQL_SERVER_URL,
        userName: process.env.SQL_SERVER_USER,
        password: process.env.SQL_SERVER_PASSWORD,
        databaseName: process.env.SQL_SERVER_DATABASE_NAME,
        schemaName: process.env.SQL_SERVER_SCHEMA,
        tableName: process.env.SQL_SERVER_TABLE,
    },
    loggingConfig: {

    },
    routes: {
        details: '/details'
    }
}

const configs = {
    local: _.merge({}, defaults, local),
    default: _.merge({}, defaults)
}

module.exports = configs[process.env.NODE_ENV] ? configs[process.env.NODE_ENV] : configs['default']
