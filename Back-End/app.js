const express = require("express");
const contactRouter = require("./routes/contact-routes");

const ErrorHandler = require("./utils/ErrorHandler");
const path = require("path");
const {
  handleCastError,
  handleDuplicateKeyError,
  handleValidationError,
  sendErrorInDev,
  sendErrorInProd,
} = require("./controllers/error-controller");
const morgan = require('morgan')

const app = express();
const cors = require("cors");

// Middlewares
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ credentials: true }));


// Routess
app.use("/api/v1/contact", contactRouter);



// Handle any other route
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500; // for errors without a status code
  err.status = err.status || "error";
 
 
});

module.exports = app;
