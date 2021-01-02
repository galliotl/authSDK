const watch = require("node-watch");
const exec = require("child_process").exec;

const compile = () => {
  console.log("compiling ts...");
  exec("npm run dev:build");
  console.log("linking current module");
  exec("npm link");
  console.log("finished");
};

compile();
watch("src", { recursive: true }, compile);
