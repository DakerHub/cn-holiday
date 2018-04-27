const dayjs = require('dayjs');
const assertDateRange = require('./assertDateRange');
const holiday = require('./json/holiday.json');
const restdays = holiday.double;

module.exports = function isRestday (date) {
    assertDateRange(date);
    const formatDate = dayjs(date).format('YYYYMMDD');
    return restdays.includes(formatDate);
};
