const assertDateRange = require('./assertDateRange');
const isWorkday = require('./isWorkday');
const { forEachDate } = require('./util');

module.exports = function getWorkdaysCountBetween (date1, date2) {
    let count = 0;
    assertDateRange(date1);
    assertDateRange(date2);
    forEachDate(date1, date2, function (curDate) {
        if (isWorkday(curDate)) {
            count++;
        }
    });
    return count;
};
