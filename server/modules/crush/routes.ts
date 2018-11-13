import * as httpStatus from 'http-status'
import * as mongoose from 'mongoose'

import CrushController from './controller'

const sendResponse = (res, statusCode, data) => {
  res.status(statusCode).json({ 'result': data })
}

class CrushRoutes {
  constructor () {}

  getAll(req, res) {
    CrushController
      .getAll()
      .then(crushs => sendResponse(res, httpStatus.OK, crushs))
      .catch(err => console.error.bind(console, `Error: ${err}`))
  }

  getById (req, res) {
    let { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return sendResponse(res, httpStatus.NOT_FOUND, `Crush wasn't found`)
    CrushController
      .getById(id)
      .then(crush => sendResponse(res, httpStatus.OK, crush))
      .catch(err => console.error.bind(console, `Error: ${err}`))
  }

  create (req, res) {
    const crush = req.body

    CrushController
      .create(crush)
      .then(crush => sendResponse(res, httpStatus.CREATED, "Crush created with successfully"))
      .catch(err => console.error.bind(console, `Error: ${err}`))
  }

  update (req, res) {
    const crush = req.body

    CrushController
      .update(crush.id, crush)
      .then(crush => sendResponse(res, httpStatus.CREATED, "Crush was updated with successfully"))
      .catch(err => console.error.bind(console, `Error: ${err}`))
  }

  delete (req, res) {
    const crush = req.body

    CrushController
      .delete(crush.id)
      .then(crush => sendResponse(res, httpStatus.CREATED, "Crush was deleted with successfully"))
      .catch(err => console.error.bind(console, `Error: ${err}`))
  }
}

export default new CrushRoutes