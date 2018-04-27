const dayjs = require('dayjs');
const assertDateRange = require('./assertDateRange');
const holiday = require('./json/holiday.json');
const holidays = holiday.triple;

module.exports = function getHolidaysBetween (date1, date2) {
    const result = [];
    assertDateRange(date1);
    assertDateRange(date2);
    const dayjs1 = dayjs(date1);
    const dayjs2 = dayjs(date2);
    let startDate = dayjs1;
    let endDate = dayjs2;
    if (dayjs1.isAfter(dayjs2)) {
        startDate = dayjs2;
        endDate = dayjs1;
    }
    let pointer = startDate.clone();
    while (!pointer.isAfter(endDate)) {
        if (holidays.includes(pointer.format('YYYYMMDD'))) {
            result.push(pointer.format('YYYY-MM-DD'));
        }
        pointer = pointer.add(1, 'day');
    }
    return result;
};
