const isHoliday = require('./../../../src/isHoliday')

describe('isHoliday', () => {
  it('2018-10-1应该是法定节假日', () => {
    expect(isHoliday('2018-10-1'))
      .toEqual(true);
  });
  it('2018-5-1应该是法定节假日', () => {
    expect(isHoliday('2018-5-1'))
      .toEqual(true);
  });
  it('2018-4-19应该不是法定节假日', () => {
    expect(isHoliday('2018-4-19'))
      .toEqual(false);
  });
});
