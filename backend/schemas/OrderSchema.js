const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    name : {
        type: String
    },
    qty : {
        type: Number
    },
    price: {
        type: Number
    },
    mode: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = OrderSchema;