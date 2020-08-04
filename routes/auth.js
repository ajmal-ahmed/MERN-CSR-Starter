const express = require("express");
const router = express.Router();
const pbkdf2 = require("pbkdf2");
const auth_middleware = require("../lib/auth_validations");
const validation = require("../lib/input_validations");
const tokenIssuer = require("../lib/tokenIssuer");
const recovery = require("../lib/recovery");
const {
  createUser,
  getUserByEmail,
  get_user,
} = require("../models/usersModel");
const { response } = require("express");

router.post("/sign-up", validation.validateUserCreateRequest(), (req, res) => {
  getUserByEmail(req.body.email).then((data) => {
    if (data) {
      res.status(400);
      res.json({
        error: "Invalid request",
        error_description: "User already exists",
      });
      return;
    }
    let password = pbkdf2.pbkdf2Sync(
      req.body.password,
      "salt",
      1,
      32,
      "sha512"
    );

    createUser(
      {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: password.toString(),
      },
      (err, data) => {
        if (err) {
          res.status(403).json({
            error: "System error",
            description: "unable to create client",
          });
          return;
        }
        res.json({ message: "Account created successfully" });
      }
    );
  });
});

router.post("/token", validation.validateTokenReq(), async (req, res) => {
  let { refresh_token, email, password } = req.body;
  if (refresh_token) {
    //verify refresh token and update access token
    tokenIssuer
      .validateRefreshToken(refresh_token)
      .then((tokenInfo) => {
        tokenIssuer
          .updateToken(tokenInfo)
          .then((newToken) => {
            delete newToken._id;
            delete newToken.__v;
            res.json(newToken);
          })
          .catch((e) => {
            res.status(402);
            res.json({
              error: "System error",
              error_description: "Unable to issue token",
            });
            return;
          });
      })
      .catch((e) => {
        res.status(400);
        res.json({
          error: "Authentication error",
          error_description: "Invalid refresh token",
        });
        return;
      });
  } else {
    //verify email and password,issue token
    getUserByEmail(email).then(async (user) => {
      if (!user) {
        res.status(400);
        res.json({
          error: "Authentication error",
          error_description: "Invalid username or email",
        });
        return;
      }
      let inputpassword = pbkdf2
        .pbkdf2Sync(password, "salt", 1, 32, "sha512")
        .toString();
      // console.log("user->", user, inputpassword);
      if (user.password != inputpassword) {
        res.status(400);
        res.json({
          error: "Authentication error",
          error_description: "Invalid username or email",
        });
        return;
      }
      tokenIssuer
        .issueToken(user._id)
        .then((token) => {
          res.json(token);
        })
        .catch((e) => {
          console.log("err", e);
          res.status(402);
          res.json({
            error: "System error",
            error_description: "Unable to issue token",
          });
          return;
        });
    });
  }
});

router.post(
  "/verify-token",
  auth_middleware.validateAccessToken(),
  (req, res) => {
    let token = res.locals.token;
    delete token._id;
    delete token.__v;
    res.json({ message: "access token verified", token });
  }
);

router.post(
  "/get-profile",
  auth_middleware.validateAccessToken(),
  (req, res) => {
    get_user(res.locals.token.user_id)
      .then((user) => {
        if (!user) {
          res.status(400);
          res.json({
            error: "Invalid request",
            error_description: "User not found.",
          });
          return;
        }
        res.json({ user });
      })
      .catch((err) => {
        res.status(400);
        res.json({
          error: "Invalid request",
          error_description: "Unable to find user",
        });
      });
  }
);

router.post("/logout", auth_middleware.validateAccessToken(), (req, res) => {
  tokenIssuer
    .invalidateToken(res.locals.token.refresh_token)
    .then((response) => {
      res.json({ message: "loged Out successfully" });
    })
    .catch((err) => {
      res.status(403);
      res.json({
        error: "System error",
        error_description: "Unable to process the request",
      });
    });
});

router.post("/forgot-password", validation.forgotPasswordReq(), (req, res) => {
  res.json({
    message:
      "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
  });
  getUserByEmail(req.body.email)
    .then((user) => {
      if (user) {
        //generate reset key
        //send mail notification
        recovery.generateResetEmail(user);
      }
    })
    .catch((err) => { });
});

router.post("/reset-password", validation.resetPasswordReq(), (req, res) => {
  let { password, reset_key } = req.body;

  recovery
    .resetPassword(reset_key, password)
    .then((response) => {
      res.json({
        message: "Password updated successfully.",
      });
    })
    .catch((e) => {
      res.status(403);
      res.json({
        error: "System error",
        error_description: "Unable to process the request",
      });
    });
});

module.exports = router;
