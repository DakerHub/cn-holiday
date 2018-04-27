const dayjs = require('dayjs');

/**
 * 循环遍历两个日期间的每一个日期
 * @param {mixed} date1 第一个日期
 * @param {mixed} date2 第二个日期
 * @param {function} callback 回调
 */
exports.forEachDate = function forEachDate (date1, date2, callback) {
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
        if (callback && typeof callback === 'function') {
            callback(pointer);
        }
        pointer = pointer.add(1, 'day');
    }
};
