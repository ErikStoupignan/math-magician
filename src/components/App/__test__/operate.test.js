import operate from '../../../logic/operate';

describe('Operate File', () => {
  it('Operation +', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('Operation -', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  it('Operation *', () => {
    expect(operate(1, 2, '*')).toBe('2');
  });

  it('Operation ÷', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  it('Operation %', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });
});
