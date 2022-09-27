const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (req, res, next) => {
   let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };

  
};

module.exports = errorHandlerMiddleware;