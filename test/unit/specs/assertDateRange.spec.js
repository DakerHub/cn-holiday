const assertDateRange = require('./../../../src/assertDateRange');

describe('assertDateRange', () => {
    it('超出可计算范围', () => {
        expect(() => {
            assertDateRange('2009-2-2');
        }).toThrowError();
    });
    it('不是有效日期', () => {
        expect(() => {
            assertDateRange('2013w12');
        }).toThrowError('Expect a date!');
    });
});
