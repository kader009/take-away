import { it, expect, describe } from 'vitest';
import { transfromNumber } from './transfromNum';

describe('discover', () => {
  it('this is test for string to number', () => {
    const stringnumber = '9';
    const response = transfromNumber(stringnumber);

    expect(response).toBeTypeOf('number');
    expect(response).not.toBeTypeOf('string');
    expect(isNaN(response)).not.toBe(true);
  });
});
