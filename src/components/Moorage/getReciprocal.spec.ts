import getReciprocal from './getReciprocal';

describe('getReciprocal', () => {
  it('returns correct reciprocal for a given fraction', () => {
    expect(getReciprocal(1/2)).toEqual(2);
    expect(getReciprocal(1/3)).toEqual(3);
    expect(getReciprocal(2/3)).toEqual(3/2);
    expect(getReciprocal(4/3)).toEqual(3/4);
    expect(getReciprocal(0)).toEqual(0);
  });
});
