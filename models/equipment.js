const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User model
const equipmentSchema = new Schema({
    type: {type:String, required: true},
    productBrand: {type:String, unique: true},
    productModel: {type:String, required: true},
    quantity: {type:Number, default: 0, required: true},
    rented: {type:Number, default: 0,}
}, {timestamps: true})

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;