import { it, expect, describe, beforeAll, afterAll, beforeEach } from 'vitest';
import { transfromNumber } from './transfromNum';

beforeAll(() =>{
  console.log('beforeall');
})

afterAll(() =>{
  console.log('afterall');
})

beforeEach(() =>{
  console.log('aftereach');
})

describe('discover', () => {
  it('this is test for string to number', () => {
    const stringnumber = '9';
    const response = transfromNumber(stringnumber);

    expect(response).toBeTypeOf('number');
    expect(response).not.toBeTypeOf('string');
    expect(isNaN(response)).not.toBe(true);
  });
});
