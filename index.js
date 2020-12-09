const express = require("express");
const app = express();

const child_process = require("child_process");

app.get("/test", async (req, res) => {
  let process = await child_process.execSync(`docker exec -it python-judge python`);
  res.send(process.toString());
});

app.listen(5050, () => {
  console.log("listening!!!");
});
