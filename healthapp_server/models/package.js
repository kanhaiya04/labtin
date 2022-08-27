import mongoose from 'mongoose'

const packageSchema = mongoose.Schema(
  {
    title: { type: String },
    details: { type: String, required: true },
    originalPrice: Number,
    parameters: Number,
    discountPrice: Number,
  },
  {
    timestamps: true,
  }
)

var Package = mongoose.model('Package', packageSchema)

export default Package
