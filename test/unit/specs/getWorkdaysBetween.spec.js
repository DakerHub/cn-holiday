const getWorkdaysBetween = require('./../../../src/getWorkdaysBetween')

describe('getWorkdaysBetween', () => {
  it('2018-9-28和2018-10-9之间应该有5个工作日', () => {
    expect(getWorkdaysBetween('2018-9-28', '2018-10-9'))
      .toHaveLength(5);
  });
  it('2018-9-22和2018-9-24之间应该有0个工作日', () => {
    expect(getWorkdaysBetween('2018-9-22', '2018-9-24'))
      .toHaveLength(0);
  });
  it('2018-6-22和2018-6-29之间应该有6个工作日', () => {
    expect(getWorkdaysBetween('2018-6-22', '2018-6-29'))
      .toHaveLength(6);
  });
});
