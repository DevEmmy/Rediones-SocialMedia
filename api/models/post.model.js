const {Schema} = require("mongoose");

const schema = new Schema({
    content: String,
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    media: [
        {type: Object}
    ],
},
{
    timestamps: true,
})

const Post = mongoose.model('Post', schema)

module.exports = Post