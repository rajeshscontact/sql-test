const configureRoutes = (app, {routes, sqlServer}, sqlServerDB) => {
    app.route(routes.details).get((req, res, next) => {
        const request = sqlServerDB.request()
        request.query(`select * from ${sqlServer.schemaName}.${sqlServer.tableName}`, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset)
        })
    })
    app.route(routes.details).post((req, res, next) => {})
    app.route(routes.details).put((req, res, next) => {})
}

module.exports = configureRoutes
