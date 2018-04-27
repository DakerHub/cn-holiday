const isRestday = require('./../../../src/isRestday');

describe('isRestday', () => {
  it('2018-4-6应该是休息日', () => {
    expect(isRestday('2018-4-6'))
      .toEqual(true);
  });
  it('2018-10-4应该是休息日', () => {
    expect(isRestday('2018-10-4'))
      .toEqual(true);
  });
  it('2018-11-19应该不是休息日', () => {
    expect(isRestday('2018-11-19'))
      .toEqual(false);
  });
});
