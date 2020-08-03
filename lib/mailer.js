const nodemailer = require("nodemailer");
const testCredentials = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jessy.kessler@ethereal.email",
    pass: "PacB7u3TXVMhxKtqGD",
  },
};

module.exports.sendemail = (to, message) => {
  return new Promise((resolve, reject) => {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(testCredentials);
    transporter.sendMail(
      {
        from: '"Support Team" <jessy.kessler@ethereal.email>', // sender address
        to: to, // list of receivers
        subject: "Password Recovery", // Subject line
        html: message, // plain text body
      },
      (error, info) => {
        if (error) {
          console.log("Error occurred");
          console.log(error.message);
          // return process.exit(1);
          reject(error);
          return;
        }

        console.log("Message sent successfully!");
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        // transporter.close();
        //info.messageId
        resolve(info);
      }
    );
  });
};
