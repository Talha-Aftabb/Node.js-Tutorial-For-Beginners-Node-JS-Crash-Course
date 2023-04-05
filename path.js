//path module to get different values for files
const path = require("path");

//To get the directory name of the file
const fileLocation = path.join(__dirname, "app.js");

//To get the basename of the file
const fileName = path.basename(fileLocation);

//To get the extension of the file
const extName = path.extname(fileName);

console.log(extName);
