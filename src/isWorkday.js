const dayjs = require('dayjs');
const assertDateRange = require('./assertDateRange');
const workdays = require('./json/workday.json');
const holiday = require('./json/holiday.json');
const holidays = holiday.triple;
const restdays = holiday.double;

module.exports = function isWorkDay (date) {
    assertDateRange(date);
    const formatDate = dayjs(date).format('YYYYMMDD');
    if (workdays.includes(formatDate)) {
        return true;
    }
    if (holidays.includes(formatDate) || restdays.includes(formatDate)) {
        return false;
    }
    return !([0, 6].includes(new Date(date).getDay()));
};
