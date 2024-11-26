import { it, expect } from 'vitest';
import { add } from './testing';

it('return the current function value', () => {
  // arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, curr) => 
    acc + curr
  );
  // action
  const result = add(numbers);
  // assert
  expect(result).toBe(expectedResult);
});

it('it should throw an error', () =>{
  const ressultFunc = () =>{
    add()
  }

  expect(ressultFunc).toThrow()
})

