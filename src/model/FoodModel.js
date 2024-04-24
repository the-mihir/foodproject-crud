const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    food_name:{type:String, required:true},
    price:{type:Number, required:true},
    food_code:{type:String, required:true},
    food_image:{type:String, required:true},
    food_category:{type:String, required:true},
    quantity:{type:Number, required:true}
}, {timestamps:true, versionKey:false});

const FoodModel = mongoose.model('item_lists', DataSchema);
module.exports = FoodModel;

