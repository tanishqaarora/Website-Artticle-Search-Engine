const mongoose = require('mongoose');

const uri = process.env.URI;

const db = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
.then(() => console.log("database connected successfully"))
.catch(err => console.log("Error is: ", err))

module.exports = db;