const sendMailDaily = require("./cron/SendEmailsDaily");

class ManagerCron {
  constructor() {
    this.job = [sendMailDaily];
  }

  run() {
    this.job.forEach((job) => job.start());
  }
}

module.exports = new ManagerCron();
