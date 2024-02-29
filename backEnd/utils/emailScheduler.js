const cron = require("node-cron");
const { sendMonthlyEmail, sendBirthdayEmail } = require("./email");
const User = require("../models/userModel");

cron.schedule(
  "0 0 1 * *",
  async () => {
    try {
      const users = await User.find();

      users.forEach((user) => {
        console.log(user.email);
        sendMonthlyEmail(user.email);
      });

      console.log("Monthly emails sent successfully");
    } catch (error) {
      console.error("Error sending monthly emails:", error);
    }
  },
  {
    timezone: "Israel",
  }
);

cron.schedule(
  "0 0 * * *",
  async () => {
    try {
      const users = await User.find();

      const today = new Date();
      const todayMonth = today.getMonth() + 1;
      const todayDay = today.getDate();

      users.forEach((user) => {
        const userBirthday = user.birthday;
        const userBirthdayMonth = userBirthday.getMonth() + 1;
        const userBirthdayDay = userBirthday.getDate();

        if (userBirthdayMonth === todayMonth && userBirthdayDay === todayDay) {
          console.log(`Sending birthday email to ${user.email}`);
          sendBirthdayEmail(user.email);
        }
      });

      console.log("Birthday emails processed for today.");
    } catch (error) {
      console.error("Error processing birthday emails:", error);
    }
  },
  {
    timezone: "Israel",
  }
);