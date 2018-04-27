const isHoliday = require('./isHoliday');
const isRestday = require('./isRestday');
const isWorkday = require('./isWorkday');
const getHolidaysBetween = require('./getHolidaysBetween');
const getWorkdaysBetween = require('./getWorkdaysBetween');
const getWorkdaysCountBetween = require('./getWorkdaysCountBetween');

module.exports = {
    isHoliday,
    isRestday,
    isWorkday,
    getHolidaysBetween,
    getWorkdaysBetween,
    getWorkdaysCountBetween
};
