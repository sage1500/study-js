
import { Calc } from './calc.js';

const calc = new Calc();

test('add', () => {
    expect(calc.add(1,2)).toBe(4);
});

test('sub', () => {
    expect(calc.sub(1,2)).toBe(-1);
});