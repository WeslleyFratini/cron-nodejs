const express = require("express");
const ManagerCron = require("./manager-cron");
const port = 3002;

const app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`);

  ManagerCron.run();
});
