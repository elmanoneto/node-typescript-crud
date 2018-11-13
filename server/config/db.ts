import * as mongoose from 'mongoose'

class DataBase {
  private DB_URI = 'mongodb://localhost:27017/contacts-management'
  private DB_CONNECTION

  constructor () {}

  createConnection () {
    mongoose.set('useCreateIndex', true)
    mongoose.connect(this.DB_URI, { useNewUrlParser: true })
    this.logger(this.DB_URI)
  }

  closeConnection (message, callback) {
    this.DB_CONNECTION.close(() => {
      console.log(`Mongoose was disconnected by: ${message}`);
      callback()
    })
  }

  logger (uri) {
    this.DB_CONNECTION = mongoose.connection
    this.DB_CONNECTION.on(`connected`, () => console.log(`Mongoose is connected to ${uri}`))
    this.DB_CONNECTION.on(`error`, error => console.log(`Connection error: ${error}`))
    this.DB_CONNECTION.on(`disconnected`, () => console.log(`Mongoose is disconnected to ${uri}`))
  }
}

export default DataBase