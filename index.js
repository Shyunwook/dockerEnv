const express = require("express");
const app = express();

const child_process = require("child_process");

app.get("/test", async (req, res) => {
  // let process = await child_process.execSync(`docker run -it --name py -d python:3.7`);
  let process = await child_process.execSync(`echo '10+20' | script -q $(pwd)/stdin docker attach py`);
  // child_process.spawn(process).stdin.write("docker attac");
  res.send(process.toString());
});

app.listen(5050, () => {
  console.log("listening!!!");
});
