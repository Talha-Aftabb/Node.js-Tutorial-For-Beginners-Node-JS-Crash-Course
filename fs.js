// The fs is file-system module in nodejs
const fs = require("fs");

//Write a file through the fs module
fs.writeFile("message.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("FIle has been successfully written!");
});

//Read a file through the fs module
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("data", data);
});
