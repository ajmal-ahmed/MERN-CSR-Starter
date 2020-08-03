const { v1: key1, v4: key2 } = require("uuid");
const pbkdf2 = require("pbkdf2");
const resetkeyModel = require("../models/resetkey");
const usersModel = require("../models/usersModel");
const mailer = require("./mailer");
module.exports.generateResetEmail = function (user) {
  return new Promise((resolve, reject) => {
    let reset_code = key1() + "-" + key2();
    let iat = new Date().toISOString();
    let reset_key = {
      key: reset_code,
      user_id: user._id,
      iat: iat,
    };
    console.log("reset-keys->", reset_key);
    resetkeyModel.generateResetKey(reset_key, (err, resetKeyInfo) => {
      if (resetKeyInfo) {
        //send mail notification
      }
      let resetpath =
        process.env.RESETURL || "http://localhost:3005/resetpassword/";
      let message = `To reset password click <a href="${resetpath}?auth=${reset_code}">here</a> or visit following link in your browser   <br/> ${resetpath}?auth=${reset_code} `;
      mailer
        .sendemail(user.email, message)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
      resolve("reset_key generated");
    });
  });
};

module.exports.resetPassword = function (key, password) {
  return new Promise(async (resolve, reject) => {
    var keyInfo = await resetkeyModel.getResetKeyPair(reset_key);
    if (!keyInfo) {
      reject("Invalid reset key");
    }
    let ecryptedpassword = pbkdf2
      .pbkdf2Sync(password, "salt", 1, 32, "sha512")
      .toString();
    usersModel.updatePassword(
      keyInfo.user_id,
      ecryptedpassword,
      (err, data) => {
        if (err) {
          reject("System error");
        }
        resolve("password updated");
      }
    );
  });
};
