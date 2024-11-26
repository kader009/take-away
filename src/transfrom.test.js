import { it, expect } from 'vitest';
import { transfromNumber } from './transfromNum';

it('this is test for string to number', () => {
  const stringnumber = '9';
  const response = transfromNumber(stringnumber);

  expect(response).toBeTypeOf('number');
  expect(response).not.toBeTypeOf('string')
});
