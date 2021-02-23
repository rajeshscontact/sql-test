function Database (dbDriver, config) {
    let dbInstance = null

    this.get = () => dbInstance

    this.connect = (callback) => {
        if (dbInstance) return callback()

        const options = {
            server: config.sqlServer.url,
            user: config.sqlServer.userName,
            password: config.sqlServer.password,
            database: config.sqlServer.databaseName
        }

        dbDriver.connect(options, (err, db) => {
            if (err) return callback(err)

            dbInstance = db

            callback()
        })
    }
}

module.exports = Database
