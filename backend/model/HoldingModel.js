const mongoose = require('mongoose');
const HoldingSchema = require('../schemas/HoldingSchema');

const HoldingsModel = new mongoose.model("Holding", HoldingSchema);

module.exports = HoldingsModel
