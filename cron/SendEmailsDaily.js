const cron = require("node-cron");

function SendEmailDaily() {
  console.log(`Email sendo enviado ...`);
}

module.exports = cron.schedule("* * * * * *", SendEmailDaily, {
  scheduled: false,
});
