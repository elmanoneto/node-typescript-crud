import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'

import DataBase from './config/db'
import CrushEndpoints from './modules/crush/endpoints'

class App {
  public app: express.Application
  private morgan: morgan.Morgan
  private bodyParser
  private database: DataBase

  constructor () {
    this.app = express()
    this.middleware()
    this.routes()
    this.database = new DataBase()
    this.openDatabaseConnection()
  }

  middleware () {
    this.app.use(morgan('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(CrushEndpoints)
  }

  routes () {
    this.app.route('/').get((req, res) => res.status(200).json({
      message: 'Hello world!'
    }))
  }

  openDatabaseConnection () {
    this.database.createConnection()
  }

  closeDatabaseConnection (message, callback) {
    this.database.closeConnection(message, callback)
  }
}

export default new App()