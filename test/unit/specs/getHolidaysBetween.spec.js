const getHolidaysBetween = require('./../../../src/getHolidaysBetween')

describe('getHolidaysBetween', () => {
  it('2018-9-1和2018-12-1之间应该有4个法定节假日', () => {
    expect(getHolidaysBetween('2018-9-1', '2018-12-1'))
      .toHaveLength(4);
  });
  it('2018-10-1和2018-10-3之间应该有3个法定节假日', () => {
    expect(getHolidaysBetween('2018-10-3', '2018-10-1'))
      .toHaveLength(3);
  });
  it('2018-9-24和2018-9-24之间应该有1个法定节假日', () => {
    expect(getHolidaysBetween('2018-9-24', '2018-9-24'))
      .toHaveLength(1);
  });
});
