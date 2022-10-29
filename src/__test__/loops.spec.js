const nums = [1, 2, 3];

const add = (x, y) => x + y;

test.each(nums)('Add 2 to %i', (myVal) => {
  console.log(myVal);
  expect(add(2, 2)).toBe(Number(4));
  expect(add(2, 2)).toBeGreaterThan(3);
  expect(add(2, 2)).toBeLessThan(55);
  expect(add(2, 2)).toEqual(4);
  expect(nums).toContain(3);
});

test('Boolean', function () {
  let b = false;
  expect(b).not.toBe(4);

  expect(b).toBeFalsy();
  expect(b).not.toBeTruthy();
  expect(b).not.toBeUndefined();
  // error
});

const err = function () {
  throw new Error('Error Occured');
};

test('Throw Error', () => {
  expect(err).toThrow(Error);
});
