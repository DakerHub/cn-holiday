const path = require('path')
const fs = require('fs')

module.exports = function whiteJson(jsonText) {
  fs.writeFile(path.resolve(__dirname, './../src/holiday.json'), jsonText, (err) => {
    if (err) throw err;
  });
}