import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  let pipe: UppercasePipe;

  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('powinien zamieniać tekst na wielkie litery', () => {
    const result = pipe.transform('test');
    expect(result).toBe('TEST');
  });
});