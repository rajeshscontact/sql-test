process.env.NODE_ENV = process.env.NODE_ENV || 'local'

const express = require('express')
const app = express()
const sqlClient = require('mssql')

const Database = require('./app/database')
const config = require('./config')
const databaseConnectHandler = require('./app/database_connect_handler')

const sqlServerDB = new Database(sqlClient, config)

sqlServerDB.connect((err) => {
    databaseConnectHandler(err, {app, sqlServerDB, config})
})
