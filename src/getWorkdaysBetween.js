const assertDateRange = require('./assertDateRange');
const isWorkday = require('./isWorkday');
const { forEachDate } = require('./util');

module.exports = function getWorkdaysBetween (date1, date2) {
    const result = [];
    assertDateRange(date1);
    assertDateRange(date2);
    forEachDate(date1, date2, function (curDate) {
        if (isWorkday(curDate)) {
            result.push(curDate.format('YYYY-MM-DD'));
        }
    });
    return result;
};
