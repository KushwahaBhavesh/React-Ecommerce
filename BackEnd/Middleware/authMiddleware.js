import jwt from 'jsonwebtoken'
import UserModels from '../Models/UserModels.js';

// middleware for protected rroutes
export const userLoginMiddleware = (req, res, next) => {
  try {
    const tokenDecoded = jwt.verify(req.headers.authorization, process.env.USER_SECRET_KEY);
    req.user = tokenDecoded;
    next();
  } catch (error) {
    res.status(500).send({
      success: true,
      msg: "signup Required",
      error
    })
  }
}


// protected Admin Routes
export const adminLoginMiddleware = (req, res, next) => {
  try {
    const tokenDecoded = jwt.verify(req.headers.authorization, process.env.ADMIN_SECRET_KEY);
    req.user = tokenDecoded;
    next();
  } catch (error) {
    res.status(500).send({
      success: true,
      msg: "signup Required",
      error
    })
  }
}
