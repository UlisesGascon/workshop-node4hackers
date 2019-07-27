//import fs from 'fs';
const fs = require('fs');
/*
fs.readFile('./archivo.txt', 'utf8', function (err, data) {
    if (!err) {
      console.log(data);
    } else {
      throw err;
    }
});
*/
console.log("--- inicio ---")
const data = fs.readFileSync('./archivo.txt', 'utf8')
console.log("data:", data)
console.log("--- fin ---")