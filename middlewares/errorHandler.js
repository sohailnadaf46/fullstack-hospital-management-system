class ErroHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err,req, res, next) =>{
  err.message = err.message || "internal server Error",
  err.statusCode = err.statusCode || 500;

  if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)}Entered`;
    err = new ErroHandler(message, 400)
}
  if(err.name === "JsonWebTokenError"){
    const message = "Json web Token is invalid, Try Again"
    err = new ErroHandler(message, 400)
  }
  if(err.name === "TokenExpiredError"){
    const message = "Json web Token is invalid, Try Again"
    err = new ErroHandler(message, 400)
  }
  if(err.name === "CastError"){
    const message = `invalid${err.path}`
    err = new ErroHandler(message, 400)
  }
  return res.statusCode(err.statusCode).json({
    success:false,
    message:err.message,
  })
}