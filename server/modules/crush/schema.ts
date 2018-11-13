import * as mongoose from 'mongoose'

const CrushSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, unique: true, required: false },
  whatsapp: { type: String, unique: true, required: true },
  observation: { type: String, required: false },
  photo: { type: String, required: true },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default CrushSchema