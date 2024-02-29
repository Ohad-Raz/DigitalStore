const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Digital App",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

function sendMonthlyEmail(email) {
  const mailOptions = {
    from: "Digital App",
    to: email,
    subject: "Monthly Report",
    text: "This is your monthly report email.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

function sendBirthdayEmail(email) {
  const mailOptions = {
    from: "Digital App",
    to: email,
    subject: "Happy Birthday!",
    text: "Happy Birthday! We hope you have a fantastic day filled with joy and happiness.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending birthday email:", error);
    } else {
      console.log("Birthday email sent:", info.response);
    }
  });
}

module.exports = {
  sendMonthlyEmail,
  sendBirthdayEmail,
  sendEmail,
};
