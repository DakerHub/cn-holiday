const getWorkdaysCountBetween = require('./../../../src/getWorkdaysCountBetween')

describe('getWorkdaysCountBetween', () => {
  it('2018-9-28和2018-10-9之间应该有5个工作日', () => {
    expect(getWorkdaysCountBetween('2018-9-28', '2018-10-9'))
      .toEqual(5);
  });
  it('2018-9-22和2018-9-24之间应该有0个工作日', () => {
    expect(getWorkdaysCountBetween('2018-9-22', '2018-9-24'))
      .toEqual(0);
  });
  it('2018-6-22和2018-6-29之间应该有6个工作日', () => {
    expect(getWorkdaysCountBetween('2018-6-22', '2018-6-29'))
      .toEqual(6);
  });
});
