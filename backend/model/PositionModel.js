const mongoose = require('mongoose');
const PositionSchema = require('../schemas/PositionSchema');

const PositionModel = new mongoose.model("Position",PositionSchema)

module.exports = PositionModel;