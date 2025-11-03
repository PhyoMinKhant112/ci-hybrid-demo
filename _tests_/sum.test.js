// __tests__/sum.test.js
import { sum } from '../src/sum.js';

test('adds 2 + 2 = 5', () => {  // intentionally wrong
  expect(sum(2, 2)).toBe(5);
});