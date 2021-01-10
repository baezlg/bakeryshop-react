const Employee = require('./../models/employeeModel');
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("not an image", false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadEmployeePhoto = upload.single("avatar");
exports.resizeEmployeePhoto = (req, res, next) => {
    if (!req.file) return next();
    req.file.filename = `employee-${Math.random() * 10000000}.jpeg`;
    sharp(req.file.buffer)
        .resize(128, 128)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`img/${req.file.filename}`);
    next();
}

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            status: "success",
            results: employees.length,
            data: {
                employees
            }
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
              employee
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }  
};

exports.createEmployee = async (req, res) => {
    try {
        if (req.file) req.body.avatar = req.file.filename;
        const newEmployee = await Employee.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                employee: newEmployee
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                employee
            }
          });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  