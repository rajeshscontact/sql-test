const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configureExpress = require('../config/configure_express')
const configureRoutes = require('../config/configure_routes')

const databaseConnectHandler = (err, {app, sqlServerDB, config}) => {
    if (err) throw err

    configureExpress({express, app, parser: bodyParser, cors, root: config.root})
    configureRoutes(app, config, sqlServerDB.get())

    const port = config.port

    app.listen(port)
}

module.exports = databaseConnectHandler


