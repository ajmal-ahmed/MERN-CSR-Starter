var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resetKeySchema = new Schema({
  key: { type: String },
  iat: { type: Date },
  user_id: { type: Schema.Types.ObjectId },
  createdAt: { type: Date, expires: 3600, default: Date.now },
});

var resetKeys_model = mongoose.model("resetKeys", resetKeySchema);
module.exports.generateResetKey = (data, callback) => {
  let resetKey = new resetKeys_model(data);
  resetKey.save((err, dat) => {
    callback(err, dat);
  });
};

module.exports.getResetKeyPair = (key) => {
  return resetKeys_model.findOne({ key: key }).lean();
};
