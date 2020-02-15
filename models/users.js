const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema and model

const UsersSchema = new Schema({
    name: String,
    code_id: Number
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;