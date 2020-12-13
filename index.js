// const express = require("express");
// const app = express();

// const child_process = require("child_process");

// app.get("/test", async (req, res) => {
//   // let process = await child_process.execSync(`docker run -it --name py -d python:3.7`);
//   let process = await child_process.execSync(`echo '10+20' | script -q $(pwd)/stdin docker attach py`);
//   // child_process.spawn(process).stdin.write("docker attac");
//   res.send(process.toString());
// });

// app.listen(5050, () => {
//   console.log("listening!!!");
// });

const Terminal = require("./terminal.class.js").Terminal;
let terminalServer = new Terminal({
  role: "server",
  shell: process.platform === "win32" ? "cmd.exe" : "bash",
  port: 3000,
});

terminalServer.onclosed = (code, signal) => {
  console.log("Terminal closed - " + code + ", " + signal);
  app.quit();
};
terminalServer.onopened = () => {
  console.log("Connected to remote");
};
terminalServer.onresized = (cols, rows) => {
  console.log("Resized terminal to " + cols + "x" + rows);
};
terminalServer.ondisconnected = () => {
  console.log("Remote disconnected");
};
