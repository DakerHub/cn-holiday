const isWorkday = require('./../../../src/isWorkday');

describe('isWorkday', () => {
  it('调休的周日(2018-4-8)应该是工作日', () => {
    expect(isWorkday('2018-4-8'))
      .toEqual(true);
  });
  it('正常的工作日(2018-5-18)应该是工作日', () => {
    expect(isWorkday('2018-5-18'))
      .toEqual(true);
  });
  it('放假的工作日(2018-4-30)应该不是工作日', () => {
    expect(isWorkday('2018-4-30'))
      .toEqual(false);
  });
  it('放假的工作日(2018-10-1)应该不是工作日', () => {
    expect(isWorkday('2018-10-1'))
      .toEqual(false);
  });
});
