//Importing packages for I/O methods
const fs = require("fs");

//Synchronous I/O task
const filePath = "Web 2/Week 2/1.1Async JS/a.txt";

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} else {
  console.error("File not found:", filePath);
}

//Asychronous I/O task

fs.readFile(
  "Web 2/Week 2/1.1Async JS/a.txt",
  "utf-8",
  function (err, filePath) {
    console.log(filePath);
  }
);
setTimeout(() => {
  console.log("hello world  from setTimeout");
}, 3000);

console.log("hello");
