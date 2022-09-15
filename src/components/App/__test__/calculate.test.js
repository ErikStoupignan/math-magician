import calculate from '../../../logic/calculate';

describe('Calculate File', () => {
  it('Testing AC', () => {
    const obj = '';
    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  it('Testing obj.net & buttonName are 0', () => {
    const obj = { total: '', next: '0', operation: '' };
    const buttonName = '0';
    expect(calculate(obj, buttonName)).toEqual({});
  });

  it('Any "if" is true', () => {
    const obj = '0';
    const buttonName = '123';
    expect(calculate(obj, buttonName)).toEqual({
      next: buttonName,
      total: null,
    });
  });
});
