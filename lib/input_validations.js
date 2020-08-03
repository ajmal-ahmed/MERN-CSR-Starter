const { default: validator } = require("validator");

module.exports.validateUserCreateRequest = function () {
  return function (req, res, next) {
    if (!req.body.email) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Email is required.",
      });
      return;
    }
    if (!validator.isEmail(req.body.email)) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Please use a valid email address",
      });
      return;
    }
    if (!req.body.first_name || !req.body.last_name) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "First name and lastname are required feilds.",
      });
      return;
    }
    if (!req.body.password || req.body.password != req.body.confirm_password) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Passwords should be same.",
      });
      return;
    }

    if (req.body.password.length < 8) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Password must be 8 charactor or long.",
      });
      return;
    }
    next();
  };
};

module.exports.validateTokenReq = function () {
  return function (req, res, next) {
    let { refresh_token, email, password } = req.body;
    if (!refresh_token) {
      if (!(email && password)) {
        res.status(400).json({
          error: "Invalid request",
          description: "refresh token or email-password pair is required",
        });
        return;
      }
    }
    next();
  };
};

module.exports.forgotPasswordReq = function () {
  return function (req, res, next) {
    if (!req.body.email) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Email is required.",
      });
      return;
    }
    if (!validator.isEmail(req.body.email)) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Please use a valid email address",
      });
      return;
    }
    next();
  };
};

module.exports.resetPasswordReq = function () {
  return function (req, res, next) {
    let { password, confirm_password, reset_key } = req.body;
    if (!reset_key) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "reset_key is required.",
      });
      return;
    }
    if (!password || password != confirm_password) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Passwords should be same.",
      });
      return;
    }

    if (password.length < 8) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "Password must be 8 charactor or long.",
      });
      return;
    }
    next();
  };
};
