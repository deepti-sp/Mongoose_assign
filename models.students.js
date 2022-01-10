var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: String,
    email: {
        type:String,
        unique:true,
        required:true
    },
    age: {
        type: Number,
        default:21
    }
});

var Student = mongoose.model('StudentRegistration', UserSchema);

module.exports = Student;