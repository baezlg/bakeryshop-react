const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "An employee must have a name"]
    },
    email: {
        type: String,
        required: [true, "An employee must have an email"],
        unique: [true, "Email already exists"]
    },
    avatar: {
        type: String,
        default: "default.jpg"
    }
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;