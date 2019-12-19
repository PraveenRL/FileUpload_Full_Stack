const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    avatar: Array,
},
    {
        collection: 'file'
    })

module.exports = mongoose.model('fileSchema', fileSchema);