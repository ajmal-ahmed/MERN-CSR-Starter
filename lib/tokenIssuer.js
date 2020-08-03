const { v4: refreshToken } = require("uuid");
const jwt = require("jsonwebtoken");
const tokensModel = require("../models/tokensModel");

module.exports.issueToken = function (userId) {
  return new Promise((resolve, reject) => {
    let refresh_token = refreshToken();
    let iat = new Date().getTime();
    let token = {
      refresh_token: refresh_token,
      iat: iat,
      user_id: userId,
    };
    let access_token = jwt.sign(token, process.env.JWTSECRET);
    tokensModel.newToken(token, (err, tokenInfo) => {
      if (err) {
        reject("Unable to issue token");
        return;
      }
      token.accessToken = access_token;
      resolve(token);
    });
  });
};
//TODO refresh token updation

module.exports.updateToken = function (token) {
  return new Promise((resolve, reject) => {
    let iat = new Date().getTime();
    token.iat = iat;
    tokensModel.update(token._id, token, (err, tokenInfo) => {
      if (err) {
        reject("Unable to issue token");
        return;
      }
      let tokenSignDetails = {
        refresh_token: tokenInfo.refresh_token,
        iat: iat,
        user_id: tokenInfo.user_id,
      };
      token.accessToken = jwt.sign(tokenSignDetails, process.env.JWTSECRET);
      resolve(token);
    });
  });
};
module.exports.validateRefreshToken = function (refresh_token) {
  return new Promise(async (resolve, reject) => {
    let tokenInfo = await tokensModel.getTokenByRefreshtoken(refresh_token);
    if (!tokenInfo) {
      reject("Invalid refresh token");
      return;
    }
    resolve(tokenInfo);
  });
};

module.exports.invalidateToken = function (refresh_token) {
  return new Promise(async (resolve, reject) => {
    tokensModel.deleteRefreshtoken(refresh_token, (err, response) => {
      resolve("done");
    });
  });
};
