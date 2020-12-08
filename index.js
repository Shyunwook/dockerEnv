const express = require("express");
const app = express();

const child_process = require("child_process");

app.get("/test", async (req, res) => {
  let process = await child_process.execSync(`docker run test.py python:3.7.1`);
  res.send(process.toString());
});

app.listen(3000, () => {
  console.log("listening!!!");
});
