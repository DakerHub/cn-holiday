const getHoliday = require('./../util/getHoliday');
const whiteJson = require('./../util/whiteJson');
const formatHoliday = require('./../util/formatHoliday');
const getAllMonthsFrom2011 = require('./../util/getAllMonthsFrom2011')

getHoliday({
  m: getAllMonthsFrom2011().join(',')
}).then(res => {
  whiteJson(formatHoliday(res));
}).catch(err => {
  console.log(err)
});