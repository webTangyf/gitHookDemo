/* eslint-disable no-undef */
const add = require('../index').add

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('adds "1" + "2" to equal "12"', () => {
  expect(add("1", "2")).toBe("12");
});
test('adds 1 + "2" to throw Error', () => {
  expect(() => add(1, "2")).toThrow(new Error('add 函数参数类型为 number 或者 string, 并且所有参数类型需统一'))
});
test('adds "1" + 2 to throw Error"', () => {
  expect(() => add("1", 2)).toThrow(new Error('add 函数参数类型为 number 或者 string, 并且所有参数类型需统一'))
});