const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo', toDoSchema);