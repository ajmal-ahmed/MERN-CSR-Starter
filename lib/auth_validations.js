var tokensModel = require("../models/tokensModel");
const jwt = require("jsonwebtoken");

module.exports.validateAccessToken = function () {
  return async function (req, res, next) {
    if (!req.headers.authorization) {
      res.status(400);
      res.json({
        error: "Invalid request",
        description: "access token is required",
      });
      return;
    }
    let access_token = req.headers.authorization.split(" ")[1];
    //veify JWT Token
    jwt.verify(access_token, process.env.JWTSECRET, function (err, tokenInfo) {
      if (err) {
        return res.status(400).json({
          error: "Authentication failed",
          description: "Invalid access token",
        });
      }
      res.locals.token = tokenInfo;
      next();
    });
  };
};
