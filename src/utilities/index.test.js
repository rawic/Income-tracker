import { isEmptyObject } from './index';

describe('isEmptyObject function', () => {
  it('checks if the parameter is not an empty object', () => {
    const obj = {};

    const output = true;

    expect(isEmptyObject(obj)).toEqual(output);
  });

  it('checks if the parameter is an empty object', () => {
    const obj = { color: 'red' };

    const output = false;

    expect(isEmptyObject(obj)).toEqual(output);
  })

  it('checks if the passed parameter is an object', () => {
    const param = ['an array'];

    const output = 'Passed parameter is not an object';

    expect(() => isEmptyObject(param)).toThrow(output);
  })
});