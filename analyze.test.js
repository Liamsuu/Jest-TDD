import analyzeArray from "./analyze";

describe("Return object with values from array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  test("Return value with random integer values", () => {
    expect(result).toMatchObject(object);
  });
});
