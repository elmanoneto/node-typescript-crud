import Crush from './repository'

class CrushController {
  constructor () {}

  getAll () {
    return Crush.find({})
  }

  getById (id) {
    return Crush.findOne({_id: id})
  }

  create (crush) {
    return Crush.create(crush)
      .then(response => {
        return response
      })
      .catch(err => {
        return err
      })
  }

  update (id, crush) {
    const updateCrush = {
      name: crush.name,
      nickname: crush.nickname,
      whatsapp: crush.whatsapp,
      observation: crush.observation,
      photo: crush.photo,
      score: crush.score
    }
    return Crush.findByIdAndUpdate(id, updateCrush)
  }

  delete (id) {
    return Crush.remove(id)
  }
}

export default new CrushController()