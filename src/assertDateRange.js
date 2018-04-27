const dayjs = require('dayjs');

module.exports = function assertDateRange (date) {
    const currentDate = dayjs(date);
    if (!currentDate.isValid()) {
        throw new TypeError('Expect a date!');
    }
    const start = dayjs('2010-12-31');
    const end = dayjs().add(1, 'year').startOf('year');
    if (!(currentDate.isBefore(end) && currentDate.isAfter(start))) {
        throw new Error(`Expected date between 2010-12-31 and ${end.format('YYYY-MM-DD')}`);
    }
};
