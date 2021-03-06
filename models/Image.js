const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

module.exports = function () {
  // define schema
  const ImageSchema = new Schema(
    {
      dateString: String,
      date: { type: Date, default: Date.now },
      imageUrl: String,
      name: String,
      copyright: String,
      Continent: String,
      Country: String,
      City: String,
      detail: { type: Schema.Types.ObjectId, ref: 'Detail' }
    },
    { timestamps: true }
  )

  ImageSchema.plugin(mongoosePaginate)

  mongoosePaginate.paginate.options = {
    lean: true,
    limit: 10
  }

  mongoose.model('Image', ImageSchema)
}
