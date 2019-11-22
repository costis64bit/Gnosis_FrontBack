var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    _id: {type:String, required:true},
    firstname: {type: String, max: 100},
    lastname: {type: String}, //required: true}
    father_name: {type: String},
    mother_name: {type: String},
    selectedDate: {type: Date},
    address: {type: String},
    phone: {type: String},
    zipcode: {type: String},
    email: {type: String},
    password: {type:String}
});


// Export the model
module.exports = mongoose.model('Student', StudentSchema);