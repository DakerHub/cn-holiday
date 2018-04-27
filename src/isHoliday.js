const dayjs = require('dayjs');
const assertDateRange = require('./assertDateRange');
const holiday = require('./json/holiday.json');
const holidays = holiday.triple;

module.exports = function isHoliday (date) {
    assertDateRange(date);
    const formatDate = dayjs(date).format('YYYYMMDD');
    return holidays.includes(formatDate);
};
