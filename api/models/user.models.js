const {Schema, default: mongoose, Mongoose} = require("mongoose")

const schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  oldPassword: {type: String, required: false},
  phone: {type: String, required: true},
  profilePicture: {type: String},
  cover: {type: String},
  about: {type: String},
  address: {type: String},
  nationality: {type: String},
  saved: [],
  followers: [{type: Schema.Types.ObjectId, ref: "User"}],
  following: [{type: Schema.Types.ObjectId, ref: "User"}]
  },{
    timestamps: true,
  });

  const User = mongoose.model("User", schema)
  module.exports = User