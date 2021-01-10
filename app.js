const express = require('express');
const productRouter = require('./routes/productRoutes');
const employeeRouter = require('./routes/employeeRoutes');

const app = express();

app.use(express.json());

//ROUTES
app.use('/api/v1/products', productRouter);
app.use('/api/v1/employees', employeeRouter);

module.exports = app;