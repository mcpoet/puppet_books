const mongoose = require('mongoose');

let crawlerConfigSchema = new mongoose.Schema({
    cursor: Number,
    index: Number,
    minCursor: Number
});

let crawlerConfig = mongoose.model('crawlerConfig', crawlerConfigSchema);
module.exports = crawlerConfig;
