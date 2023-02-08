const mongoose = require('mongoose');
const searchPlugin = require('mongoose-search-plugin');

// Website Schema
const websiteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Website = module.exports = mongoose.model('Website', websiteSchema);

module.exports.addWebsite = function(website, callback){
    Website.create(website, callback);
}