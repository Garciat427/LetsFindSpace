const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema and model

const CodesSchema = new Schema({
    code: Number,
    locked: Boolean
});

const Codes = mongoose.model('codes', CodesSchema);

module.exports = Codes;