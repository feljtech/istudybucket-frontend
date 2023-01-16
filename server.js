const express = require("express");
const path = require("path");
const app = express();
const { spawn } = require("node:child_process");

function createBuild() {
  const child = spawn("yarn", ["run", "build"], { shell: true });
  child.stdout.on("data", (data) => {
    console.log("Creating build. press CTRL + C or CMD + C to cancel the current operation if you already have a build.");
    console.info("App will be served on port 3001 when the current operation is complete.")
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
    console.log("visit http://locahost:3001")
    createBuild()
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3001);
