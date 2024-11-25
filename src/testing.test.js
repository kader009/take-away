import { it, expect } from 'vitest';
import { add } from './testing';

it('return the current function value', () => {
  const result = add(1, 2, 3);
  expect(result).toBe(6);
});
